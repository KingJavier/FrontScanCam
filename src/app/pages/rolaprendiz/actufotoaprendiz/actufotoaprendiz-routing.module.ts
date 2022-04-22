import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActufotoaprendizPage } from './actufotoaprendiz.page';

const routes: Routes = [
  {
    path: '',
    component: ActufotoaprendizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActufotoaprendizPageRoutingModule {}
