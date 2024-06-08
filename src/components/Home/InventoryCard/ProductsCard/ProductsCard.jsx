import Product from './Product/Product.jsx'
import './ProductsCard.css'

const ProductsCard = ({ instruments }) => {
    const categories = ['ID', 'Name', 'Category', 'Brand', 'Model', 'Condition', 'Rented']
    
    return <>
        <div id="products-card">
            <div className='products-row' id="properties-container">
                {categories.map( (category, index) =>
                    <p key={index}>{category}</p>
                )}
            </div>
            {instruments.map( (product) =>
                <Product key={product.id} {...product} />
            )}
        </div>
    </>
}

export default ProductsCard
