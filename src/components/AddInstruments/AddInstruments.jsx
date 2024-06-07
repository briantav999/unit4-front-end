import { useState } from 'react'
import './AddInstruments.css'

const Create = ({handleAddInstrument}) => {
    const [Instrument, setInstrument] = useState({
        name: '',
        category: '',
        brand: '',
        model: '',
        condition: '',
        isRented: false,

    })

    const handleChange = (e) => {
        setInstrument({
            ...Instrument,
            [e.target.name]: e.target.value
        })
    }

    const handleIsRented = (e) => {
        setInstrument({
            ...Instrument,
            isRented: e.target.checked
        })
    }

return(
    <div className="create">
        <h2>Add Instrument</h2>
        <form onSubmit={(e) => {
            e.preventDefault()
            handleAddInstrument(Instrument)
        }}>
            <label>Name:</label>
            <input type="text" name="name" id="name" maxlength="32" value={Instrument.name} onChange={handleChange} />
            <label>Category:</label>
            <input type="text" name="category" id="category" maxlength="32" value={Instrument.category} onChange={handleChange} />
            <label>Brand:</label>
            <input type="text" name="brand" id="brand" maxlength="32" value={Instrument.brand} onChange={handleChange} />
            <label>Model:</label>
            <input type="text" name="model" id="model" maxlength="32" value={Instrument.model} onChange={handleChange} />
            <label>Condition:</label>
            <input type="text" name="condition" id="condition" maxlength="32" value={Instrument.condition} onChange={handleChange} />
            <label>isRented:</label>
            <input type="checkbox" name="isRented" id="isRented" checked={Instrument.isRented} onChange={handleIsRented} />
            <button type="submit">Add Instrument</button>
            <button id="home">Return to Home</button>
        </form>
    </div>
)
}

export default Create;