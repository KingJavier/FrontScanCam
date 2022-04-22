import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrenmaquinaPage } from './entrenmaquina.page';

const routes: Routes = [
  {
    path: '',
    component: EntrenmaquinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrenmaquinaPageRoutingModule {}
