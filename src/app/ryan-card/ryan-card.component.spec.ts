import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RyanCardComponent } from './ryan-card.component';

describe('RyanCardComponent', () => {
  let component: RyanCardComponent;
  let fixture: ComponentFixture<RyanCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RyanCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RyanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
