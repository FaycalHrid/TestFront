import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EETransactionStatusComponent } from './eetransaction-status/eetransaction-status.component';
import { ShootStatisticsDatesComponent } from './shoot-statistics-dates/shoot-statistics-dates.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { GoogleLineChartComponent } from './google-line-chart/google-line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    EETransactionStatusComponent,
    ShootStatisticsDatesComponent,
    GoogleLineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
