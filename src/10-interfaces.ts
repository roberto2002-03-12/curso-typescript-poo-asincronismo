/*
una interface puede ser utilizado para implementar en una clase
esto puede ser utilizado para remplazar a la clase padre y que 
la interface sea utilizada en otras clases.
*/

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