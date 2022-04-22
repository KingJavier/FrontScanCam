import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrenmaquifuncionarioPageRoutingModule } from './entrenmaquifuncionario-routing.module';

import { EntrenmaquifuncionarioPage } from './entrenmaquifuncionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrenmaquifuncionarioPageRoutingModule
  ],
  declarations: [EntrenmaquifuncionarioPage]
})
export class EntrenmaquifuncionarioPageModule {}
