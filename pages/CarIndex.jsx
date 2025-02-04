import { CarFilter } from "../cmps/CarFilter.jsx"
import { CarList } from "../cmps/CarList.jsx"
import { carService } from "../services/car.service.js"
import { CarDetails } from "./CarDetails.jsx"


const { useEffect, useState } = React

export function CarIndex() {

    const [cars, setCars] = useState(null)
    // console.log('cars:', cars)

    const [filterBy, setFilterBy] = useState(carService.getDefaultFilter())
    // console.log('filterBy:', filterBy)
    const [selectedCarId, setSelectedCarId] = useState(null)

    useEffect(() => {
        loadCars()
    }, [filterBy])

    function loadCars() {
        carService.query(filterBy)
            .then(cars => {
                // console.log('cars:', cars)
                setCars(cars)
            })
    }

    function onRemoveCar(carId) {
        carService.remove(carId)
            .then(() => {
                console.log('removed!')
                setCars(prevCars => prevCars.filter(car => car.id !== carId))
            })
    }

    function onSetFilterBy(filterBy) {
        setFilterBy({ ...filterBy })
    }

    function onSetSelectedCarId(carId) {
        setSelectedCarId(carId)
    }


    if (!cars) return 'Loading..'
    return (
        <section className="car-index">
            <h1>Car Index!</h1>

            {selectedCarId
                ? <CarDetails onSetSelectedCarId={onSetSelectedCarId} selectedCarId={selectedCarId} />
                : <React.Fragment>
                    <CarFilter filterBy={filterBy} onSetFilterBy={onSetFilterBy} />
                    <CarList cars={cars} onRemoveCar={onRemoveCar} onSetSelectedCarId={onSetSelectedCarId} />
                </React.Fragment>
            }
        </section>
    )
}