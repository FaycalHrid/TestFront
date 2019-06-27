import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

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
    fill: false,
    elements: {
      line: {
        tension: 0
      }
    },
    zoom: {
      enabled: true,
      mode: 'x'
    }
  };

  lineChartData = [
    { data: [], label: 'Shoot' },
    { data: [], label: 'Delivered' },
    { data: [], label: 'Opened' },
    { data: [], label: 'Clicked' }
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
    this.getShootStatisticsDates();

  }

  ngOnInit() {
  }

  getShootStatisticsDates() {
    return this.http.get('http://127.0.0.1:8000/api/shootstatisticsdates').subscribe(ssDates => {
      ssDates['success'].reverse();
    this.lineChartLabels = ssDates['success'];
    this.availableDates = ssDates['success'];
    let i = 0;
    for (i = 0; i < this.availableDates.length; i++)
    {
      this.getStatisticsByDate(this.availableDates[i]);
    }
    });
  }

  getStatisticsByDate(date) {
    return this.http.get('http://127.0.0.1:8000/api/shootstatisticsbydate/' + date).subscribe(ssDates => {
      this.statByDate = ssDates['success'];
      this.lineChartData[0]['data'].push(this.statByDate[0]["shooted_volume"]);
      this.lineChartData[1]['data'].push(this.statByDate[0]["delivered_volume"]);
      this.lineChartData[2]['data'].push(this.statByDate[0]["opener"]);
      this.lineChartData[3]['data'].push(this.statByDate[0]["clicker"]);
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
