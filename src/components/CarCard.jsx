export default function CarCard({ car, onDelete }) {
  return (
    <div class="car-card-wrapper">
      <div className="car-card">
        <div className="rivet-container">
          <div className="rivet top-left"></div>
          <div className="rivet top-right"></div>
          <div className="rivet bottom-left"></div>
          <div className="rivet bottom-right"></div>
        </div>
        <div className="car-content">
          <div className="car-details">
            <h3>{car.make}</h3>
            <p>{car.model}</p>
            <p>{car.year}</p>
          </div>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
