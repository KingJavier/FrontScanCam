import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilinvitadoPage } from './perfilinvitado.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilinvitadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilinvitadoPageRoutingModule {}
