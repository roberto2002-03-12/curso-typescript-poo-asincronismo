import { ProductHttpService } from './services/product-http.service';


console.log('--'.repeat(10));

(async () => {
  const productService = new ProductHttpService();

  const product = await productService.getAll();
  console.log(product);
  console.log('cantidad: ', product.length);

  const productId = product[0].id;

  await productService.update(productId, {
    price: 200,
    title: 'Gato gordo',
    description: 'Gatos con obesidad'
  });

  const productFound = await productService.findOne(productId);
  console.log('producto modificado: ', productFound);
})();

