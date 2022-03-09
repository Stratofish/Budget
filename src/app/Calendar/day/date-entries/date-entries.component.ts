import {Component, Input, OnInit} from '@angular/core';
import {SinglePayment} from "../../../SinglePayment";

@Component({
  selector: 'app-date-entries',
  templateUrl: './date-entries.component.html',
  styleUrls: ['./date-entries.component.css']
})
export class DateEntriesComponent implements OnInit {

  @Input()
  payments: SinglePayment[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
