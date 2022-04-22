import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaraescanersalidaPageRoutingModule } from './camaraescanersalida-routing.module';

import { CamaraescanersalidaPage } from './camaraescanersalida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaraescanersalidaPageRoutingModule
  ],
  declarations: [CamaraescanersalidaPage]
})
export class CamaraescanersalidaPageModule {}
