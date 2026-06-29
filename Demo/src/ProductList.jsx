import ProductCard from './ProductCard'

function ProductList(props) {
    return(
        props.productList.map((product,index) => (
            <div>
                <h2>{product.title}</h2>
                <p>Price : {product.price}</p>
                <p>Rating : {product.rating}</p>
            </div>
        ))
    )
}

export default ProductList;