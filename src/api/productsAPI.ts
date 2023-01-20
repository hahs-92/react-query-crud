import axios from "axios";
import { IProduct } from "../models/Product";
import { Product } from "../components/Product/Product";

const productsApi = axios.create({
  baseURL: "http://localhost:3000/products",
});

export const getProducts = async () => {
  const res = await productsApi.get<IProduct[]>("/");
  return res.data;
};

export const createProduct = async (product: IProduct) => {
  productsApi.post("/", product);
};

export const deleteProduct = async (productId: string) => {
  productsApi.delete(`/${productId}`);
};

export const updateProduct = async (product: IProduct) => {
  productsApi.put(`/${product.id}`, product);
};
