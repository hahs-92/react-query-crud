import { IProduct } from "../../models/Product";

type Props = {
  product: IProduct;
};

export function Product({ product }: Props) {
  return (
    <article>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button>Delete</button>
      <input type="checkbox" />
      <label>In Stock</label>
    </article>
  );
}
