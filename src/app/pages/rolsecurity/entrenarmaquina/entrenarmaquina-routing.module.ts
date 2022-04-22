import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrenarmaquinaPage } from './entrenarmaquina.page';

const routes: Routes = [
  {
    path: '',
    component: EntrenarmaquinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrenarmaquinaPageRoutingModule {}
