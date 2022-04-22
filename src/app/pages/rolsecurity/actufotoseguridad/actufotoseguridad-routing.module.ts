import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActufotoseguridadPage } from './actufotoseguridad.page';

const routes: Routes = [
  {
    path: '',
    component: ActufotoseguridadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActufotoseguridadPageRoutingModule {}
