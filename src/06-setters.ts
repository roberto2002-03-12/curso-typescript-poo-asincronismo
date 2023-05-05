class MyDate {
  constructor (
    public year: number, 
    public month: number, 
    private _day: number = 3
  ) {};
  
  printFormat(): string {
    const month = this.addPadding(this.month);
    const day = this.addPadding(this._day);
    return `${this.year}/${month}/${day}`;
  };

  private addPadding(value: number): string {
    if (value < 10) return `0${value}`;

    return `${value}`;
  }

  add(amount: number, type: 'year' | 'month' | 'day') {
    if (type === 'year'){
      this.year += amount;
    } else if (type === 'month') {
      this.month += amount;
    } else if (type === 'day') {
      this._day += amount;
    }
  };

  get day() {
    return this._day
  };

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  };

  set setDay(value: number) {
    if (value > 31) throw new Error('No puede ser mayor de 31 días');
    this._day = value;
  };
};

const myDate = new MyDate(2002, 3, 12);
console.log(myDate);
console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.isLeapYear);
//no se declara con parametros sino con "="
myDate.setDay = 1;
console.log(myDate.day);