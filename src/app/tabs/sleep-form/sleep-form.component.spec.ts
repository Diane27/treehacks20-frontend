import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SleepFormComponent } from './sleep-form.component';

describe('SleepFormComponent', () => {
  let component: SleepFormComponent;
  let fixture: ComponentFixture<SleepFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SleepFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SleepFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
