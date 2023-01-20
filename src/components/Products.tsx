import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getProducts, deleteProduct } from "../api/productsAPI";
import { Product } from "./Product/Product";

export function Products() {
  // nos permite interactuar con el contexto
  const queryClient = useQueryClient();
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

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      console.log("success¡¡");
      // elimina cache, para que se muestren los nuevos products
      // e indicamos que key que usamos en Products para
      // el fecth
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });

  if (isLoading) {
    return <span>Loading...</span>;
  } else if (isError) {
    console.error({ error });
    return <span>Error: Something is wrong</span>;
  }

  return (
    <section>
      {products &&
        products.map((p) => (
          <Product
            key={p.id}
            product={p}
            deleteProduct={deleteProductMutation.mutate}
          />
        ))}
    </section>
  );
}
