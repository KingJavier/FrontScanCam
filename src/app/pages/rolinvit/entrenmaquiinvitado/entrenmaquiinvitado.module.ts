import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrenmaquiinvitadoPageRoutingModule } from './entrenmaquiinvitado-routing.module';

import { EntrenmaquiinvitadoPage } from './entrenmaquiinvitado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrenmaquiinvitadoPageRoutingModule
  ],
  declarations: [EntrenmaquiinvitadoPage]
})
export class EntrenmaquiinvitadoPageModule {}
