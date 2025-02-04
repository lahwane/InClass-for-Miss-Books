
const { useState, useEffect } = React

export function CarFilter({ filterBy, onSetFilterBy }) {

    const [filterByToEdit, setfilterByToEdit] = useState({ ...filterBy })
    // console.log('filterByToEdit:', filterByToEdit)

    useEffect(() => {
        onSetFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function onHandleChange(ev) {
        let { value, type, name: field } = ev.target
        // console.log('field:', field)

        if (type === 'number') value = +value
        setfilterByToEdit(prevFilterBy => ({ ...prevFilterBy, [field]: value }))
    }

    function onSubmitForm(ev) {
        ev.preventDefault()

        onSetFilterBy(filterByToEdit)
    }

    return (
        <section className="car-filter">
            <h2>Filter Our Cars</h2>

            <form onSubmit={onSubmitForm}>
                <label htmlFor="txt">Vendor</label>
                <input name="vendor" value={filterByToEdit.vendor} onChange={onHandleChange} type="text" id="txt" />

                <label htmlFor="minSpeed">Min Speed</label>
                <input name="minSpeed" value={filterByToEdit.minSpeed || ''} onChange={onHandleChange} type="number" id="minSpeed" />

                <button>Submit</button>
            </form>
        </section>
    )
}