export class MyDate {
  //declarar variables
  year: number;
  month: number;
  day: number;
  //inicializar
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
};

const myDate = new MyDate(2002, 3, 12);
console.log(myDate);