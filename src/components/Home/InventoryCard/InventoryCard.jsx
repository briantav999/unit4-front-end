import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard/SearchCard.jsx";
import FilterCard from "./FilterCard/FilterCard.jsx";
import ProductsCard from "./ProductsCard/ProductsCard.jsx";
import * as service from '../../../services/instrumentService';
import './InventoryCard.css';

const InventoryCard = () => {
    const [instruments, setInstruments] = useState([]);
    const [displayedInstruments, setDisplayedInstruments] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchAllInstruments = async () => {
            try {
                const allInstruments = await service.fetchInstruments();
                if (allInstruments) {
                    setInstruments(allInstruments);
                    setDisplayedInstruments(allInstruments);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchAllInstruments();
    }, []);

    useEffect(() => {
        const filteredInstruments = instruments.filter(instrument =>
            instrument.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            instrument.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            instrument.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
            instrument.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
            instrument.condition.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setDisplayedInstruments(filteredInstruments);
    }, [searchQuery, instruments]);

    return (
        <div id="inventory-card">
            <SearchCard onSearch={setSearchQuery} />
            <FilterCard  setDisplayedInstruments={setDisplayedInstruments}/>
            <ProductsCard instruments={displayedInstruments} />
        </div>
    );
};

export default InventoryCard;
