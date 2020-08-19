import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcardContentComponent } from './bcard-content.component';

describe('BcardContentComponent', () => {
  let component: BcardContentComponent;
  let fixture: ComponentFixture<BcardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
