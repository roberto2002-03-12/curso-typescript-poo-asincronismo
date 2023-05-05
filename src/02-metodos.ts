export class MyDate {
  //por defecto las variables son publicas, es decir se puede acceder  sin problemas al valor.
  //declarar variables
  year: number;
  month: number;
  day: number;
  //inicializar
  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  };
  //metodos de clases
  printFormat(): string {
    return `${this.year}/${this.month}/${this.day}`;
  };
  //en este metodo estamos agragando un literal type que te da opciones
  add(amount: number, type: 'year' | 'month' | 'day') {
    if (type === 'year'){
      this.year += amount;
    } else if (type === 'month') {
      this.month += amount;
    } else if (type === 'day') {
      this.day += amount;
    }
  };
};

const myDate = new MyDate(2002, 3, 12);
console.log(myDate);
console.log(myDate.printFormat());