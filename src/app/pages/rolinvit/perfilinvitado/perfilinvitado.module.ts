import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilinvitadoPageRoutingModule } from './perfilinvitado-routing.module';

import { PerfilinvitadoPage } from './perfilinvitado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilinvitadoPageRoutingModule
  ],
  declarations: [PerfilinvitadoPage]
})
export class PerfilinvitadoPageModule {}
