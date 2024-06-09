import { useEffect, useState } from 'react'
import * as service from '../../services/instrumentService.js'
import './EditInstrument.css'

const EditInstrument = () => {
    const id = 1

    const [currentInstrument, setCurrentInstrument] = useState({})
    
    // Fetches data for current instrument and updates state with returned data
    useEffect(() => {
        const fetchCurrent = async () => {
            try {
                const current = await service.fetchInstrument(id)
                if (current.error) {
                    throw new Error(current.error)
                } else {
                    setCurrentInstrument(current)
                }
            } catch (error) {
                console.log(error)
            }
        }

        fetchCurrent()
    }, [])

    const handleInputChange = (event) => {
        console.log(event);
        if (event.target.type === 'text') {
            setCurrentInstrument({
                ...currentInstrument,
                [event.target.id]: event.target.value
            })
        } else if (event.target.type === 'checkbox') {
            setCurrentInstrument({
                ...currentInstrument,
                isRented: e.target.checked
            })
        }
    }

    return <>
        <div id="edit-instrument">
            <form >
                <fieldset aria-labelledby="instrumentLegend">
                    <legend id="instrumentLegend">Edit {currentInstrument.name}</legend>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" required
                            value={currentInstrument.name}
                            onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="category">Category:</label>
                        <input type="text" id="category" required
                            value={currentInstrument.category}
                            onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="brand">Brand:</label>
                        <input type="text" id="brand" required
                            value={currentInstrument.brand}
                            onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="model">Model:</label>
                        <input type="text" id="model" required
                            value={currentInstrument.model}
                            onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="condition">Condition:</label>
                        <input type="text" id="condition" required
                            value={currentInstrument.condition}
                            onChange={handleInputChange} />
                    </div>
                    <div>
                        <label htmlFor="isRented">Rented:</label>
                        <input type="checkbox" id="isRented"
                            checked={currentInstrument.isRented ? 'checked' : null}
                            onChange={handleInputChange} />
                    </div>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
    </>
}

export default EditInstrument
