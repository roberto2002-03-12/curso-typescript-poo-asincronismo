//un objeto o valor estatico son los que no se necesitan inicializar
//este es un ejemplo, de frente estamos llamando a pi
console.log('Math.PI', Math.PI);

class MyMath {
  //prevenir cambios y que siga siendo estatico
  //para eso le agregamos el readonly
  static readonly PI = 3.14;

  //...numbers: number[]: todo los números que me pases se agregaran en un array
  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => max >= item ? max : item, 0);
  };
};

console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.max(122, 2, 1, 12, 9));
console.log('MyMath.max', MyMath.max(-1, -3, -9, -2));