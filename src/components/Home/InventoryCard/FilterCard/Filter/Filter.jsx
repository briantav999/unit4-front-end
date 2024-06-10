import React, { useState, useEffect } from 'react';
import './Filter.css';
import * as service from '../../../../../services/instrumentService';


const Filter = ({ type, instruments, setDisplayedInstruments }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const categories = [...new Set(instruments.map(instrument => instrument.category))]; 

    const handleFilterClick = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        const filteredInstruments = category === "" ? instruments : instruments.filter(instrument => instrument.category === category);
        console.log("Filtered instruments in Filter:", filteredInstruments); 
        setDisplayedInstruments(filteredInstruments);
    };

    return (
        <>
            <div className="filter" onClick={handleFilterClick}>
                <p>{type}</p>
                <p className={isOpen ? 'carrot open' : 'carrot'}>&gt;</p>
            </div>
            {isOpen && (
                <div className="dropdown">
                    <select value={selectedCategory} onChange={handleCategoryChange}>
                        <option value="">Select Category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
            )}
        </>
    );
};

export default Filter;


