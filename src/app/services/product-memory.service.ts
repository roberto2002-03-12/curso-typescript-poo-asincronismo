import { faker } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto} from '../dtos/product.dto';

/*
Las clases no necesariamente deben ser creadas para manejar
objetos, sino también puede ser utilizado netamente para funciones
como es el ejemplo de abajo.
*/

export class ProductMemoryService {
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

  updateProduct (id: Product['id'], changes: UpdateProductDto): Product {
    //findIndex devuelve el indice del primer metodo que cumpla con la condición
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