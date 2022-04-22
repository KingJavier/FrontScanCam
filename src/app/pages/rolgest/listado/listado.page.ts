import { Component, OnInit } from '@angular/core';
//importación de las rutas
import { Router } from '@angular/router';
//importación de los servicios de la api
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {
  //llamdo de los datos url y name como dato tipo string
  url: string;

  nombre: string;

  usuarios: any;

  constructor(
    //inyecta la importación de las rutas
    private router: Router,
    //inyecta la importación de los servicios de la api
    private usuarioservicio: TaskService
  ) {
    //llamdo del nombre del localstorage
    this.nombre=localStorage.getItem('name');
  }

  ngOnInit() {
     //llamdo de la foto
     this.traerfotol();
    //llamdo del token del localstorage
    const token=localStorage.getItem('token');
    this.usuarioservicio.listadogest(token).subscribe((res: any)=>{console.log(res);
      this.usuarios=res.users;
      console.log(res.users);
    });
  }

  cambiarrole(value, id){
    //función que trae el servicio de cambiar el rol
    console.log(value);
    console.log(id);
    const role={
      role: value
    };
    const token=localStorage.getItem('token');
    this.usuarioservicio.actualizarrole(token, id, role).subscribe((res: any)=>{console.log(res);
    });
  }

  activar(id){
    //función qye trae el servicio de activar un usuario
    console.log(id);
    const token=localStorage.getItem('token');
    this.usuarioservicio.activar(token, id).subscribe((res: any)=>{console.log(res);
    });
  }

  deshabilitar(id){
    //función qye trae el servicio de desactivar un usuario
    console.log(id);
    const token=localStorage.getItem('token');
    this.usuarioservicio.inhabilitar(token, id).subscribe((res: any)=>{console.log(res);
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

    this.usuarioservicio.traerfotoperfil(token, idImgPerfil).subscribe((res: any)=>{
      console.log(res.data.url);
      this.url = res.data.url;
    });
  }

}
