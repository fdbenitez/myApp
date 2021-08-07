import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarListaPage } from './mostrar-lista.page';

describe('MostrarListaPage', () => {
  let component: MostrarListaPage;
  let fixture: ComponentFixture<MostrarListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
