import { AbstractType, Component, OnInit,  ViewChild } from '@angular/core';
//importación de las rutas
import { Router } from '@angular/router';
//importación de los servicios de la api
import { TaskService } from 'src/app/services/task.service';

import {Chart} from 'chart.js';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {
  //llamdo de los datos url y name como dato tipo string
  url: string;
  nombre: string;

  entrada: number;
  salida: any;

  constructor(private router: Router, private usuarioServicio: TaskService) {
    //llamdo del nombre del localstorage
    this.nombre=localStorage.getItem('name');
  }

  ngOnInit() {
    //llamdo de la foto
    this.traerfotol();
    //this.estadisticas();
    this.traerregistros();
  }

  traerregistros(){
    //función de tarer la foto de los servicios de la api
    const token = localStorage.getItem('token');

    console.log('Token -->',token);

    this.usuarioServicio.numregentrada(token).subscribe((res: any)=>{
      console.log(res.data);
      this.entrada = res.data;
    });

    this.usuarioServicio.numregsalida(token).subscribe((res: any)=>{
      console.log(res.data);
      const hola = res.data;
    });

    this.estadisticas(5,10);
  }

  async estadisticas(entrada: number, salida: number){
    const canvas = document.getElementById('estadistica') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['ENTRADA', 'SALIDA'],
            datasets: [{
                label: 'REGISTROS',
                data: [entrada, salida],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  }

  salir(){
    //función de cerrar seción
    localStorage.clear();
    this.router.navigate(['login']);
  }


  traerfotol(){
    //función de tarer la foto de los servicios de la api
    const token = localStorage.getItem('token');
    const idImgPerfil = localStorage.getItem('idImgPerfil');

    this.usuarioServicio.traerfotoperfil(token, idImgPerfil).subscribe((res: any)=>{
      //console.log(res.data.url);
      this.url = res.data.url;
    });
  }

}
