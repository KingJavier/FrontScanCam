import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrenmaquiaprendizPageRoutingModule } from './entrenmaquiaprendiz-routing.module';

import { EntrenmaquiaprendizPage } from './entrenmaquiaprendiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrenmaquiaprendizPageRoutingModule
  ],
  declarations: [EntrenmaquiaprendizPage]
})
export class EntrenmaquiaprendizPageModule {}
