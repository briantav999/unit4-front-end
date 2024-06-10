import { useState } from 'react';
import './AddInstruments.css';
import { createInstrument } from '../../services/instrumentService';

const Create = () => {
    const [Instruments, setInstruments] = useState([]);
    const [newInstrument, setNewInstrument] = useState({
        name: '',
        category: '',
        brand: '',
        model: '',
        condition: '',
        isRented: false
    });

    const handleAddInstrument = async (formData) => {
        try {
            const addedInstrument = await createInstrument(formData);
            setInstruments([...Instruments, addedInstrument]);
            setNewInstrument({
                name: '',
                category: '',
                brand: '',
                model: '',
                condition: '',
                isRented: false
            });
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        setNewInstrument({
            ...newInstrument,
            [e.target.name]: e.target.value
        });
    };

    const handleIsRented = (e) => {
        setNewInstrument({
            ...newInstrument,
            isRented: e.target.checked
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddInstrument(newInstrument);
    };

    return (
        <div id="addInstrument">
            <h2>Add Instrument</h2>
            <form id="createForm" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    maxLength="32"
                    value={newInstrument.name}
                    onChange={handleChange}
                />

                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    name="category"
                    id="category"
                    maxLength="32"
                    value={newInstrument.category}
                    onChange={handleChange}
                />

                <label htmlFor="brand">Brand:</label>
                <input
                    type="text"
                    name="brand"
                    id="brand"
                    maxLength="32"
                    value={newInstrument.brand}
                    onChange={handleChange}
                />

                <label htmlFor="model">Model:</label>
                <input
                    type="text"
                    name="model"
                    id="model"
                    maxLength="32"
                    value={newInstrument.model}
                    onChange={handleChange}
                />

                <label htmlFor="condition">Condition:</label>
                <input
                    type="text"
                    name="condition"
                    id="condition"
                    maxLength="32"
                    value={newInstrument.condition}
                    onChange={handleChange}
                />

                <label htmlFor="isRented">Is this rented out?:</label>
                <input
                    type="checkbox"
                    name="isRented"
                    id="isRented"
                    checked={newInstrument.isRented}
                    onChange={handleIsRented}
                />

                <button type="submit">Add Instrument</button>
            </form>
        </div>
    );
};

export default Create;
