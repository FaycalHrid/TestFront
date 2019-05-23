import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EETransactionStatusComponent} from './eetransaction-status/eetransaction-status.component';
import {ShootStatisticsDatesComponent} from './shoot-statistics-dates/shoot-statistics-dates.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent implements OnInit {
  title = 'Angular Laravel CRUD App';

  transaction: EETransactionStatusComponent;
  transactions: any;

  ssDates: ShootStatisticsDatesComponent;
  ssDateDetails: any;


  constructor(private http: HttpClient) {
    // this.getTransactions();
    this.getShootStatisticsDates();
  }

  ngOnInit() {}



 getTransactions() {
    return this.http.get('http://127.0.0.1:8000/api/transactions').subscribe(transactions => {
      this.transactions = transactions['success']['data'];
    });
  }

  getShootStatisticsDates()
  {
    return this.http.get('http://127.0.0.1:8000/api/shootstatisticsdates').subscribe(ssDates => {
    this.ssDates = ssDates['success'];
    });
  }

  getDateStatistics($date)
  {
    return this.http.get('http://127.0.0.1:8000/api/shootstatisticsdates/date').subscribe(ssDateDetails => {
      this.ssDateDetails = ssDateDetails['success'];
    });
  }

  showTransaction(id) {
    return this.http.get('http://127.0.0.1:8000/api/transactions/' + id).subscribe(transaction => {
      this.transaction = transaction['success'];
    });
  }

}
