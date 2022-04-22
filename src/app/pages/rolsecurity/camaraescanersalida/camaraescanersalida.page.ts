import { Component, OnInit } from '@angular/core';
//importación de las rutas
import { Router } from '@angular/router';
//importación de los servicios de la api
import { TaskService } from 'src/app/services/task.service';

import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { HttpClient } from '@angular/common/http';

import { UserPhoto } from './../../../interfaces/task';


@Component({
  selector: 'app-camaraescanersalida',
  templateUrl: './camaraescanersalida.page.html',
  styleUrls: ['./camaraescanersalida.page.scss'],
})
export class CamaraescanersalidaPage implements OnInit {

  //llamdo de los datos url y name como dato tipo string
  url: string;

  nombre: string;

  name: any;
  role: string;
  email: string;
  telefono: any;
  documento: any;
  coincidencia: any;

  //? Matriz que contendra uan referencia a cada foto.
  public photos: UserPhoto[] = [];

  constructor(private router: Router, private foto: TaskService) {
    //llamdo del nombre del localstorage
    this.nombre=localStorage.getItem('name');
  }

  ngOnInit() {
    //llamdo de la foto
    this.traerfotol();
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

    console.log('Token -->',token);
    console.log('imgPer -->',idImgPerfil);

    this.foto.traerfotoperfil(token, idImgPerfil).subscribe((res: any)=>{
      console.log(res.data.url);
      this.url = res.data.url;
    });

  }

  addPhotoToGallery() {
    this.addNewToGallery();
  }

  //? método para tomar una fotografia. devuelve un blob
  public async addNewToGallery() {
    //? Tomar una foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      //?resolucion de la foto
      quality: 100
    });

    //? Guarda la imagen y la agrega a la colección de fotos.
    const savedImageFile = await this.savePicture(capturedPhoto);

    //console.log(savedImageFile);

    //? unshift Inserta nuevos elementos al comienzo de una matriz y devuelve la nueva longitud de la matriz.
    this.photos.unshift(savedImageFile);

  }

  public async savePicture(photo: Photo) {
    //? Convierta la foto al formato base64, requerido por la API del sistema de archivos para guardar
    const base64Data = await this.readAsBase64(photo);

    //? Escribir el archivo en el directorio de datos.
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    //console.log('Chingada',savedFile);

    const base64 = {
      base: base64Data,
    };

    const token = localStorage.getItem('token');

    this.foto.enviarfototemp(token, base64).subscribe((res: any) => {
      console.log(res);

      this.name = res.dataUser.name;
      this.documento = res.dataUser.documento;
      this.telefono = res.dataUser.telefono;
      this.email = res.dataUser.email;
      this.role = res.dataUser.role[0];
      this.coincidencia = res.datosazure[0].candidates[0].confidence;

      //this.datosUser = res.datosUser;
      //this.datosazure = res.datosazure;
    });

    //? Use webPath para mostrar la nueva imagen en lugar de base64, ya que ya está cargada en la memoria.
    return {
      filepath: fileName,
      webviewPath: photo.webPath
    };
  }

  public async readAsBase64(photo: Photo) {
    //? Obtiene la foto, léala como un blob y luego conviértala al formato base64
    const response = await fetch(photo.webPath);
    const blob = await response.blob();

    //console.log('vaina loca',response);
    //console.log('vaina loca X2', blob);

    return await this.convertBlobToBase64(blob) as string;
  }

  //? Convierte la imagen a base64
  public convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };

    reader.readAsDataURL(blob);

    //console.log(reader);
  });

}
