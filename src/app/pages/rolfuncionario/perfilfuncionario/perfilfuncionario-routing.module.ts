import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilfuncionarioPage } from './perfilfuncionario.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilfuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilfuncionarioPageRoutingModule {}
