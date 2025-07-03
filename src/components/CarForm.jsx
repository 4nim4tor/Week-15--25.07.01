import { useState } from "react";

export default function CarForm({ onAddCar }) {
  const [newCar, setNewCar] = useState({ make: "", model: "", year: "" });

  function handleUpdate(e) {
    const { name, value } = e.target;
    setNewCar((prev) => ({
      ...prev,
      [name]: name === "year" ? Number(value) : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      newCar.make.trim() &&
      newCar.model.trim() &&
      Number.isInteger(newCar.year) &&
      newCar.year > 1885
    ) {
      onAddCar(newCar);
      setNewCar({ make: "", model: "", year: "" });
    } else {
      alert("Please fill in all the fields correctly.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="car-form">
      <input
        type="text"
        placeholder="Make.."
        onChange={handleUpdate}
        name="make"
        value={newCar.make}
      />
      <input
        type="text"
        placeholder="Model.."
        onChange={handleUpdate}
        name="model"
        value={newCar.model}
      />
      <input
        type="number"
        placeholder="Year.."
        onChange={handleUpdate}
        name="year"
        value={newCar.year}
      />
      <button type="submit">Add Car</button>
    </form>
  );
}
