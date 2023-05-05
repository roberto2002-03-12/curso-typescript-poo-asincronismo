export class MyDate {
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
  //para retornar un valor privado es recomendable usar un getter en vez de esto
  /*
  getDay(): number {
    return this.day;
  }
  */
  //si quieres retornar un valor privado deberás declararlo de la manera _nombre-variable
  get day() {
    return this._day
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) return true;
    if (this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }
};

const myDate = new MyDate(2002, 3, 12);
console.log(myDate);
console.log(myDate.printFormat());
//no necesitas colocarle parametros al getter porque se encarga en solo retornar
console.log(myDate.day);
console.log(myDate.isLeapYear);