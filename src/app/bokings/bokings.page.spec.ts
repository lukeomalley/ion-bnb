import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BokingsPage } from './bokings.page';

describe('BokingsPage', () => {
  let component: BokingsPage;
  let fixture: ComponentFixture<BokingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BokingsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BokingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
