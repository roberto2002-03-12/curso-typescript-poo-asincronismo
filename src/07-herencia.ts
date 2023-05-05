export class Animal {
  constructor(public name: string) {}

  move() {
    console.log('me estoy moviendo');
  };

  greeting() {
    return `Hola, soy ${this.name}`;
  };
};

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
  ) {
    //en una herencia si haces un constructor le debes pasar un super
    //especificando sus valores que tiene el padre, los otros valores
    //propios del heredero, no son necesarios de enviar.
    super(name);
  }

  woof(times: number) {
    for(let i = 0; i < times; i++) {
      console.log('woof');
    };
  };
};

const animalGenerico = new Animal('Gato gordo');
console.log(animalGenerico.greeting());
animalGenerico.move();

const perroGenerico = new Dog('Firulais', 'No sé');
console.log(perroGenerico.greeting());
perroGenerico.move();
perroGenerico.woof(2);