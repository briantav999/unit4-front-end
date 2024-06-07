import Filter from './Filter/Filter.jsx'
import './FilterCard.css'

const FilterCard = () => {
    const filterTypes = ['Category', 'Brand', 'Model', 'Rented']
    
    return <>
        <div id="filter-card">
            {filterTypes.map( (type, index) =>
                <Filter key={index} type={type} />
            )}
        </div>
    </>
}

export default FilterCard
