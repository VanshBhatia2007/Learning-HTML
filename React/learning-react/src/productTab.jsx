import "./product.jsx"
import Product from "./product.jsx"

function ProductTab(){
    let features =["hello" , "hi"];
    return(
        <>
        <Product title="phone" price="100" features={features} textcolor="blue"/>
        <Product title="laptop" price="200" features={features} />
        </>
    )
}

export default ProductTab;