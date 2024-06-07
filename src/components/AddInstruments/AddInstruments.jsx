import { useState } from 'react'
import './create.css'

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

}

return(
    <div className="create">
        <h2>Add Instrument</h2>
        <form onSubmit={(e) => {
            e.preventDefault()
            handleAddInstrument(Instrument)
        }}>
            <label>Name:</label>
            <input type="text" name="name" id="name" value={Instrument.name} onChange={handleChange} />
            <label>Category:</label>
            <input type="text" name="category" id="category" value={Instrument.category} onChange={handleChange} />
            <label>Brand:</label>
            <input type="text" name="brand" id="brand" value={Instrument.brand} onChange={handleChange} />
            <label>Model:</label>
            <input type="text" name="model" id="model" value={Instrument.model} onChange={handleChange} />
            <label>Condition:</label>
            <input type="text" name="condition" id="condition" value={Instrument.condition} onChange={handleChange} />
            <label>isRented:</label>
            <button type="submit">Add Instrument</button>
            <button id="home">Return to Home</button>
        </form>
    </div>
)