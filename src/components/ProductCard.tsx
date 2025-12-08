import {  useNavigate,  } from "react-router-dom";
import type { IProduct } from "../Modules/Shop/Models/ShopModel";

const ProductCard = ({ product }: { product: IProduct }) => {
//   const { productId } = useParams();

const navigate = useNavigate()
      {console.log(product._id)}

  return (
    <div onClick={()=> navigate(`/shopDetails/${product._id}`)} className="cardProducts">
      <div className="imgBox">
        <img src={product.productImage} alt={product.name} />
        <div className="overlay">
          <p>Quick View</p>
        </div>
      </div>
      <div className="cardInfo">
        <h2>{product.name}</h2>
        <p>{product.price} $</p>
        {/* <p>{item.details}</p> */}
      </div>
    </div>
  );
};

export default ProductCard;
