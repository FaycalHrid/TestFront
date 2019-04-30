import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eetransaction-status',
  templateUrl: './eetransaction-status.component.html',
  styleUrls: ['./eetransaction-status.component.scss']
})
export class EETransactionStatusComponent implements OnInit {

  id: string;
  transactionId: string;
  recipientcount: number;
  submittedcount: number;
  deliveredcount: number;
  openedcount: number;
  clickedcount: number;
  unsubscribedcount: number;
  abusereportscount: number;
  bouncecount: number;
  deliveryrate: number;



  constructor() { }

  ngOnInit() {
  }

}
