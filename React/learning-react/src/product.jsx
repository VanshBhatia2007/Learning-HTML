import Price from "./price.jsx";
import "./product.css"
function Product({title,description,idx}){
    let oldprice=["12000","10000","11000","30000"];
    let newprice=["10000","6000","9000","26000"];
    return (
        <div className="product">
            <h4>{title}</h4>
            <p>{description}</p>
            <Price oldprice={oldprice[idx]} newprice={newprice[idx]}/>
        </div>
        
    );
}

export default Product;