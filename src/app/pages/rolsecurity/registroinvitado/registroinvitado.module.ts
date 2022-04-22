import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroinvitadoPageRoutingModule } from './registroinvitado-routing.module';

import { RegistroinvitadoPage } from './registroinvitado.page';

import { ErrorTailorModule } from '@ngneat/error-tailor';

@NgModule({
  imports: [
    //da la funcion de los formularios reactivos
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Este campo es obligatorio',
          minlength: ({ requiredLength, actualLength }) =>
                      `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: error => `Address isn't valid`
        }
      }
    }),
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroinvitadoPageRoutingModule
  ],
  declarations: [RegistroinvitadoPage]
})
export class RegistroinvitadoPageModule {}
