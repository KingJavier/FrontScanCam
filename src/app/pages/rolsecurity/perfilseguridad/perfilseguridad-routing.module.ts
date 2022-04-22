import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilseguridadPage } from './perfilseguridad.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilseguridadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilseguridadPageRoutingModule {}
