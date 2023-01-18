import axios from "axios";
import { IProduct } from "../models/Product";

const productsApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const getProducts = async () => {
  const res = await productsApi.get<IProduct[]>("/products");
  return res.data;
};
