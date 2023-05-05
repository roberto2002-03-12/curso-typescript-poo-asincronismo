export class Animal {
  //protected es un privado pero que se puede heredar
  constructor(protected name: string) {}

  move() {
    console.log('me estoy moviendo');
  };

  greeting() {
    return `Hola, soy ${this.name}`;
  };

  protected doSomething() {
    console.log('Do something');
  };
};

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
  ) {
    super(name);
  }

  woof(times: number): void {
    for(let i = 0; i < times; i++) {
      console.log(`woof! ${this.name}`);
    };
    this.doSomething();
  };
  //Move de hijo
  move(): void {
    console.log('Moverse como un perro');
    //Move del padre
    super.move();
  }
  //solo los metodos pueden ser llamados fuera del constructor

};

const perroGenerico = new Dog('Firulais', 'No sé');
// perroGenerico.name = 'nombre borrado';
perroGenerico.woof(1);