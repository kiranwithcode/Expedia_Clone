import navbar from "./components/navbar.js";
let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let packageData = [
    {name:"DoubleTree by Hilton Goa-Panaji",refund:"refundable",city:"Goa",area:"Chimbel",rating:"4.2/5 Very good (52 reviews)",price:"14732",left:"We have 1 left at",image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/22000000/21430000/21429100/21429037/7b9e53ce_b.jpg"},
    {name:"Taj Fort Aguada Resort & Spa, Goa",refund:"refundable",city:"Goa",area:"Chimbel",rating:"4.2/5 Very good (52 reviews)",price:"11550",left:"We have 1 left at",image:"https://images.trvl-media.com/hotels/1000000/530000/526400/526340/f5764d77.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Sobit Sarovar Portico",refund:"refundable",city:"Goa",area:"South goa",rating:"4.5/5 Very good (520 reviews)",price:"13500",left:"We have 2 left at",image:"https://images.trvl-media.com/hotels/40000000/39660000/39659000/39658976/37ab80da.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Sterling Goa Varca",refund:"non-refundable",city:"Goa",area:"Beech goa",rating:"4.1/5 Very good (512 reviews)",price:"9500",left:"We have 1 left at",image:"https://images.trvl-media.com/hotels/18000000/17440000/17437100/17437081/e4c80a1d.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Grand Vatika Resort",refund:"non-refundable",city:"Goa",area:"monalisha goa",rating:"3.2/5 Very good (152 reviews)",price:"21000",left:"We have 4 left at",image:"https://images.trvl-media.com/hotels/47000000/46210000/46205200/46205118/1583475f.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"The Postcard Hideaway Netravali Goa",refund:"refundable",city:"Goa",area:"Bangoparu beach",rating:"4.5/5 Very good (5552 reviews)",price:"17500",left:"We have 1 left at",image:"https://images.trvl-media.com/hotels/5000000/4060000/4051300/4051243/3ddf6bab.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Niranta Airport Transit Hotel & Lounge Terminal 2 Arrivals",refund:"refundable",city:"Airoli",area:"Arrivals",rating:"3.2/5 Very good (5552 reviews)",price:"25000",left:"We have 5 left at",image:"https://images.trvl-media.com/hotels/12000000/11860000/11859400/11859338/e6ea5baa.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"The Taj Mahal Palace Mumbai",refund:"refundable",city:"Mumbai",area:"Gate way of India",rating:"4.8/5 Very good (5552 reviews)",price:"38500",left:"We have 1 left at",image:"https://images.trvl-media.com/hotels/20000000/19460000/19458500/19458493/a7678da8.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Taj Lands End",refund:"refundable",city:"Bandra West",area:"Bandra West",rating:"4.7/5 Very good (5572 reviews)",price:"9536",left:"We have 2 left at",image:"https://images.trvl-media.com/hotels/1000000/910000/905500/905407/076666ed.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"The Leela Mumbai",refund:"refundable",city:"Andheri",area:"Andheri",rating:"4.6/5 Very good (5852 reviews)",price:"28000",left:"We have 7 left at",image:"https://images.trvl-media.com/hotels/1000000/20000/17800/17773/95c36a58.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Hotel Sea Princess",refund:"refundable",city:"Mumbai",area:"Juhu",rating:"4.5/5 Very good (572 reviews)",price:"40800",left:"We have 1 left at",image:"https://images.trvl-media.com/hotels/3000000/2610000/2600800/2600773/df348763.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Taj Mahal Tower, Mumbai",refund:"refundable",city:"Mumbai",area:"India Gate",rating:"4.7/5 Very good (572 reviews)",price:"32500",left:"We have 14 left at",image:"https://images.trvl-media.com/hotels/2000000/1360000/1351900/1351876/1ac59945.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Residency Sarovar Portico",refund:"refundable",city:"Mumbai",area:"India Gate",rating:"4.7/5 Very good (572 reviews)",price:"35000",left:"We have 14 left at",image:"https://images.trvl-media.com/hotels/7000000/6090000/6086500/6086418/975d97fb.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"The St. Regis Mumbai",refund:"refundable",city:"Mumbai",area:"India Gate",rating:"4.8/5 Very good (572 reviews)",price:"28000",left:"We have 14 left at",image:"https://images.trvl-media.com/hotels/6000000/5310000/5301700/5301691/36a08f04.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Doubletree By Hilton Pune - Chinchwad",refund:"refundable",city:"Pune",area:"Pimpri-Chinchwad",rating:"4.8/5 Very good (572 reviews)",price:"28000",left:"We have 14 left at",image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/7000000/6160000/6152800/6152720/99c1be83_b.jpg"},
    {name:"Crowne Plaza Pune City Centre, an IHG Hotel",refund:"refundable",city:"Pune",area:"India Gate",rating:"4.2/5 Very good (572 reviews)",price:"16000",left:"We have 14 left at",image:"https://images.trvl-media.com/hotels/5000000/4520000/4517500/4517481/caea7d1e.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Pride Hotel",refund:"refundable",city:"Pune",area:"India Gate",rating:"3.8/5 Very good (572 reviews)",price:"19000",left:"We have 14 left at",image:"https://images.trvl-media.com/hotels/1000000/450000/447300/447235/f9c671be.jpg?impolicy=resizecrop&rw=455&ra=fit"},
    {name:"Sheraton Grand Pune Bund Garden Hotel",refund:"refundable",city:"Pune",area:"India Gate",rating:"4.1/5 Very good (572 reviews)",price:"28000",left:"We have 14 left at",image:"https://a.travel-assets.com/media/meso_cm/PAPI/Images/hotels/1000000/520000/519000/518997/019e5f7f_b.jpg"},
    {name:"Blue Diamond - IHCL SeleQtions",refund:"refundable",city:"Pune",area:"India Gate",rating:"4.3/5 Very good (572 reviews)",price:"13720",left:"We have 14 left at",image:"https://images.trvl-media.com/hotels/1000000/590000/581400/581366/ab4fe8d0.jpg?impolicy=resizecrop&rw=455&ra=fit"},
]


// console.table(packageData)

document.querySelector("#sort").addEventListener("change", sortFunc)

window.addEventListener("load", function(){
    display(packageData)
})
// let searchBar = document.getElementById("search-bar").value;


document.querySelector("#icon-search").addEventListener("click", searchfunc);
  function searchfunc(){
        let searchBar = document.querySelector("#search-bar").value;
        console.log(searchBar)
        var filtercity = packageData.filter(function (elem){
            return elem.city == searchBar;
        })
        console.log(filtercity)
        display(filtercity);
  }

  document.querySelector("#sear").addEventListener("click", searchCityName);
  function searchCityName(){
        let going = document.querySelector("#input-out").value;
        if(going==""){
          
            alert("Please enter your destination city")
            window.location.reload()

           
        }
       
        // console.log(going)
        else{
            var filtercity = packageData.filter(function (elem){
                return elem.city == going;
            })
        }
       
       
        console.log(filtercity)
        display(filtercity);
  }




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

        let city = document.createElement("p")
        city.innerHTML = elem.city;
        city.setAttribute("class","city")


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
        contentNameArea.append(name,area,city)
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
