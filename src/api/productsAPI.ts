import axios from "axios";
import { IProduct } from "../models/Product";

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
