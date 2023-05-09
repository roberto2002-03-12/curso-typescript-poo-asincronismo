import axios from "axios";

import { Product } from "./models/product.model";

(async () => {
  //si no colocas el tipado entonces se declarará como "any"
  async function getProducts(): Promise<Product[]> {
    const rta = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    //en el caso que la libreria no soporte el tipado una manera de hacerlo es
    //data = rta.data as Product[]; 
    return rta.data;
  };

  const products = await getProducts();
  console.log(products.map(item => `${item.id} - ${item.title}`))
})();