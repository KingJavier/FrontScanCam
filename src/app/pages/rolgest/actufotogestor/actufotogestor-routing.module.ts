import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActufotogestorPage } from './actufotogestor.page';

const routes: Routes = [
  {
    path: '',
    component: ActufotogestorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActufotogestorPageRoutingModule {}
