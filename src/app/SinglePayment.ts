export class SinglePayment {
  constructor(
    public date: number,
    public amount: number,
    public name: string,
    public isPredicted: boolean
  ) {}
}



// Todo: Store predicted date that this came from to replace, maybe instance # too to multiple payments per day?
