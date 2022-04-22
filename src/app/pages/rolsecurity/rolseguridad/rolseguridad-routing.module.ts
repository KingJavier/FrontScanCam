import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RolseguridadPage } from './rolseguridad.page';

const routes: Routes = [
  {
    path: '',
    component: RolseguridadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RolseguridadPageRoutingModule {}
