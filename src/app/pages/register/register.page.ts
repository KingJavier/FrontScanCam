import { Component, OnInit } from '@angular/core';
//importación del modelado de register
import { Task } from 'src/app/interfaces/task';
//importación de las rutas
import { Router } from '@angular/router';
//importación de los servicios de task.service
import { TaskService } from './../../services/task.service';
//importación de sweetalert2
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  //se define la bariable datos y cmpos nulos
  datos: Task = {
    uid: null,
    documento: null,
    nombre: null,
    apellido: null,
    telefono: null,
    email: null,
    password: null,
    role: 'invitado',
    estado: true,
  };

  constructor(
    //se inyeta la imortación de taskservice
    private taskService: TaskService,
    //se inyecta la importación de router
    private router: Router,
    // se inyecta la importación del contructor de formularios de angular
    private builder: FormBuilder,
    public toastController: ToastController
  ) { }

  async errorr() {
    const toast = await this.toastController.create({
      message: 'Llena todos los campos o valida si el correo ya esta registrado ',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  form: FormGroup;
//se llaman los campos para validarlos y sean requerdos
  ngOnInit() {
    this.form = this.builder.group({
      doc: [null, Validators.required],
      name: [null, Validators.required],
      lastname: [null, Validators.required],
      phone: [null, Validators.required],
      correo: [null,[Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{2,}@[a-zA-Z-_.]{2,}[.]{1}[a-zA-Z]{2,}')]],
      contraseña: [null, Validators.required],
      confirmarcontraseña: [null, Validators.required],
    });
  }

  public registrar() {
    //se hace el llamdo de los campos del formulario y se les asigna el valor de la api
    //si no comple con los valores de la api la función try hacel el llamado del error
      try {
      // eslint-disable-next-line one-var
      const documento = this.datos.documento,
      nombre = this.datos.nombre,
      apellido =  this.datos.apellido,
      telefono = this.datos.telefono,
      email =  this.datos.email,
      password =  this.datos.password,
      role =  this.datos.role;

      const task = {
        name:`${nombre}`,
        apellido:`${apellido}`,
        telefono:`${telefono}`,
        documento:`${documento}`,
        email:`${email}`,
        password:`${password}`,
        role:`${role}`,
        };
        //se crea el usuario con el llamado a create task y lo retorna a verificación de email
    this.taskService.createsTask(task).subscribe((res: any) => {
      console.log(res);
        this.router.navigate(['/verificacion-email']);
    },error => {
      this.errorr();
    });
  }
  //error en consola si no cumple con los datos
  catch(error){
    console.log('Error->', error);
  }
}
}
