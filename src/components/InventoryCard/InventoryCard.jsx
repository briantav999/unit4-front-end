import SearchCard from "./SearchCard/SearchCard.jsx"
import FilterCard from "./FilterCard/FilterCard.jsx"
import ProductsCard from "./ProductsCard/ProductsCard.jsx"
import './InventoryCard.css'

const InventoryCard = () => {
    return <>
        <div id="inventory-card">
            <SearchCard />
            <FilterCard />
            <ProductsCard />
        </div>
    </>
}

export default InventoryCard
