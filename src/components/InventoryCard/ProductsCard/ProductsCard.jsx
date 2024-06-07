import Product from './Product/Product.jsx'
import './ProductsCard.css'

const ProductsCard = () => {
    const categories = ['ID', 'Brand', 'Model', 'Type', 'Rented']
    
    const tempProduct = {
        id: 1,
        brand: 'Yamaha',
        model: 'DRM742',
        type: 'Drum',
        rented: true
    }
    const tempData = [tempProduct, tempProduct, tempProduct]
    
    return <>
        <div id="products-card">
            <div className='products-row' id="properties-container">
                {categories.map( (category, index) =>
                    <p key={index}>{category}</p>
                )}
            </div>
            {tempData.map( (product) =>
                <Product key={product.id} {...product} />
            )}
        </div>
    </>
}

export default ProductsCard
