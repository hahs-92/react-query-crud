import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../api/productsAPI";
import { Product } from "./Product/Product";

export function Products() {
  const {
    isError,
    error,
    isLoading,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    select: (products) => products.sort((a, b) => b.id! - a.id!),
  });

  if (isLoading) {
    return <span>Loading...</span>;
  } else if (isError) {
    console.error({ error });
    return <span>Error: Something is wrong</span>;
  }

  return (
    <section>
      {products && products.map((p) => <Product key={p.id} product={p} />)}
    </section>
  );
}
