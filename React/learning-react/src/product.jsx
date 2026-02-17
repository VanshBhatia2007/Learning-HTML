function Product({title,price,features,textcolor}){
    let list = features.map((feature)=> <li>{feature}</li>);
    return (
        <div style={{color:textcolor}}>
            <h1>{title}</h1>
            <p>price:{price}</p>
            <ul>{list}</ul>
        </div>
        
    );
}

export default Product;