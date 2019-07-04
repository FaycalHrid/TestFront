import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';
import { MatTableModule } from '@angular/material';

@Component({
  selector: 'app-shoot-statistics-dates',
  templateUrl: './shoot-statistics-dates.component.html',
  styleUrls: ['./shoot-statistics-dates.component.scss']
})
export class ShootStatisticsDatesComponent implements OnInit {

  // dates: any;
  ssDates: any;
  ssDateDetails: any;
  unsubscribeDetails: any;

  pagenumber: number = 1;


  constructor(private http: HttpClient) {
    this.getShootStatisticsDates();
  }

  ngOnInit() {
    this.getShootStatisticsDates();
  }


  getShootStatisticsDates()
  {
    return this.http.get('http://127.0.0.1:8000/api/shootstatisticsdates').subscribe(ssDates => {
      this.ssDates = ssDates['success'];
    });
  }

  getDateStatistics(date)
  {
    this.pagenumber = 1;
    this.http.get('http://127.0.0.1:8000/api/shootstatisticsdates/' + date).subscribe(ssDateDetails => {
      this.ssDateDetails = ssDateDetails['success'];
    });
    this.getDateUnsubStatistics(date);
  }

  getDateUnsubStatistics(date)
  {
    return this.http.get('http://127.0.0.1:8000/api/unsubcount/'+date).subscribe(unsubscribeDetails => {
      let i = 0;
      // for(i=0;i<unsubscribeDetails['success'][0].length; i++)
      // {
      this.unsubscribeDetails = JSON.stringify(unsubscribeDetails['success'][0]);
      //   console.log(unsubscribeDetails['success'][0]);
      // }
      // console.log(this.unsubscribeDetails);
      // console.log(unsubscribeDetails['success'][0]);
      // console.log(JSON.stringify(unsubscribeDetails['success'][0]));
    });
  }

  calculatePercentage(n1,n2)
  {
    if(n1 === 0 || n2 === 0)
    {
      return 0;
    }
    var n = n1 / n2 * 100;
    return parseFloat(n.toString()).toFixed(2);
  }

}
