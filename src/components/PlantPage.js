import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(data => setPlants(data))
  }, [])

  function addPlant(newPlant) {
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then(r => r.json())
    .then(data => setPlants([
      ...plants,
      data
    ]))
  }

  function changePlantPrice(updatedPlant, newPrice) {
    fetch(`http://localhost:6001/plants/${updatedPlant.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'price': newPrice })
    })
    .then(r => r.json())
    .then(data => {
      const updatedPlants = plants.map(plant => {
        if (plant.id === data.id) {
          return data
        } else {
          return plant
        }
      })
      setPlants(updatedPlants)
    })
  }

  function deletePlant(plantToDelete) {
    fetch(`http://localhost:6001/plants/${plantToDelete.id}`, { method: 'DELETE' })
    .then(r => r.json())
    .then(() => {
      const updatedPlants = plants.filter(plant => plant.id !== plantToDelete.id)
      setPlants(updatedPlants)
    })
  }

  const plantsToDisplay = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search search={search} onSetSearch={setSearch} />
      <PlantList plants={plantsToDisplay} onChangePlantPrice={changePlantPrice} onDeletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
