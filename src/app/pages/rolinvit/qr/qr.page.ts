import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../interfaces/task';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  datos: User = {
    uid: null,
    documento: null,
    nombre: null,
    apellido: null,
    telefono: null,
    email: null,
    password: null,
    rol: 'invitado',
    estado: true,
  };
  scannedCode = null;
  createCode: any;
  constructor(
    private router: Router
  ){}
 /* constructor(private barcodeScanner: BarcodeScanner, private base64ToGallery: Base64ToGallery,
    private toastCtrl: ToastController) { }*/
  /**
   * create codigo Qr
   */
  public create() {

    try{
      // eslint-disable-next-line one-var
      const documento = this.datos.documento,
      nombre = this.datos.nombre,
      apellido =  this.datos.apellido,
      telefono = this.datos.telefono,
      email =  this.datos.email;

      this.createCode = `{
        "documento": "${documento}",
        "nombre": "${nombre}",
        "apellido": "${apellido}",
        "telefono": "${telefono}",
        "correo": "${email}"
      }
      `;

      console.log(this.createCode);
    }
    catch(error){
      console.log('Error->', error);
    }
  }

  //Borrar

  public clear() {
    this.createCode = '';
  }

  ngOnInit() {
  }

  salir(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
