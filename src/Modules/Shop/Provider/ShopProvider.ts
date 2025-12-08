import $axios from "../../../api/axiosinterceptor";
import $api from "../../../api/endpoints";
import type { IProduct } from "../Models/ShopModel";

export const getProducts = async () => {
  return await $axios.get<IProduct[]>($api("get_all_products"))
};

export const getProductDetails = async (id: string) => {
  console.log(id, "id");
  
  return await $axios.get<IProduct>(`${$api("get_single_product")}/${id}`);
};