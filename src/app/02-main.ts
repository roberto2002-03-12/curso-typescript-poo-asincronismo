import { ProductMemoryService } from './services/product-memory.service';

const productService = new ProductMemoryService();

productService.create({
  title: 'Gato gordo',
  price: 1500,
  description: 'Gato gordo orange tabby',
  categoryId: 12,
  images: []
});

/*por qué no simplemente le quito el private
y lo invoco solamente con productService.products,
bueno la razón por la cual no se debería hacer esto
es porque al hacer esto puedes modificar los valores
de la propia clase*/

const products = productService.getAll();
const productId = products[0].id;

productService.updateProduct(productId, {
  title: 'Gato gordo gris'
});

const rta = productService.findOne(productId);
console.log(rta);