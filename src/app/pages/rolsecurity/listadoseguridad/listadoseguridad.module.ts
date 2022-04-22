import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoseguridadPageRoutingModule } from './listadoseguridad-routing.module';

import { ListadoseguridadPage } from './listadoseguridad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoseguridadPageRoutingModule
  ],
  declarations: [ListadoseguridadPage]
})
export class ListadoseguridadPageModule {}
