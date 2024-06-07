import SearchCard from "./SearchCard/SearchCard.jsx"
import FilterCard from "./FilterCard/FilterCard.jsx"
import ProductsCard from "./ProductsCard/ProductsCard.jsx"
import './InventoryCard.css'

const InventoryCard = () => {
    return <>
        <SearchCard />
        <FilterCard />
        <ProductsCard />
    </>
}

export default InventoryCard
