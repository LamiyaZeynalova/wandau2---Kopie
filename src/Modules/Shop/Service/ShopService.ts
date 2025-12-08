import * as ShopProvider from "../Provider/ShopProvider";

export class ShopService {
  static async productList() {
    return await ShopProvider.getProducts().then((res) => {
      return res.data.map((item) => ({
        ...item,
        productImage: `${import.meta.env.VITE_IMAGE_URL}${item.productImage}`,
      }));
    });
  }
  static async shopDetails(id: string) {
    console.log(id, "id ");

    return await ShopProvider.getProductDetails(id).then((res) => {
      return {
        ...res.data,
        productImage: import.meta.env.VITE_IMAGE_URL + res.data.productImage,
      };
    });
  }

  static async searchLocal(query: string) {
    const products = await this.productList(); // get all products

    const lower = query.toLowerCase();

    return products.filter(
      (item) =>
        item.name.toLowerCase().includes(lower) ||
        item.details.toLowerCase().includes(lower)
    );
  }
}
