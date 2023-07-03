import "./Product.css";
import { useContext } from "react";
import { DataContext } from "../../";
import { ProductCard } from "../../component/ProductCard/ProductCard";

export function Product(){
 const {state} =useContext(DataContext);

 const products=state.products;

//  console.log(products)

    return (
        <>
        {/* <h1>Product page</h1> */}
        <div className="product-list responsive-grid">
            {products.map((product)=>(
                <ProductCard product={product} key={product}/>
            ))}
        </div>
        </>
    )
}