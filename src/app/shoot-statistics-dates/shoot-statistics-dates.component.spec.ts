import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootStatisticsDatesComponent } from './shoot-statistics-dates.component';

describe('ShootStatisticsDatesComponent', () => {
  let component: ShootStatisticsDatesComponent;
  let fixture: ComponentFixture<ShootStatisticsDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShootStatisticsDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootStatisticsDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
