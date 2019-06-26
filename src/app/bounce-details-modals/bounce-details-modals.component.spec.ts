import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BounceDetailsModalsComponent } from './bounce-details-modals.component';

describe('BounceDetailsModalsComponent', () => {
  let component: BounceDetailsModalsComponent;
  let fixture: ComponentFixture<BounceDetailsModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BounceDetailsModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BounceDetailsModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
