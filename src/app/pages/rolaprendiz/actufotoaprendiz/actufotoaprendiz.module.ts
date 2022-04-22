import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActufotoaprendizPageRoutingModule } from './actufotoaprendiz-routing.module';

import { ActufotoaprendizPage } from './actufotoaprendiz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActufotoaprendizPageRoutingModule
  ],
  declarations: [ActufotoaprendizPage]
})
export class ActufotoaprendizPageModule {}
