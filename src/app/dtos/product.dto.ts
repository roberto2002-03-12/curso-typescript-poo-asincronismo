//un DTO sirve para transferir datos a travez de la aplicación
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

//omit sirve para omitir parametros de una clase, primera se coloca el tipo y luego los parametros
//acá basicamente se esta utilizando la interfaz para obtener los datos de Product y modificarlo
//a la vez eliminando dos parametros y a la vez agregando 1.
export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
  //en este caso product es una interface, sin embargo, en una clase con metodos
  //también se le puede obviar los metodos simplemente agregando sus nombres
  categoryId: Category['id'];
}
/*
La interfaz UpdateProductDto extiende (hereda) de la interfaz Partial<CreateProductDto>, lo que 
significa que UpdateProductDto tiene todos los mismos campos que CreateProductDto, pero todos 
son opcionales (es decir, pueden ser nulos o no definidos). Esto se logra utilizando la utilidad d
e tipo Partial<T>, que toma una interfaz T y hace que todos sus campos sean opcionales.
*/
export interface UpdateProductDto extends Partial<CreateProductDto> {}

/*
¿Para que demonios usar DTO?
puede ser util para modificar los parametros de una clase como se ve en los casos de arriba
también puede ser reutilizado en otros metodos
*/