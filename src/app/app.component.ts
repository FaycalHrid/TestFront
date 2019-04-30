import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EETransactionStatusComponent} from './eetransaction-status/eetransaction-status.component';

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


  constructor(private http: HttpClient) {
    this.getTransactions();
  }

  ngOnInit() {}



  getTransactions() {
    return this.http.get('http://127.0.0.1:8000/api/transactions').subscribe(transactions => {
      //console.log(transactions['success']['data']);
      this.transactions = transactions['success']['data'];
    });
  }

  showTransaction(id) {
    return this.http.get('http://127.0.0.1:8000/api/transactions/' + id).subscribe(transaction => {
      console.log(transaction);
      this.transaction = transaction['success'];
    });
  }

}
