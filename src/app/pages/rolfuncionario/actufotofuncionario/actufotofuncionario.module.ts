import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActufotofuncionarioPageRoutingModule } from './actufotofuncionario-routing.module';

import { ActufotofuncionarioPage } from './actufotofuncionario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActufotofuncionarioPageRoutingModule
  ],
  declarations: [ActufotofuncionarioPage]
})
export class ActufotofuncionarioPageModule {}
