import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActufotoinvitadoPageRoutingModule } from './actufotoinvitado-routing.module';

import { ActufotoinvitadoPage } from './actufotoinvitado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActufotoinvitadoPageRoutingModule
  ],
  declarations: [ActufotoinvitadoPage]
})
export class ActufotoinvitadoPageModule {}
