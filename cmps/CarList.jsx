import { CarPreview } from "./CarPreview.jsx";

export function CarList({ cars, onRemoveCar, onSetSelectedCarId }) {

    return (
        <section>
            <h2>Car List:</h2>
            <ul className="car-list">
                {cars.map(car =>
                    <li key={car.id}>
                        <CarPreview car={car} />
                        <section>
                            <button onClick={() => onRemoveCar(car.id)}>Delete</button>
                            <button onClick={() => onSetSelectedCarId(car.id)}>Details</button>
                        </section>
                    </li>
                )}
            </ul>
        </section>
    )

}