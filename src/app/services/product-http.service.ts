import axios from "axios";
import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { ProductService } from "../models/product-service.model";
import { Product } from "../models/product.model";

/*El verdadero ahorro de código te lo tra la IDE, pero
si usaras VIM, el ahorro de código no habría y tendrías
que tipear método por método*/

export class ProductHttpService implements ProductService {
  private url = 'https://api.escuelajs.co/api/v1/products';
  //En ProductService el getAll esta declarado para que el 
  //retorno sea un tipo Product[], sin embargo, no acepta promesas
  //para arreglar esto solamente agrega "| Promise<Product[]>"
  async getAll() {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }
  //no es necesario definir el tipo en este caso porque ya ha sido definido
  //en la interface, me refiero a definir el tipo de valor que devuelve la función
  async update(id: Product['id'], changes: UpdateProductDto) {
    const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
    return data;
  };

  async create(dto: CreateProductDto) {
    const { data } = await axios.post<Product>(`${this.url}`, dto);
    return data;
  };

  async findOne(id: Product['id']) {
    const { data } = await axios.get<Product | undefined>(`${this.url}/${id}`);
    return data;
  };
};
