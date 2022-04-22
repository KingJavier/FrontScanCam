import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActufotoPageRoutingModule } from './actufoto-routing.module';

import { ActufotoPage } from './actufoto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActufotoPageRoutingModule
  ],
  declarations: [ActufotoPage]
})
export class ActufotoPageModule {}
