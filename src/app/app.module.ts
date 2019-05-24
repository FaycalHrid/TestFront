import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EETransactionStatusComponent } from './eetransaction-status/eetransaction-status.component';
import { ShootStatisticsDatesComponent } from './shoot-statistics-dates/shoot-statistics-dates.component';
import { LineChartComponentComponent } from './line-chart-component/line-chart-component.component';

@NgModule({
  declarations: [
    AppComponent,
    EETransactionStatusComponent,
    ShootStatisticsDatesComponent,
    LineChartComponentComponent,
    // LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
