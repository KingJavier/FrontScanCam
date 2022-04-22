import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//importación de las rutas
import { Router } from '@angular/router';
//importación del modelado de Olvido
import { Olvido } from 'src/app/interfaces/task';
//importación de los servicios de la api
import { TaskService } from 'src/app/services/task.service';
//importacion de toaskcontroller
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
//se le define la bariable datos
  datos: Olvido = {
    uid: null,
    email: null,
  };

  constructor(
    //inyecta la importación de taskservice
    private taskService: TaskService,
    //inyecta la importación de las rutas
    private router: Router,
    //inyecta la importación del constructor de formularios de angular
    private builder: FormBuilder,
    //inyecta la importación de tosatcontroller
    public toastController: ToastController
  ) { }

  async errorl() {
    //función que hace el llamado de una alerta sobre un error
    const toast = await this.toastController.create({
      message: 'Debes llenar el campo o verifica que el correo este bien escrito',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  form: FormGroup;
//se define para el formulario reactico el cual tiene que ser un validador requerido
  ngOnInit() {
    this.form = this.builder.group({
      correo: [null, [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}')]],
    });
  }

  public olvidar() {
    //se hace el llamdo de los campos del formulario y se les asigna el valor de la api
    //si no comple con los valores de la api la función try hacel el llamado del error
      try {
      // eslint-disable-next-line one-var
      const email =  this.datos.email;

      const olvido = {
        email:`${email}`,
        };
        //se crea el token para mandarlo al correo y confirmar el correo
    this.taskService.updateOlvido(olvido).subscribe((res: any) => {
      console.log(olvido);
      console.log(res);
        //this.router.navigate(['/']);
    },error => {
      this.errorl();
    });
  }
  //error en consola si no cumple con los datos
  catch(error){
    console.log('Error->', error);
  }
}

}
