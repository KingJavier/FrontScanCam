import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoseguridadPage } from './listadoseguridad.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoseguridadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoseguridadPageRoutingModule {}
