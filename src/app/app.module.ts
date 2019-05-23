import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EETransactionStatusComponent } from './eetransaction-status/eetransaction-status.component';
import { ShootStatisticsDatesComponent } from './shoot-statistics-dates/shoot-statistics-dates.component';

@NgModule({
  declarations: [
    AppComponent,
    EETransactionStatusComponent,
    ShootStatisticsDatesComponent,
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
