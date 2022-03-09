import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-label',
  templateUrl: './date-label.component.html',
  styleUrls: ['./date-label.component.css']
})
export class DateLabelComponent implements OnInit {

  @Input()
  date: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
