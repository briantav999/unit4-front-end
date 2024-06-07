import './Filter.css'

const Filter = ({ type }) => {
    // When filter is clicked, makes "dropdown" menu appear
    const handleFilterClick = () => {
        // TODO: Click make "dropdown" menu appear
        console.log('testing...');
    }
    
    return <>
        <div className="filter" onClick={handleFilterClick}>
            <p>{type}</p>
            <p className='carrot'>&gt;</p>
        </div>
    </>
}

export default Filter
