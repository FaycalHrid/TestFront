import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShootStatisticsDatesComponent} from './shoot-statistics-dates/shoot-statistics-dates.component';
import {ShootStatisticsChartComponent} from './shoot-statistics-chart/shoot-statistics-chart.component';

const routes: Routes = [
  {path: 'StatisticsDetails' , component: ShootStatisticsDatesComponent},
  {path: 'StatisticsChart' , component: ShootStatisticsChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
