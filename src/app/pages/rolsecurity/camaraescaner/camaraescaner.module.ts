import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CamaraescanerPageRoutingModule } from './camaraescaner-routing.module';

import { CamaraescanerPage } from './camaraescaner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CamaraescanerPageRoutingModule
  ],
  declarations: [CamaraescanerPage]
})
export class CamaraescanerPageModule {}
