import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootStatisticsChartComponent } from './shoot-statistics-chart.component';

describe('ShootStatisticsChartComponent', () => {
  let component: ShootStatisticsChartComponent;
  let fixture: ComponentFixture<ShootStatisticsChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShootStatisticsChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootStatisticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
