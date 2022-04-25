import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BaseExcelPageRoutingModule } from './base-excel-routing.module';

import { BaseExcelPage } from './base-excel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BaseExcelPageRoutingModule
  ],
  declarations: [BaseExcelPage]
})
export class BaseExcelPageModule {}
