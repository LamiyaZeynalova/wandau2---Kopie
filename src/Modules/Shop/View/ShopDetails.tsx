import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IProduct } from "../Models/ShopModel";
import { ShopService } from "../Service/ShopService";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addToCart } from "../../../redux/slices/productSlice";
import Loading from "../../../components/Loading";

const ShopDetails = () => {
  const { productId } = useParams();
  const a = useParams();
  console.log(a, "aa");
  const cart = useAppSelector((state) => state.productSlice.cart);
  console.log("cart Ad", cart);
  const dispach = useAppDispatch();
  const [details, setDetails] = useState<IProduct | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [loading, setLoading] = useState(false);

  const getDetails = async () => {
    setLoading(true);
    console.log(productId, "productId");
    try {
      if (productId) {
        const res = await ShopService.shopDetails(productId);
        setDetails(res);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetails();
  }, [productId]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="shopDetails">
      <div className="container">
        <div className="row">
          {details && (
            <div className="productBox">
              <div className="leftSide">
                <img
                  src={details.productImage}
                  alt={details.name}
                  onClick={openModal}
                />
              </div>

              <div className="rightSide">
                <h2>{details.name}</h2>
                <p>{details.details}</p>
                <p className="price">
                  <strong>Price:</strong> {details.price} $
                </p>

                <div className="actions">
                  <div className="counter">
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                  </div>
                  <button
                    className="addBtn"
                    onClick={() => dispach(addToCart(details))}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
              {isOpen && (
                <div className="imageModal" onClick={closeModal}>
                  <img
                    src={details.productImage}
                    alt="Zoomed"
                    className="modalImg"
                  />
                </div>
              )}

              {/* {details.productImage && (
                <div className="images">
                  {details.productImage.map((img, index) => (
                    <img key={index} src={img} alt={details.name} />
                  ))}
                </div>
              )} */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;
