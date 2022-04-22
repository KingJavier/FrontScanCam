import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamaraescanersalidaPage } from './camaraescanersalida.page';

const routes: Routes = [
  {
    path: '',
    component: CamaraescanersalidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamaraescanersalidaPageRoutingModule {}
