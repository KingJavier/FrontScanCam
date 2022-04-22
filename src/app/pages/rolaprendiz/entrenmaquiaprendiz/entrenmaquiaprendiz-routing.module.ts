import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntrenmaquiaprendizPage } from './entrenmaquiaprendiz.page';

const routes: Routes = [
  {
    path: '',
    component: EntrenmaquiaprendizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrenmaquiaprendizPageRoutingModule {}
