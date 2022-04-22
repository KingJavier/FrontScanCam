import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActufotogestorPageRoutingModule } from './actufotogestor-routing.module';

import { ActufotogestorPage } from './actufotogestor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActufotogestorPageRoutingModule
  ],
  declarations: [ActufotogestorPage]
})
export class ActufotogestorPageModule {}
