export default function Price({oldprice,newprice}){
    let oldstyles ={
        textDecorationLine: "line-through",
    };
    let newstyles ={
        fontWeight: "bold",
    };
    return(
        <div 
        style={{backgroundColor: "pink",height:"30px",borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px",marginTop:"40.5px",width:"195px",textAlign:"center"}}>
            <span style={oldstyles}>{oldprice}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span style={newstyles}>{newprice}</span>
        </div>
    );
}