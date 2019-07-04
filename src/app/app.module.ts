import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EETransactionStatusComponent } from './eetransaction-status/eetransaction-status.component';
import { ShootStatisticsDatesComponent } from './shoot-statistics-dates/shoot-statistics-dates.component';
import {ChartsModule} from 'ng2-charts';
import { ShootStatisticsChartComponent } from './shoot-statistics-chart/shoot-statistics-chart.component';
import { BounceDetailsModalsComponent } from './bounce-details-modals/bounce-details-modals.component';
import { PopoverAutocloseComponent } from './popover-autoclose/popover-autoclose.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTableModule } from '@angular/material';
import {CdkColumnDef} from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    EETransactionStatusComponent,
    ShootStatisticsDatesComponent,
    ShootStatisticsChartComponent,
    BounceDetailsModalsComponent,
    PopoverAutocloseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ChartsModule,
    NgxPaginationModule,
    MatTableModule
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
