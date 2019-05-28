import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
}
