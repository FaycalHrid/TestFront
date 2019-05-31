import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shoot-statistics-chart',
  templateUrl: './shoot-statistics-chart.component.html',
  styleUrls: ['./shoot-statistics-chart.component.scss']
})
export class ShootStatisticsChartComponent implements OnInit {

  private availableDates: any;

  statByDate: any;

  lineChartLegend = 'Shoot Statistics';
  lineChartOptions = {
    responsive: true,
    fill: false, elements: {
      line: {
        tension: 0
      }
    }
  };

  lineChartData = [
    { data: [60,20,30,52,90,60,50], label: 'Shoot' },
    { data: [150,150,150,150,150,150,150], label: 'Delivered' },
    { data: [510,510,501,510,510,510,510], label: 'Opened' },
    { data: [250,520,502,520,250,520,250], label: 'Clicked' }
  ];

  lineChartColors = [
    {borderColor: 'blue', fill: false},
    {borderColor: 'red', fill: false},
    {borderColor: 'black', fill: false},
    {borderColor: 'green', fill: false}
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
