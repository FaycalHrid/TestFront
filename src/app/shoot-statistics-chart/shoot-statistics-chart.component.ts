import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shoot-statistics-chart',
  templateUrl: './shoot-statistics-chart.component.html',
  styleUrls: ['./shoot-statistics-chart.component.scss']
})
export class ShootStatisticsChartComponent implements OnInit {

  private availableDates:any;

  statByDate: any;

  lineChartLegend = 'Shoot Statistics';
  lineChartOptions = {
    responsive: true,
  };

  lineChartData = [
    { data: [], label: 'Shoot' },
    { data: [], label: 'Delivered' },
    { data: [], label: 'Opened' },
    { data: [], label: 'Clicked' }
  ];

  lineChartType = 'line';

  lineChartLabels: any;


  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getShootStatisticsDates();
    console.log(this.availableDates);
    // this.getShootStatisticsDates();
    // this.getStatisticsByDate(this.lineChartLabels[0]);
  }

  getShootStatisticsDates() {
    return this.http.get('http://127.0.0.1:8000/api/shootstatisticsdates').subscribe(ssDates => {
    this.lineChartLabels = ssDates['success'];
    this.availableDates = ssDates['success'];
    });
  }

  getStatisticsByDate(date) {
    return this.http.get('http://127.0.0.1:8000/api/shootstatisticsbydate/' + date).subscribe(ssDates => {this.statByDate = ssDates['success'];
    // console.log(ssDates['success']);
    });
  }





  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }


}
