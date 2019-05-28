import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ShootStatisticsDatesComponent} from '../shoot-statistics-dates/shoot-statistics-dates.component';

@Component({
  selector: 'app-shoot-statistics-chart',
  templateUrl: './shoot-statistics-chart.component.html',
  styleUrls: ['./shoot-statistics-chart.component.scss']
})
export class ShootStatisticsChartComponent implements OnInit {

  ssDates: any;
  ssDateDetails: any;
  statByDate: any;
  lineChartLegend = 'Shoot Statistics';
  lineChartOptions = {
    responsive: true,
    tension: 0
  };

  // lineChartData: Array;


  lineChartData = [
    { data: [330, 600, 260, 700, 700, 700, 700], label: 'Account A' },
    { data: [120, 455, 100, 340, 340, 340, 340], label: 'Account B' },
    { data: [450, 670, 800, 500, 500, 500, 500], label: 'Account C' }
  ];

  lineChartType = 'line';

  lineChartLabels = this.ssDates;

  constructor(private http: HttpClient) {
    this.getShootStatisticsDates();
    console.log(this.ssDates);
    //this.lineChartLabels = this.ssDates;
    //console.log(this.lineChartLabels);
    // for (i = 0; i < fLen; i++) {
    //   text += "<li>" + fruits[i] + "</li>";
    // }
  }

  ngOnInit() {
    this.getShootStatisticsDates();
    console.log(this.ssDates);

  }

  getShootStatisticsDates() {
    return this.http.get('http://127.0.0.1:8000/api/shootstatisticsdates').subscribe(ssDates => {this.ssDates = ssDates['success'];});
  }

  getStatisticsByDate(date) {
    return this.http.get('http://127.0.0.1:8000/api/shootstatisticsbydate/' + date).subscribe(ssDates => {this.statByDate = ssDates['success'];});
  }

  getDateStatistics(date) {
    return this.http.get('http://127.0.0.1:8000/api/shootstatisticsdates/' + date).subscribe(ssDateDetails => {this.ssDateDetails = ssDateDetails['success'];});
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
