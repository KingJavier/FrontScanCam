import { Injectable } from '@angular/core';
//importación de httpclient
import { HttpClient, HttpHeaders } from '@angular/common/http';
//importación del modelo olvido
import { Olvido, } from '../interfaces/task';

import { Task } from './../interfaces/task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

//llamado de la api (apisacancam01)

  private api = 'https://apiscancam01.herokuapp.com/api';


//inyecta la importación de httpclient

  constructor(
    private http: HttpClient,
  ) { }


//llamado del metodo login de la api

  createLogeo(logeo: any) {
    const path = '';
    return this.http.post('https://apiscancam01.herokuapp.com/api/auth/login', logeo);
  }

//llamado del metodo register de la api

  createsTask(task: any) {
    const path = '';
    return this.http.post('https://apiscancam01.herokuapp.com/api/auth/register', task);
  }
//llamado del metodo forgot-password de la api

  updateOlvido(olvido: any) {
    const path = 'https://apiscancam01.herokuapp.com/api/auth/forgot-password';
    return this.http.put<Olvido>(path, olvido);
  }

  //llamdo del metodo crear foto
  createsFoto(token, foto: any) {
    const path = '';
    return this.http.post('https://apiscancam01.herokuapp.com/api/perfil', foto, {headers:{authorization: `${token}`}});
  }

//llamado del metodo listado del gestor
  listadogest(token: any){
    return this.http.get('https://apiscancam01.herokuapp.com/api/auth/users', {headers:{authorization: `${token}`}});
  }

//llamdo de metodo actualización de rol
  actualizarrole(token, id, role){
    return this.http.put(`https://apiscancam01.herokuapp.com/api/auth/actualizar-rol/${id}`, role, {headers:{authorization: `${token}`}});
  }

//llamdo del metodo activar usuario
  activar(token, id){
    return this.http.put(`https://apiscancam01.herokuapp.com/api/auth/activar/${id}`, {}, {headers:{authorization: `${token}`}});
  }

//llamdo del metodo deshabilitar usuario
  inhabilitar(token, id){
    return this.http.put(`https://apiscancam01.herokuapp.com/api/auth/deshabilitar/${id}`, {}, {headers:{authorization: `${token}`}});
  }

//llamdo del metodo enviar correo
  enviarcorreo(email){
    return this.http.post(`https://apiscancam01.herokuapp.com/api/auth/verifyemail/`, email);
  }

  listadoentrada(token){
    return this.http.get(`https://apiscancam01.herokuapp.com/api/registro`, {headers:{authorization: `${token}`}});
  }

  //llamdo del metodo listado de salida
  // listadosalida(token){
  //   return this.http.get(`https://apiscancam01.herokuapp.com/api/regsalida`, {headers:{authorization: `${token}`}});
  // }

//llamdo del metodo de cambio de contraseña
  cambiocontrasena(body){
    return this.http.put(`https://apiscancam01.herokuapp.com/api/auth/reset-password`, body);
  }

//llamdo del metodo traer foto de perfil
  traerfotoperfil(token, idImgPerfil){
    return this.http.get(`https://apiscancam01.herokuapp.com/api/perfil/${idImgPerfil}`, {headers:{authorization: `${token}`}});
  }

//llamdo del metodo certificado
  createsCertificado(token, foto: any) {
    return this.http.post('https://apiscancam01.herokuapp.com/api/certificado', foto, {headers:{authorization: `${token}`}});
  }

  //? Ruta para enviar base64 de la camara storage.
  enviarfoto(token, body){
    return this.http.post(`https://apiscancam01.herokuapp.com/api/storage/`, body, {headers:{authorization: `${token}`}});
  }

  //? Ruta para enviar base64 de la camara fototemp.
  enviarfototemp(token, body){
    return this.http.post(`https://apiscancam01.herokuapp.com/api/fototemp/`, body, {headers:{authorization: `${token}`}});
  }

  //? Ruta para enviar base64 de la camara fototemp.
  enviarfototempsal(token, body){
    return this.http.post(`https://apiscancam01.herokuapp.com/api/fototempsal/`, body, {headers:{authorization: `${token}`}});
  }

  //? Metodo para traer numeor de registros de entrada
  numregentrada(token){
    return this.http.get(`https://apiscancam01.herokuapp.com/api/registro/numeroregistros`, {headers:{authorization: `${token}`}});
  }

  //? Metodo para traer numeor de registros de salida
  numregsalida(token){
    return this.http.get(`https://apiscancam01.herokuapp.com/api/regsalida/numeroregistros`, {headers:{authorization: `${token}`}});
  }

  //?llamdo del metodo crear foto
  enviarexcel(token, excel: any) {
    return this.http.post('https://apiscancam01.herokuapp.com/api/auth/excel', excel, {headers:{authorization: `${token}`}});
  }
}
