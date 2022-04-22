import { Component, OnInit } from '@angular/core';
//importación de las rutas
import { Router } from '@angular/router';
//importación de los servicios de la api
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-perfilaprendiz',
  templateUrl: './perfilaprendiz.page.html',
  styleUrls: ['./perfilaprendiz.page.scss'],
})
export class PerfilaprendizPage implements OnInit {
  //llamado de los datos en tipo string
  url: string;

  nombre: string;
  role: string;
  correo: string;
  telefono: any;
  documento: any;

  constructor(private router: Router, private usuarioServicio: TaskService) {
    //datos traidos del localstorage
    this.nombre=localStorage.getItem('name');
    this.role=localStorage.getItem('role');
    this.correo=localStorage.getItem('email');
    this.telefono=localStorage.getItem('telefono');
    this.documento=localStorage.getItem('documento');
  }

  ngOnInit() {
    //lamado de la foto
    this.traerfotol();
  }

  salir(){
    //función de cerrado de seción
    localStorage.clear();
    this.router.navigate(['login']);
  }

  traerfotol(){
    //función traer foto de los servicios de pai
    const token = localStorage.getItem('token');
    const idImgPerfil = localStorage.getItem('idImgPerfil');

    console.log('Token -->',token);
    console.log('imgPer -->',idImgPerfil);

    this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res: any)=>{
      console.log(res.data.url);
      this.url = res.data.url;
    });
  }

}
