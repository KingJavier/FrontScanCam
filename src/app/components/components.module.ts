import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
//importación de menucontroller
import { MenuapreComponent } from './menuapre/menuapre.component';


@NgModule({
  declarations: [
    //se importa el menu componente
    MenuapreComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],
  exports: [
    //se exporta el menu componente
    MenuapreComponent,
  ]
})
export class ComponentsModule { }
