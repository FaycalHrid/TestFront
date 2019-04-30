import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EETransactionStatusComponent } from './eetransaction-status.component';

describe('EETransactionStatusComponent', () => {
  let component: EETransactionStatusComponent;
  let fixture: ComponentFixture<EETransactionStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EETransactionStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EETransactionStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
