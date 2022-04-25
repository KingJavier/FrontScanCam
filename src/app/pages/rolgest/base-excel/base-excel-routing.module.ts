import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseExcelPage } from './base-excel.page';

const routes: Routes = [
  {
    path: '',
    component: BaseExcelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BaseExcelPageRoutingModule {}
