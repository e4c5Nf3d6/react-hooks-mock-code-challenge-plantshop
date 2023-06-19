import React, {useState} from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true)

  function handleChangeStock() {
    setInStock(!inStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={handleChangeStock}>In Stock</button>
      ) : (
        <button onClick={handleChangeStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
