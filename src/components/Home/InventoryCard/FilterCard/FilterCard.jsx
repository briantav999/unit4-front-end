import { fetchInstruments } from '../../../../services/instrumentService';
import Filter from './Filter/Filter.jsx'
// FilterCard.jsx
import React, { useState, useEffect } from 'react';


const FilterCard = ({ setDisplayedInstruments}) => {
    const [instruments, setInstruments] = useState([]);

    useEffect(() => {
        fetchInstruments()
            .then(data => {
                setInstruments(data);
                setDisplayedInstruments(data);
            })
            .catch(error => console.error('Error fetching instruments:', error));
    }, []);

    const filterTypes = ['Category', 'Brand', 'Model', 'Rented']; 

    console.log("Instruments in FilterCard:", instruments); // Add this console log

    return (
        <div id="filter-card">
            {filterTypes.map((type, index) => (
                <Filter 
                    key={index} 
                    type={type} 
                    instruments={instruments} 
                    setDisplayedInstruments={setDisplayedInstruments} 
                />
            ))}
        </div>
    );
};

export default FilterCard;




