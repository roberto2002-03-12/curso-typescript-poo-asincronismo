export class MyDate {
  //puedes declarar los valores sin hacerlo acá
  /*
  year: number;
  month: number;
  private day: number;
  */
  
  //solo necesitas esto para declarar, también le puedes establecer valores predeterminados
  constructor (
    public year: number, 
    public month: number, 
    private day: number = 3
  ) {};
  
  //metodos de clases
  printFormat(): string {
    const month = this.addPadding(this.month);
    const day = this.addPadding(this.day);
    return `${this.year}/${month}/${day}`;
  };

  //el private también se puede agregar a los metodos dentro de la clase
  private addPadding(value: number): string {
    if (value < 10) return `0${value}`;

    return `${value}`;
  }

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
  //para acceder al valor privado necesitas crear un método para eso.
  getDay(): number {
    return this.day;
  }
};

const myDate = new MyDate(2002, 3, 12);
console.log(myDate);
console.log(myDate.printFormat());
console.log(myDate.getDay());