import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilgestorPageRoutingModule } from './perfilgestor-routing.module';

import { PerfilgestorPage } from './perfilgestor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilgestorPageRoutingModule
  ],
  declarations: [PerfilgestorPage]
})
export class PerfilgestorPageModule {}
