import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisaCardComponent } from './lisa-card.component';

describe('LisaCardComponent', () => {
  let component: LisaCardComponent;
  let fixture: ComponentFixture<LisaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
