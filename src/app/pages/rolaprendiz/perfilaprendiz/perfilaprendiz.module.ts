import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilaprendizPageRoutingModule } from './perfilaprendiz-routing.module';

import { PerfilaprendizPage } from './perfilaprendiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilaprendizPageRoutingModule
  ],
  declarations: [PerfilaprendizPage]
})
export class PerfilaprendizPageModule {}
