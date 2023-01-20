import { UseMutationResult } from "@tanstack/react-query";
import { IProduct } from "../../models/Product";

type Props = {
  product: IProduct;
  deleteProduct: (id: string) => void;
};

export function Product({ product, deleteProduct }: Props) {
  return (
    <article>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button onClick={() => deleteProduct(product.id?.toString()!)}>
        Delete
      </button>
      <input type="checkbox" />
      <label>In Stock</label>
    </article>
  );
}
