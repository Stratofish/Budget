import {Component, Input, OnInit} from '@angular/core';
import {SinglePayment} from "../../SinglePayment";

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input()
  date: number = 0;

  @Input()
  payments: SinglePayment[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
