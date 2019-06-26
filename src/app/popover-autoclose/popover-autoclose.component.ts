import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover-autoclose',
  templateUrl: './popover-autoclose.component.html',
  styleUrls: ['./popover-autoclose.component.scss']
})
export class PopoverAutocloseComponent implements OnInit {

  private details;
  private autoClose;

  constructor(details: string) {
    this.details = details;
  }

  ngOnInit() {
  }

}
