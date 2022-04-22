import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilaprendizPage } from './perfilaprendiz.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilaprendizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilaprendizPageRoutingModule {}
