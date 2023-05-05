import { Animal, Dog } from './08-acceso-protegido';

/*
Abstract es recomendable usarlo en clases padres, como
por ejemplo en este caso se agregaría abstract antes del class
haciendo que new Animal ya no funcione y solo pueda utilizarce Dog
es decir, haces que la clase padre sea solo utilizable para poder
heredar valores y así reutilizar código
*/

const animal = new Animal('Aguila');
animal.greeting();

const perro = new Dog('Ladrador', 'Matador de aguilas');
