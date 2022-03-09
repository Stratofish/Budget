import { Component, OnInit } from '@angular/core';
import {PaymentsService} from "../../payments.service";
import {Observable} from "rxjs";
import {SinglePayment} from "../../SinglePayment";

class DayEntry {
  date: number = 0;
  payments: SinglePayment[] = [];
}

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {

  days: DayEntry[] = [];

  payments$: Observable<SinglePayment[]>;

  constructor(private paymentsService: PaymentsService) {
    for (let dayIndex = 0; dayIndex < 31; dayIndex++) {
      let day = new DayEntry();
      day.date = dayIndex + 1;
      this.days.push(day);
    }

    this.payments$ = this.paymentsService.paymentsSubject.asObservable();
    this.payments$.subscribe((payments: SinglePayment[]) => {
      for (let dayIndex = 0; dayIndex < 31; dayIndex++) {
        this.days[dayIndex].payments.length = 0;
      }

      for (let paymentKey in payments)
      {
        this.days[payments[paymentKey].date - 1].payments.push(payments[paymentKey]);
      }
    });
  }

  ngOnInit(): void {
  }

}
