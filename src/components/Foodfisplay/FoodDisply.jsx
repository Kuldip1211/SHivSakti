import { useContext } from "react";
import "./fooddisply.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

function FoodDisply({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food_display" id="food_disply">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisply;
