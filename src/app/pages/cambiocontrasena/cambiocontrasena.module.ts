import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambiocontrasenaPageRoutingModule } from './cambiocontrasena-routing.module';

import { CambiocontrasenaPage } from './cambiocontrasena.page';

import { ErrorTailorModule } from '@ngneat/error-tailor';

@NgModule({
  imports: [
    //da la funcion de los formularios reactivos
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Debes llenar este campo',
          minlength: ({ requiredLength, actualLength }) =>
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    }),
    CommonModule,
    FormsModule,
    IonicModule,
    CambiocontrasenaPageRoutingModule
  ],
  declarations: [CambiocontrasenaPage]
})
export class CambiocontrasenaPageModule {}
