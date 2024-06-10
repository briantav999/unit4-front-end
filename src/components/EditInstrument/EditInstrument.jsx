import { useEffect, useState } from 'react'
import { redirect, useNavigate, useParams } from 'react-router-dom'
import * as service from '../../services/instrumentService.js'
import './EditInstrument.css'

const EditInstrument = () => {
    const { productId } = useParams()
    const navigate = useNavigate()

    const [currentInstrument, setCurrentInstrument] = useState({})
    
    // Fetches data for current instrument and updates state with returned data
    useEffect(() => {
        const fetchCurrent = async () => {
            try {
                const current = await service.fetchInstrument(productId)
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
        if (event.target.type === 'text') {
            setCurrentInstrument({
                ...currentInstrument,
                [event.target.id]: event.target.value
            })
        } else if (event.target.type === 'checkbox') {
            setCurrentInstrument({
                ...currentInstrument,
                isRented: event.target.checked
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()


        let data = {...currentInstrument}
        delete data.id

        service.updateInstrument(data, productId)
        
        navigate('/')
        window.location.reload()
    }
        
    const handleDelete = async () => {
        await service.deleteInstrument(productId)
    
        navigate('/')
        window.location.reload()
    }

    return <>
        <div id="edit-instrument" onSubmit={handleSubmit}>
            <h2>Edit Instrument #{productId}</h2>
            <form id='edit-form'>
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
                    <label htmlFor="isRented">Is this rented?</label>
                    <input type="checkbox" id="isRented"
                        checked={currentInstrument.isRented ? 'checked' : null}
                        onChange={handleInputChange} />
                </div>
                <button type="submit">Update Instrument</button>
            </form>
            <button id='delete-instrument' onClick={handleDelete}>Delete Instrument</button>
        </div>
    </>
}

export default EditInstrument
