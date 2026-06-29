import ProductList from './ProductList'
function ProductCard() {
    const products = [
    {
      title: "iPhone 17 Pro",
      price: "99999",
      rating: 4.8,
    },
    {
      title: "Samsung Galaxy S24",
      price: "60000",
      rating: 4.5,
    }
  ];
    return(
        <div>
            <h1>Products</h1>
            <ProductList productList={products}/>
        </div>
    )
}
export default ProductCard;