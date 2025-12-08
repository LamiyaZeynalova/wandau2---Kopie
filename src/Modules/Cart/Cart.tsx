import { useAppSelector } from "../../redux/hooks";

const Cart = () => {
  const cart = useAppSelector((state) => state.productSlice.cart);
  return (
    <section className="cart">
      <div className="container">
        <div className="row">
          <h2 className="cartTitle">Cart</h2>
          <div className="cartProducts">
            <ul className="cartList">
              {cart.map((item) => (
                <li className="cartProduct">
                  <div className="cartProductImg">
                    <img src={item.productImage} alt={item.name} />
                  </div>
                  <div className="cartProductCountBtn">
                    <h2 className="productName">{item.name}</h2>
                    <div className="buttons">
                      <button className="cartProductBtns increase">+</button>
                      <p className="cartProductCount">0</p>
                      <button className="cartProductBtns decrease">-</button>
                    </div>
                    <p className="cartProductPrice">{item.price} $</p>
                  </div>
                  <div className="close">x</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
