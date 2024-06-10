import React, { useState, useEffect } from 'react';
import './Filter.css';
import * as service from '../../../../../services/instrumentService';
// fetchIsRented function to fetch unique values for isRented

const Filter = ({ type, instruments, setDisplayedInstruments }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedModel, setSelectedModel] = useState('');
    const [selectedBrand, setSelectedBrand] = useState('');
    const [selectedIsRented, setSelectedIsRented] = useState('');
    const categories = [...new Set(instruments.map(instrument => instrument.category))];
    const models = [...new Set(instruments.map(instrument => instrument.model))];
    const brands = [...new Set(instruments.map(instrument => instrument.brand))];
    const isRentedValues = ["true", "false"]; // Assuming isRented is a boolean, otherwise fetch from API

    const handleFilterClick = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);
        setSelectedModel('');
        setSelectedBrand('');
        setSelectedIsRented('');
        const filteredInstruments = category === "" ? instruments : instruments.filter(instrument => instrument.category === category);
        setDisplayedInstruments(filteredInstruments);
    };

    const handleModelChange = (event) => {
        const model = event.target.value;
        setSelectedModel(model);
        const filteredInstruments = model === "" ? instruments.filter(instrument => instrument.category === selectedCategory) : instruments.filter(instrument => instrument.model === model);
        setDisplayedInstruments(filteredInstruments);
    };

    const handleBrandChange = (event) => {
        const brand = event.target.value;
        setSelectedBrand(brand);
        const filteredInstruments = brand === "" ? instruments.filter(instrument => instrument.category === selectedCategory && instrument.model === selectedModel) : instruments.filter(instrument => instrument.brand === brand);
        setDisplayedInstruments(filteredInstruments);
    };

    const handleIsRentedChange = (event) => {
        const isRented = event.target.value;
        setSelectedIsRented(isRented);
        const filteredInstruments = isRented === "" ? instruments.filter(instrument => instrument.category === selectedCategory && instrument.model === selectedModel && instrument.brand === selectedBrand) : instruments.filter(instrument => instrument.isRented === (isRented === "true"));
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
                    {type === 'Category' ? (
                        <select value={selectedCategory} onChange={handleCategoryChange}>
                            <option value="">Select Category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                    ) : type === 'Model' ? (
                        <select value={selectedModel} onChange={handleModelChange}>
                            <option value="">Select Model</option>
                            {models.map((model, index) => (
                                <option key={index} value={model}>{model}</option>
                            ))}
                        </select>
                    ) : type === 'Brand' ? (
                        <select value={selectedBrand} onChange={handleBrandChange}>
                            <option value="">Select Brand</option>
                            {brands.map((brand, index) => (
                                <option key={index} value={brand}>{brand}</option>
                            ))}
                        </select>
                    ) : type === 'Rented' ? (
                        <select value={selectedIsRented} onChange={handleIsRentedChange}>
                            <option value="">Select Rented</option>
                            {isRentedValues.map((isRented, index) => (
                                <option key={index} value={isRented}>{isRented}</option>
                            ))}
                        </select>
                    ) : null}
                </div>
            )}
        </>
    );
};

export default Filter;
