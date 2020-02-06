import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FruitcardComponent } from './fruitcard.component';

describe('FruitcardComponent', () => {
  let component: FruitcardComponent;
  let fixture: ComponentFixture<FruitcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitcardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FruitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
