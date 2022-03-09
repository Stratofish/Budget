import { Injectable } from '@angular/core';
import {SinglePayment} from "./SinglePayment";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  public paymentsSubject: Subject<SinglePayment[]>;
  private payments: SinglePayment[] = [];

  constructor() {
    this.paymentsSubject = new BehaviorSubject<SinglePayment[]>([]);

    this.payments.push(
      new SinglePayment(7, 12.50, 'Netflix', true),
      new SinglePayment(7, 0.99, 'Thing subscription', false),
      new SinglePayment(21, 765.00, 'Rent', false)
    );
    this.paymentsSubject.next(this.payments);
  }
}
