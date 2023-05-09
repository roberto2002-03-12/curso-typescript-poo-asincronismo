import { faker } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto} from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

/*
Las clases no necesariamente deben ser creadas para manejar
objetos, sino también puede ser utilizado netamente para funciones
como es el ejemplo de abajo.
*/

/*
Como regla esta diciendo que debe implementar ciertos metodos
ahora, ¿Por qué esa regla?

Porque simplemente defines los métodos que deben estar presentes.
Y basicamente también es para que los programadores no se olviden,
de los métodos que debes agregar.
*/

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  getAll() {
    return this.products;
  }

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl()
      }
    }
    return this.add(newProduct);
  };

  add(product: Product) {
    this.products.push(product);
    return product;
  };

  update(id: Product['id'], changes: UpdateProductDto): Product {
    //findIndex devuelve el indice del primer objeto que cumpla con la condición
    const index = this.products.findIndex(item => item.id === id);
    const prevData = this.products[index];
    this.products[index] = {
      ...prevData,
      ...changes
    }
    return this.products[index];
  };

  findOne(id: Product['id']) {
    return this.products.find(item => item.id === id);
  };
};