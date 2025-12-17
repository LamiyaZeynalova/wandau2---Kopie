import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { IProduct } from "../Models/ShopModel";
import { ShopService } from "../Service/ShopService";
import { useAppDispatch } from "../../../redux/hooks";
import { addToCart } from "../../../redux/slices/productSlice";
import Loading from "../../../components/Loading";
import Swal from "sweetalert2";

const ShopDetails = () => {
  const { productId } = useParams();
  const dispatch = useAppDispatch();

  const [details, setDetails] = useState<IProduct | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const getDetails = async () => {
    setLoading(true);
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

  if (loading) return <Loading />;

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    if (!details) return;

    dispatch(
      addToCart({
        ...details,
        quantity,
      })
    );

    Swal.fire({
      text: "The product has been added to the cart",
      icon: "success",
      timer: 2000,
      showConfirmButton: false,
      scrollbarPadding: false,
      heightAuto: false,
      willOpen: () => {
        const container = Swal.getContainer();
        if (container) {
          container.style.zIndex = "100000";
        }
      },
      didClose: () => {
        document.body.style.overflow = "auto";
        document.body.style.paddingRight = "0px";
      },
    });
  };

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
                  onClick={() => setIsOpen(true)}
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
                    <button onClick={decrease} disabled={quantity === 1}>
                      -
                    </button>

                    <span>{quantity}</span>

                    <button onClick={increase}>+</button>
                  </div>

                  <button className="addBtn" onClick={handleAddToCart}>
                    ADD TO CART
                  </button>
                </div>
              </div>

              {isOpen && (
                <div className="imageModal" onClick={() => setIsOpen(false)}>
                  <img
                    src={details.productImage}
                    alt="Zoomed"
                    className="modalImg"
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ShopDetails;
