import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntrenmaquiinvitadoPage } from './entrenmaquiinvitado.page';

describe('EntrenmaquiinvitadoPage', () => {
  let component: EntrenmaquiinvitadoPage;
  let fixture: ComponentFixture<EntrenmaquiinvitadoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrenmaquiinvitadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntrenmaquiinvitadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
