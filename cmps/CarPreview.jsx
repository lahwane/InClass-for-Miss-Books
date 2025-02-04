
export function CarPreview({ car }) {

    return (
        <section className="car-preview">
            <h4>{car.vendor}</h4>
            <h4>{car.speed}</h4>
            <img src={`../assets/img/${car.vendor}.png`} />
        </section>
    )

}