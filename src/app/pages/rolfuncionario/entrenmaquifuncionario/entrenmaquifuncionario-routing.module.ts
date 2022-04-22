import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrenmaquifuncionarioPage } from './entrenmaquifuncionario.page';

const routes: Routes = [
  {
    path: '',
    component: EntrenmaquifuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrenmaquifuncionarioPageRoutingModule {}
