import { useEffect, useState } from "react";
import type { IProduct } from "../Models/ShopModel";
import { ShopService } from "../Service/ShopService";
import ProductCard from "../../../components/ProductCard";
import Loading from "../../../components/Loading";


const Shop = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<IProduct[]>([]);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await ShopService.productList();
      setProducts(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      getData();
    }
  }, []);



  if(loading){
    return <Loading/>
  }

  return (
    <section className="shop">
      <div className="container">
        <div className="row">
          <h2>Shop Page</h2>
          {products.slice(0, 12).map((item) => (
            <ProductCard product={item} key={item._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shop;
