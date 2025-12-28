let url = "http://universities.hipolabs.com/search?name=";
let btn=document.querySelector("button");
let country = "nepal";
btn.addEventListener("click",async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let colleges = await getCollege(country);
    console.log(colleges);
    show(colleges);
})

function show(colleges){
    let list=document.querySelector("#list");
    list.innerText="";
    for(col of colleges){
        console.log(col.name);
        let li=document.createElement("li");
        li.innerText=col.name;
        list.appendChild(li);
    }
}

async function getCollege(country) {
    try{
        let req = await axios.get(url+country);
        return req.data;
    }catch(error){
        console.log("error found : ",error);
        return [];
    }
}

