import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrenmaquiinvitadoPage } from './entrenmaquiinvitado.page';

const routes: Routes = [
  {
    path: '',
    component: EntrenmaquiinvitadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrenmaquiinvitadoPageRoutingModule {}
