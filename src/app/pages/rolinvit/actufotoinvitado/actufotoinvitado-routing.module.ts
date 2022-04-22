import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActufotoinvitadoPage } from './actufotoinvitado.page';

const routes: Routes = [
  {
    path: '',
    component: ActufotoinvitadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActufotoinvitadoPageRoutingModule {}
