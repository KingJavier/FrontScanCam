import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilfuncionarioPageRoutingModule } from './perfilfuncionario-routing.module';

import { PerfilfuncionarioPage } from './perfilfuncionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilfuncionarioPageRoutingModule
  ],
  declarations: [PerfilfuncionarioPage]
})
export class PerfilfuncionarioPageModule {}
