import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActufotofuncionarioPage } from './actufotofuncionario.page';

const routes: Routes = [
  {
    path: '',
    component: ActufotofuncionarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActufotofuncionarioPageRoutingModule {}
