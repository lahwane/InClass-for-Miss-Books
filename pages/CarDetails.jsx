import { carService } from "../services/car.service.js"

const { useState, useEffect } = React

export function CarDetails({ onSetSelectedCarId, selectedCarId }) {

    const [car, setCar] = useState(null)

    useEffect(() => {
        loadCar()
    }, [])

    function loadCar() {
        carService.get(selectedCarId)
            .then(car => setCar(car))
    }

    if (!car) return 'Loading...'
    return (
        <section className="car-details">
            <h1>Car Vendor: {car.vendor}</h1>
            <h1>Car Speed: {car.speed}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quae fuga eveniet, quisquam ducimus modi optio in alias accusantium corrupti veritatis commodi tenetur voluptate deserunt nihil quibusdam. Expedita, architecto omnis?</p>
            <button onClick={() => onSetSelectedCarId(null)}>Back</button>
        </section>
    )
}