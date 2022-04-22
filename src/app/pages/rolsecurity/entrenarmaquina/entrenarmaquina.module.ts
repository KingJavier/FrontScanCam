import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrenarmaquinaPageRoutingModule } from './entrenarmaquina-routing.module';

import { EntrenarmaquinaPage } from './entrenarmaquina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrenarmaquinaPageRoutingModule
  ],
  declarations: [EntrenarmaquinaPage]
})
export class EntrenarmaquinaPageModule {}
