import { Component, OnInit } from '@angular/core';
//importación de las rutas
import { Router } from '@angular/router';
//importación de los servicios de la api
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-listadoseguridad',
  templateUrl: './listadoseguridad.page.html',
  styleUrls: ['./listadoseguridad.page.scss'],
})
export class ListadoseguridadPage implements OnInit {
  //llamdo de los datos url y name como dato tipo string
  url: string;

  nombre: string;
  entrada: any;
  salida: any;

  constructor(
    private router: Router,
    private resentrada: TaskService,
    private usuarioServicio: TaskService
  ) { }

  ngOnInit() {
    //llamdo de la foto
    this.traerfotol();
    //llamdo del token t traer el listado de entrada y salida
    const token=localStorage.getItem('token');
    // this.resentrada.listadoentrada(token).subscribe((res: any)=>{console.log(res);
    //   this.entrada=res.data;
    // });
    this.resentrada.listadoentrada(token).subscribe((res: any)=>{
      console.log(res);
      this.salida=res.data;
    });
  }

  salir(){
    //función de cerrar seción
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  traerfotol(){
    //función de tarer la foto de los servicios de la api
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
