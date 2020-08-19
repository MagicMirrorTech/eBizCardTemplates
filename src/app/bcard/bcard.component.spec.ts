import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcardComponent } from './bcard.component';

describe('BcardComponent', () => {
  let component: BcardComponent;
  let fixture: ComponentFixture<BcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
