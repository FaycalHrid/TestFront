import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-shoot-statistics-dates',
  templateUrl: './shoot-statistics-dates.component.html',
  styleUrls: ['./shoot-statistics-dates.component.scss']
})
export class ShootStatisticsDatesComponent implements OnInit {

  // dates: any;
  ssDates: any;
  ssDateDetails: any;

  constructor(private http: HttpClient) {
    // this.getTransactions();
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
    return this.http.get('http://127.0.0.1:8000/api/shootstatisticsdates/' + date).subscribe(ssDateDetails => {
      this.ssDateDetails = ssDateDetails['success'];
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
