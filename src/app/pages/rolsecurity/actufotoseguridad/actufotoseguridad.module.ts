import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActufotoseguridadPageRoutingModule } from './actufotoseguridad-routing.module';

import { ActufotoseguridadPage } from './actufotoseguridad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActufotoseguridadPageRoutingModule
  ],
  declarations: [ActufotoseguridadPage]
})
export class ActufotoseguridadPageModule {}
