import { Component, OnInit } from '@angular/core';
//importacion del los servicios de la api
import { TaskService } from 'src/app/services/task.service';
//importación de toastcontroller para formularios reactivos
import { ToastController } from '@ionic/angular';
//importación de form group para formularios reactivos
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiocontrasena',
  templateUrl: './cambiocontrasena.page.html',
  styleUrls: ['./cambiocontrasena.page.scss'],
})
export class CambiocontrasenaPage implements OnInit {

  constructor(
    //se inyectan cambio de la contraseña
    private cambio: TaskService,
    //se inyecta el constructor de formularios
    private builder: FormBuilder,
    //se inyecta toastcontroller
    public toastController: ToastController
  ) { }

  //función de aleta por caso de error
  async errorl() {
    const toast = await this.toastController.create({
      message: 'Datos Invalidos',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  //se llama los form group
  // eslint-disable-next-line @typescript-eslint/member-ordering
  form: FormGroup;

  ngOnInit() {
    //esta función hace los campos obligatorios
    this.form = this.builder.group({
      codigo: [null, Validators.required],
      contraseña: [null, Validators.required],
    });
  }

  public actucontrasena(codigo, contrasena){
    //esta funcion ejecuta el servicio de cambio de contraseña de la api
    try{
      console.log(codigo);
      console.log(contrasena);
      const datos={
        newPass: contrasena,
        resetCode: codigo,
      };
      this.cambio.cambiocontrasena(datos).subscribe(res=>{console.log(res);
      },error => {
        this.errorl();
      });

    }
    catch(e){
      console.log('Error->', e);
    }

  }

}
