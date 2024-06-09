import { useEffect, useState } from "react"
import SearchCard from "./SearchCard/SearchCard.jsx"
import FilterCard from "./FilterCard/FilterCard.jsx"
import ProductsCard from "./ProductsCard/ProductsCard.jsx"
import * as service from '../../../services/instrumentService.js'
import './InventoryCard.css'

const InventoryCard = () => {
    const [displayedInstruments, setDisplayedInstruments] = useState([])

    // On page load, fetches data from API and sets displayedInstruments to "all"
    useEffect(() => {
        const fetchAllInstruments = async () => {
            try {
                const allInstruments = await service.fetchInstruments()
                if (allInstruments.error) {
                    throw new Error(allInstruments.error)
                } else {
                    setDisplayedInstruments(allInstruments)
                }
            } catch (error) {
                console.log(error)
            }
        };
    
        fetchAllInstruments();
    }, []);
    
    return <>
        <div id="inventory-card">
            <SearchCard />
            <FilterCard />
            <ProductsCard instruments={displayedInstruments} />
        </div>
    </>
}

export default InventoryCard
