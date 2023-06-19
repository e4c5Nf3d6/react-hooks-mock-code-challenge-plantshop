import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onChangePlantPrice, onDeletePlant }) {
  const plantCards = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} onChangePlantPrice={onChangePlantPrice} onDeletePlant={onDeletePlant} />
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
