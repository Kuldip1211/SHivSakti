// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import "./Fooditem.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

// eslint-disable-next-line react/prop-types
function FoodItem({ id, name, description, price, image }) {
  const { addToCart, removeCart, getItemCount } = useContext(StoreContext);
  
  const count = getItemCount(id);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt={name} />
        {count === 0 ? (
          <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
        ) : (
          <div className="food-item-counter">
            <img onClick={() => removeCart(id)} src={assets.remove_icon_red} alt="Remove" />
            <p>{count}</p>
            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add" />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-disc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
