// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../Context/StoreContext";

function Cart() {
  const { food_list, getItemCount, removeCart,getCartTotalAmount } = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-item">
        <div className="cart-item-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (getItemCount(item._id) > 0) {
            return (
              // eslint-disable-next-line react/jsx-key
              <div>
                <div className="cart-item-title" id="cart-item-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>{item.price}$</p>
                  <p>{getItemCount(item._id)}</p>
                  <p>{item.price * getItemCount(item._id)}</p>
                  <p className="cross" onClick={() => removeCart(item._id)}>
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart tool</h2>
          <div>
            <div className="cart-tool-details">
              <p>Subtotal</p>
              <p>{getCartTotalAmount()}</p>
            </div>
            <hr />
            <div className="cart-tool-details">
              <p>Dilevary Fee</p>
              <p>3$</p>
            </div>
            <hr />
            <div className="cart-tool-details">
              <p>Total</p>
              <p>{getCartTotalAmount()+3}$</p>
            </div>
          </div>
          <button>PROCEES TO CHECK OUT</button>
        </div>
        <div className="cart-promocode">
          <div>
             <p>IF You Have A Promo Code Enter Hear </p>
             <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
