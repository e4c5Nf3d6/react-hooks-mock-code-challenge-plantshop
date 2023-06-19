import React, {useState} from "react";

function PlantCard({ plant, onChangePlantPrice, onDeletePlant }) {
  const [inStock, setInStock] = useState(true)
  const [newPrice, setNewPrice] = useState(plant.price)
  const [formVisibility, setFormVisibility] = useState(false)

  function handleSetFormVisibility() {
    setFormVisibility(!formVisibility)
    setNewPrice(plant.price)
  }

  function handleChangeStock() {
    setInStock(!inStock)
  }

  function handleConfirmNewPrice() {
    onChangePlantPrice(plant, newPrice)
    setFormVisibility(!formVisibility)
  }

  function handleDelete() {
    onDeletePlant(plant)
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
      <button onClick={handleSetFormVisibility}>Update Price</button>
      <button className='danger' onClick={handleDelete}>🗑️</button>
      <input 
        type="number" 
        name="price" 
        step="0.01"  
        value={newPrice}
        onChange={e => setNewPrice(e.target.value)}
        style={{ display: formVisibility ? 'block' : 'none' }}
      />
      <button 
        className="primary" 
        onClick={handleConfirmNewPrice}
        style={{ display: formVisibility ? 'block' : 'none' }}
      >Confirm New Price</button>    
    </li>
  );
}

export default PlantCard;
