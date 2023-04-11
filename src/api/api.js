import axios from "axios";
import apiUrl from "../config";

export const getProduct = async () => {
  const product = await axios.get(apiUrl);
  return product.data;
};

export const detailProduct = async (id) => {
  const product = await axios.get(`${apiUrl}/${id}`);
  return product.data;
};

export const addProduct = async (product) => {
  const productStore = await axios.post(apiUrl, product);
  return productStore.data;
};

export const updateProduct = async (id, product) => {
  const productStore = await axios.put(`${apiUrl}/${id}`, product);
  return productStore.data;
};

export const deleteProduct = async (id) => {
  const product = await axios.delete(`${apiUrl}/${id}`);
  return product.data;
};
