/*
una interface puede ser utilizado para implementar en una clase
esto puede ser utilizado para remplazar a la clase padre y que 
la interface sea utilizada en otras clases.
*/

//las interfaces solo puden ser utilizadas para definir los datos y tipos
//así también se puede declarar funciones y el tipo que va ser, más no hacer lógica
//utiliza las interfaces para remplazar las clases cuando no se necesita realizar
//funciones o alguna complejidad.
//por ejemplo: se puede definir para el recibo de datos de una api.
export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
};

const driver: Driver = {
  database: '',
  password: '',
  port: 23,
  connect: function (): void {
    throw new Error("Function not implemented.");
  }
};

class PostgresDriver implements Driver {
  constructor (
    public database: string,
    public password: string,
    public port: number
  ) {

  }

  connect(): void {
    
  }
};