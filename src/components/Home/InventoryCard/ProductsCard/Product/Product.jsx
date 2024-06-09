import './Product.css'

const Product = ({ id, name, category, brand, model, condition, rented }) => {
    return <>
        <div className="products-row">
            <p>{id}</p>
            <p>{name}</p>
            <p>{category}</p>
            <p>{brand}</p>
            <p>{model}</p>
            <p>{condition}</p>
            <p>{rented ? 'Yes' : 'No'}</p>
        </div>
    </>
}

export default Product
