import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-bounce-details-modals',
  templateUrl: './bounce-details-modals.component.html',
  styleUrls: ['./bounce-details-modals.component.scss']
})
export class BounceDetailsModalsComponent implements OnInit {
  @Input() name;
  constructor() { }

  ngOnInit() {
  }
}
