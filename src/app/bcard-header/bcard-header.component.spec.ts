import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcardHeaderComponent } from './bcard-header.component';

describe('BcardHeaderComponent', () => {
  let component: BcardHeaderComponent;
  let fixture: ComponentFixture<BcardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
