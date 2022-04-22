import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilgestorPage } from './perfilgestor.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilgestorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilgestorPageRoutingModule {}
