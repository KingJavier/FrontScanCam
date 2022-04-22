import { Component, OnInit } from '@angular/core';
//importación de menu controller
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menuapre',
  templateUrl: './menuapre.component.html',
  styleUrls: ['./menuapre.component.scss'],
})
export class MenuapreComponent implements OnInit {
  //se asigna como role tipo texto
  role: string;

  //se inyecta el menucontroller
  constructor(private menu: MenuController) { }

  //funcionalidad del boton amburguesa
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }


  //llamado del role desde el localstorage para asignar a cada rol su boton amburguesa
  ngOnInit() {
    const role=localStorage.getItem('role');
    console.log(role);
    this.role=role;
  }

}
