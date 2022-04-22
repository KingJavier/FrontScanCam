import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroinvitadoPage } from './registroinvitado.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroinvitadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroinvitadoPageRoutingModule {}
