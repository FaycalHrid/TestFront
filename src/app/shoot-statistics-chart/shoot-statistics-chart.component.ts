import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-shoot-statistics-chart',
  templateUrl: './shoot-statistics-chart.component.html',
  styleUrls: ['./shoot-statistics-chart.component.scss']
})
export class ShootStatisticsChartComponent implements OnInit {


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

  lineChartLabels:any;


  constructor(private http: HttpClient) {
    this.lineChartLabels =  this.getShootStatisticsDates();
    // for (let i = 0; i < this.lineChartLabels.length; i++) {
    //   this.getStatisticsByDate(this.ssDates[i]);
    //   this.lineChartData[0].data.push(this.statByDate["shooted_volume"]);
    console.log(this.lineChartLabels);
    // }
    // this.getStatisticsByDate(this.ssDates[0]);
  }

  ngOnInit() {
  }

  getShootStatisticsDates() {
    return this.http.get('http://127.0.0.1:8000/api/shootstatisticsdates').subscribe(ssDates => {this.lineChartLabels = ssDates['success'];});
  }

  getStatisticsByDate(date) {
    return this.http.get('http://127.0.0.1:8000/api/shootstatisticsbydate/' + date).subscribe(ssDates => {this.statByDate = ssDates['success'];});
  }





  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    // console.log(event, active);
  }


}
