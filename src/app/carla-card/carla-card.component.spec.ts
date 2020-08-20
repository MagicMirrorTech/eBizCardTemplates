import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarlaCardComponent } from './carla-card.component';

describe('CarlaCardComponent', () => {
  let component: CarlaCardComponent;
  let fixture: ComponentFixture<CarlaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarlaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarlaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
