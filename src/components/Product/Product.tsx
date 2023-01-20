import { IProduct } from "../../models/Product";

type Props = {
  product: IProduct;
  deleteProduct: (id: string) => void;
  updateProduct: (product: IProduct) => void;
};

export function Product({ product, deleteProduct, updateProduct }: Props) {
  return (
    <article>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <button onClick={() => deleteProduct(product.id?.toString()!)}>
        Delete
      </button>
      <input
        id={product.id?.toString() || "0"}
        type="checkbox"
        name="inStock"
        checked={product.inStock}
        onChange={(e) =>
          updateProduct({ ...product, inStock: e.target.checked })
        }
      />
      <label htmlFor={product.id?.toString() || "0"}>In Stock</label>
    </article>
  );
}
