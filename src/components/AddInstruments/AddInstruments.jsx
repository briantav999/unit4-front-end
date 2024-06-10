import { useState } from 'react'
import './AddInstruments.css'
import { createInstrument } from '../../services/instrumentService'

const Create = () => {
    const [Instruments, setInstruments] = useState([]);
    const [newInstrument, setNewInstrument] = useState([]);
    
    const handleAddInstrument = async (formData) => {
        try{
            const newInstrument = await createInstrument(formData);
            setInstruments([...Instruments, newInstrument]);
        }catch(error){
            console.error(error);
        }
    }
   
    const [Instrument, setInstrument] = useState({
        name: '',
        category: '',
        brand: '',
        model: '',
        condition: '',
        isRented: false

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
    <fieldset id='addInstrument'>

        <h2>Add Instrument</h2><br />
        <form id='createForm' onSubmit={(e) => {
            e.preventDefault()
            handleAddInstrument(Instrument)
        }}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" maxLength="32" value={Instrument.name} onChange={handleChange} />

            <label htmlFor="category">Category:</label>
            <input type="text" name="category" id="category" maxLength="32" value={Instrument.category} onChange={handleChange} />

            <label htmlFor="brand">Brand:</label>
            <input type="text" name="brand" id="brand" maxLength="32" value={Instrument.brand} onChange={handleChange} />

            <label htmlFor="model">Model:</label>
            <input type="text" name="model" id="model" maxLength="32" value={Instrument.model} onChange={handleChange} />

            <label htmlFor="condition">Condition:</label>
            <input type="text" name="condition" id="condition" maxLength="32" value={Instrument.condition} onChange={handleChange} />

            <label htmlFor="isRented">Is this rented?</label>
            <input type="checkbox" name="isRented" id="isRented" checked={Instrument.isRented} onChange={handleIsRented} />

            <button type="submit">Add Instrument</button>
            {/* <button id="home">Return to Home</button> */}
        </form>
    </fieldset>
)
}


export default Create;