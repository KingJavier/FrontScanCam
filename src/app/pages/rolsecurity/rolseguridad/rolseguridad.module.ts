import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RolseguridadPageRoutingModule } from './rolseguridad-routing.module';

import { RolseguridadPage } from './rolseguridad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RolseguridadPageRoutingModule
  ],
  declarations: [RolseguridadPage]
})
export class RolseguridadPageModule {}
