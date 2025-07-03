import { useEffect, useState } from "react";
import "./App.css";

import CarCard from "./components/CarCard";
import CarForm from "./components/Carform";

// // ===== Hooks, State =====
// DRY - Don't Repeat Yourself
// Conditional rendering

export default function App() {
  const initialCars = [
    { make: "Toyota", model: "Camry", year: 2020 },
    { make: "Ford", model: "Mustang", year: 2018 },
    { make: "BMW", model: "X5", year: 2023 },
  ];

  const [cars, setCars] = useState(() => {
    const storedCars = localStorage.getItem("cars");
    return storedCars ? JSON.parse(storedCars) : initialCars;
  });

  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars));
  }, [cars]);

  function addCar(newCar) {
    setCars((prev) => [...prev, newCar]);
  }

  function deleteCar(index) {
    setCars((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div>
      {cars.map((car, i) => (
        <CarCard key={i} car={car} onDelete={() => deleteCar(i)} />
      ))}
      <CarForm onAddCar={addCar} />
    </div>
  );
}

//   // .push(newCarHere)
//   const [cars, setCars] = useState(initialCars);
//   const [newCar, setNewCar] = useState({ make: "", model: "", year: "" });

//   function handleUpdate(e) {
//     const { name, value } = e.target;
//     setNewCar((prev) => ({
//       ...prev,
//       [name]: name === "year" ? Number(value) : value,
//     }));
//   }

//   function addCar() {
//     if (
//       newCar.make?.trim() &&
//       newCar.model?.trim() &&
//       Number.isInteger(newCar.year) &&
//       newCar.year > 1885
//     ) {
//       setCars((prev) => [...prev, newCar]);
//       setNewCar({ make: "", model: "", year: "" });
//     } else {
//       alert("Please fill in all the fields");
//     }
//   }

//   function deleteCar(index) {
//     setCars((prev) => prev.filter((_, i) => i !== index));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     addCar();
//   }

//   return (
//     <>
//       <div>
//         {cars.map((car, i) => {
//           return (
//             <div key={i} className="car-card">
//               <div className="rivet-container">
//                 <div className="rivet top-left"></div>
//                 <div className="rivet top-right"></div>
//                 <div className="rivet bottom-left"></div>
//                 <div className="rivet bottom-right"></div>
//               </div>
//               <div className="car-content">
//                 <h3>{car.make}</h3>
//                 <p>{car.model}</p>
//                 <p>{car.year}</p>
//                 <button onClick={() => deleteCar(i)}>Delete</button>
//               </div>
//             </div>
//           );
//         })}
//         <div className="car-form">
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               placeholder="Make.."
//               onChange={handleUpdate}
//               //(e) => setNewCar((prev) => ({ ...prev, make: e.target.value }))
//               name="make"
//               value={newCar.make || ""}
//             />
//             <input
//               type="text"
//               placeholder="Model.."
//               onChange={handleUpdate}
//               name="model"
//               value={newCar.model || ""}
//             />
//             <input
//               type="number"
//               placeholder="Year.."
//               onChange={handleUpdate}
//               name="year"
//               value={newCar.year || ""}
//             />
//             <button type="submit">Add Car</button>
//           </form>
//           <p>{newCar.make}</p>
//           <p>{newCar.model}</p>
//           <p>{newCar.year}</p>
//         </div>
//       </div>
//     </>
//   );
// }
