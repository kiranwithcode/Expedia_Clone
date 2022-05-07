import navbar from "./components/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let packageData = [
    {name:"DoubleTree by Hilton Goa-Panaji",refund:"refundable",area:"Chimbel",rating:"4.2/5 Very good (52 reviews)",price:"14732",left:"We have 1 left at",image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/22000000/21430000/21429100/21429037/7b9e53ce_b.jpg"},
    {name:"Taj Fort Aguada Resort & Spa, Goa",refund:"refundable",area:"Chimbel",rating:"4.2/5 Very good (52 reviews)",price:"11550",left:"We have 1 left at",image:"https://images.trvl-media.com/hotels/1000000/530000/526400/526340/f5764d77.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Sobit Sarovar Portico",refund:"refundable",area:"Chimbel",rating:"4.2/5 Very good (52 reviews)",price:"13500",left:"We have 1 left at",image:"https://images.trvl-media.com/hotels/40000000/39660000/39659000/39658976/37ab80da.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Sterling Goa Varca",refund:"non-refundable",area:"Chimbel",rating:"4.2/5 Very good (52 reviews)",price:"9500",left:"We have 1 left at",image:"https://images.trvl-media.com/hotels/18000000/17440000/17437100/17437081/e4c80a1d.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Grand Vatika Resort",refund:"non-refundable",area:"Chimbel",rating:"4.2/5 Very good (52 reviews)",price:"21000",left:"We have 1 left at",image:"https://images.trvl-media.com/hotels/47000000/46210000/46205200/46205118/1583475f.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"The Postcard Hideaway Netravali Goa",refund:"refundable",area:"Chimbel",rating:"4.2/5 Very good (52 reviews)",price:"17500",left:"We have 1 left at",image:"https://images.trvl-media.com/hotels/5000000/4060000/4051300/4051243/3ddf6bab.jpg?impolicy=resizecrop&rw=455&ra=fit"},
]


// console.table(packageData)

document.querySelector("#sort").addEventListener("change", sortFunc)

window.addEventListener("load", function(){
    display(packageData)
})

function sortFunc(){
    let select = document.querySelector("#sort").value;
    if(select=="lth"){
        packageData.sort(function(a,b){
            return a.price - b.price
        });
        display(packageData)
    }
    if(select=="htl"){
        packageData.sort(function(a,b){
            return b.price - a.price
        });
        display(packageData)
    }
    if(select=="pop"){
        window.location.reload()
    }
}





// display(packageData)

function display(packageData){
    document.getElementById("packages-data").innerHTML = null;
    packageData.map(function (elem){

        let a=document.createElement("a")
        a.href="package_detail.html"

        let box = document.createElement("div");
        box.setAttribute("class", "box");

        a.addEventListener("click", function(){
            detailData(elem);
        });

        let imgDiv = document.createElement("div")
        imgDiv.setAttribute("class","imgdiv")
        
        let conPriDiv = document.createElement("div")
        conPriDiv.setAttribute("class","conPriDiv")

        let contentDiv = document.createElement("div")
        contentDiv.setAttribute("class","contentDiv")

        let contentNameArea = document.createElement("div")
        contentNameArea.setAttribute("class","contentNameArea")

        let contentCol = document.createElement("div")
        contentCol.setAttribute("class","contentCol")

        let priceDiv = document.createElement("div")
        priceDiv.setAttribute("class","priceDiv")

        let img = document.createElement("img");
        img.src = elem.image;
        img.setAttribute("class", "image")
    
        let name = document.createElement("h5");
        name.textContent = elem.name;
        name.setAttribute("class","name")


        let area = document.createElement("p")
        area.innerHTML = elem.area;
        area.setAttribute("class","area")


        let price = document.createElement("h5")
        price.innerHTML = `Rs${elem.price}`;
        price.setAttribute("class","price")

        let left = document.createElement("h5")
        left.innerHTML = elem.left;
        left.setAttribute("class","left")

        let rating = document.createElement("h5")
        rating.innerHTML = elem.rating;
        rating.setAttribute("class","rating")

        imgDiv.append(img)
        contentNameArea.append(name,area)
        contentCol.append(rating)
        contentDiv.append(contentNameArea,contentCol)
        priceDiv.append(left,price)

       

        conPriDiv.append(contentDiv,priceDiv)
        box.append(imgDiv,conPriDiv)
        a.append(box)
        document.querySelector("#packages-data").append(a)
        localStorage.setItem("packages" , JSON.stringify(packageData))

    })
}

function detailData(elem){
    var detailData = [];
    detailData = elem;
    console.table(detailData);
    localStorage.setItem("detailData", JSON.stringify(detailData));
}
