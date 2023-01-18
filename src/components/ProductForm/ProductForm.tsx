import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createProduct } from "../../api/productsAPI";

export const ProductForm = () => {
  // nos permite interactuar con el contexto
  const queryClient = useQueryClient();

  //mutacion => actualizar, modificar o eliminar
  const addProductMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      console.log("success¡¡");
      // elimina cache, para que se muestren los nuevos products
      // e indicamos que key que usamos en Products para
      // el fecth
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (e) => {
      console.error(e);
    },
  });

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    // const newProduct = Object.fromEntries(formData);

    addProductMutation.mutate({
      name: formData.get("name") as string,
      price: formData.get("price") as string,
      description: formData.get("description") as string,
      inStock: true,
    });
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="price">Price</label>
      <input type="number" name="price" id="price" />

      <label htmlFor="description">Description</label>
      <textarea name="description" id="description" />

      <button type="submit">Submit</button>
    </form>
  );
};
