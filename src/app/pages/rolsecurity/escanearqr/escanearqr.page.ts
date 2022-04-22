import { Component, OnInit } from '@angular/core';
//importación de las rutas
import { Router } from '@angular/router';
//importación de los servicios de la api
import { TaskService } from 'src/app/services/task.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-escanearqr',
  templateUrl: './escanearqr.page.html',
  styleUrls: ['./escanearqr.page.scss'],
})
export class EscanearqrPage implements OnInit {
  //llamdo de los datos url y name como dato tipo string
  url: string;

  nombre: string;

  constructor(
    private router: Router,
    private barcodeScanner: BarcodeScanner,
    private usuarioServicio: TaskService
  ) {
    //llamdo del nombre del localstorage
    this.nombre=localStorage.getItem('name');
  }

  ngOnInit() {
    //llamdo de la foto
    this.traerfotol();
  }

  escanearqr() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
    }).catch(err => {
        console.log('Error', err);
    });
  }

  salir(){
    localStorage.clear();
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
