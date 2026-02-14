
import Product from "./product.jsx"

function ProductTab(){
    let styles = {
        display:"flex",
        flexWrap: "Wrap",
        justifyContent: "center",
        alignItems: "center"
    };
    return(
        <div style={styles}>
        <Product title="samsung tab" description="tablet for students" idx="0" />
        <Product title="smartwatch" description="watch for tracking fitness" idx="1"  />
        <Product title="iqoo" description="gaming phone" idx="2" />
        <Product title="boult earbuds" description="best earbuds for music" idx="3" />
        </div>
    )
}

export default ProductTab;