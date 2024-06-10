import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({ id, name, category, brand, model, condition, isRented }) => {
    return <>
        <div className="products-row">
            <Link to={`/instruments/${id}`}>{id}</Link>
            <p>{name}</p>
            <p>{category}</p>
            <p>{brand}</p>
            <p>{model}</p>
            <p>{condition}</p>
            <p>{isRented ? 'Yes' : 'No'}</p>
        </div>
    </>
}

export default Product
