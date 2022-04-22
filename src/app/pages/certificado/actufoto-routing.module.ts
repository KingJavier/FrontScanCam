import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActufotoPage } from './actufoto.page';

const routes: Routes = [
  {
    path: '',
    component: ActufotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActufotoPageRoutingModule {}
