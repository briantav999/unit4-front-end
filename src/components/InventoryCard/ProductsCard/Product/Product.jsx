import './Product.css'

const Product = ({ id, brand, model, type, rented }) => {
    return <>
        <div className="products-row">
            <p>{id}</p>
            <p>{brand}</p>
            <p>{model}</p>
            <p>{type}</p>
            <p>{rented ? 'Yes' : 'No'}</p>
        </div>
    </>
}

export default Product
