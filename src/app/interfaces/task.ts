//modelado del llamado de los datos de register

export interface Task {
    uid: string;
    documento: string;
    nombre: string;
    apellido: string;
    telefono: string;
    email: string;
    password: string;
    role: 'seguridad'|'invitado'|'aprendiz'|'funcionario'|'gestor';
    estado: boolean;
}

//modelado del llamado de los datos de login

export interface Logeo {
  uid: string;
  email: string;
  password: string;
}

//modelado de olvido de contraseña
export interface Olvido {
  uid: string;
  email: string;
}

//modelado de user
export interface User{
  uid: string;
  documento: string;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  password: string;
  rol: 'seguridad'|'invitado'|'aprendiz'|'funcionario'|'gestor';
  estado: boolean;
}

export interface UserPhoto {
  filepath: string;
  webviewPath: string;
};
