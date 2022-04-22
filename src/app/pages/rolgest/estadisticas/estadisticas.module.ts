import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';

import { IonicModule } from '@ionic/angular';

import { EstadisticasPageRoutingModule } from './estadisticas-routing.module';

import { EstadisticasPage } from './estadisticas.page';

@NgModule({
  imports: [
    NgChartsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    EstadisticasPageRoutingModule
  ],
  declarations: [EstadisticasPage]
})
export class EstadisticasPageModule {}
