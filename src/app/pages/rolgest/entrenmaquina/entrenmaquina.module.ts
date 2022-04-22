import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrenmaquinaPageRoutingModule } from './entrenmaquina-routing.module';

import { EntrenmaquinaPage } from './entrenmaquina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrenmaquinaPageRoutingModule
  ],
  declarations: [EntrenmaquinaPage]
})
export class EntrenmaquinaPageModule {}
