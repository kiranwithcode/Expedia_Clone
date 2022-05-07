import navbar from "./components/navbar.js";

document.querySelector(".navbar").innerHTML = navbar();

let detailsData = JSON.parse(localStorage.getItem("detailData"))
// console.table(detailsData)

// var cartData = JSON.parse(localStorage.getItem("cart")) || [];

let box = document.createElement("div");
box.setAttribute("class", "box");

let stay = document.createElement("div");
stay.setAttribute("class", "choose-stay");

let p1 = document.createElement("p")
p1.innerHTML = "Choose your stay"
let p2 = document.createElement("p")
p2.innerHTML = "Choose departing flight"
let p3 = document.createElement("p")
p3.innerHTML = "Choose returning flight"
let p4 = document.createElement("p")
p4.innerHTML = "Review your trip"

let span1 = document.createElement("span")
span1.innerHTML = ">"

let span2 = document.createElement("span")
span2.innerHTML = ">"

let span3 = document.createElement("span")
span3.innerHTML = ">"

p1.append(span1)
p2.append(span2)
p3.append(span3)

var mainImgDiv = document.createElement("div")
mainImgDiv.setAttribute('class',"mainImgDiv")
var leftImgDiv = document.createElement("div")
leftImgDiv.setAttribute('class',"leftImgDiv")
var rightImgDiv = document.createElement("div")
rightImgDiv.setAttribute('class',"rightImgDiv")

var img = document.createElement("img");
img.src = detailsData.image;

var imgMul = document.createElement("img");
imgMul.src = "./images/hot.PNG";


var ulMainDiv = document.createElement("div")
ulMainDiv.setAttribute("class","ulMainDiv")

var ulDiv = document.createElement("div")
ulDiv.setAttribute("class","ulDiv")

var btnDiv = document.createElement("div")
btnDiv.setAttribute("class","btnDiv")

var ul = document.createElement("ul")
var l1 = document.createElement("li")
l1.innerHTML = "Overview"
var l2 = document.createElement("li")
l2.innerHTML = "Rooms"
var l3 = document.createElement("li")
l3.innerHTML = "Location"
var l4 = document.createElement("li")
l4.innerHTML = "Amenities"
var l5 = document.createElement("li")
l5.innerHTML = "Policies"
var l6 = document.createElement("li")
l6.innerHTML = "Reviews"

var btn = document.createElement("button")
btn.innerText = "Reserve a room"
btn.addEventListener("click", function(){
    goPayment(detailsData)
})

ul.append(l1,l2,l3,l4,l5,l6)

ulMainDiv.append(ul,btn)

var hr = document.createElement("hr")


var maindiv = document.createElement("div")
maindiv.setAttribute("class","maindiv")

var leftdiv = document.createElement("div")
leftdiv.setAttribute("class","leftdiv")
var rightdiv = document.createElement("div")
rightdiv.setAttribute("class","rightdiv")

var name1 = document.createElement("h1")
name1.innerHTML = detailsData.name;
name1.setAttribute("class","name")

var star_class = document.createElement("div")
star_class.setAttribute("class","star_class")

var star1 = document.createElement("div")
star1.innerHTML = "★";

var star2 = document.createElement("div")
star2.innerHTML = "★";

var star3 = document.createElement("div")
star3.innerHTML = "★";

var star4 = document.createElement("div")
star4.innerHTML = "★";

var rating = document.createElement("h3")
rating.innerHTML = detailsData.rating;
rating.setAttribute('class','rating')

var guestRate = document.createElement("p")
guestRate.innerHTML = "Guests rated this property 4.5/5 for cleanliness.";
guestRate.setAttribute('class','guestRate')

var map = document.createElement("img")
map.setAttribute('class','map')
map.src = "./images/map.PNG"
map.style.width = "300px";
map.style.height = "250px";
map.style.padding = "10px";

var popularAm = document.createElement("h3")
popularAm.setAttribute("class","popularAm")

popularAm.innerHTML = "Popular amenities"
var downimg = document.createElement("img")
downimg.src = "./images/downData.PNG"
downimg.setAttribute("class","downimg")

leftImgDiv.append(img)
rightImgDiv.append(imgMul)
mainImgDiv.append(leftImgDiv,rightImgDiv)
leftdiv.append(name1,star_class,rating,guestRate)
rightdiv.append(map)
maindiv.append(leftdiv,rightdiv)
stay.append(p1,p2,p3,p4)
star_class.append(star1,star2,star3,star4)
box.append(stay,mainImgDiv,ulMainDiv,hr,maindiv,popularAm,downimg)
document.querySelector("#details").append(box)
// document.querySelector(".box").append(stay,mainImgDiv,ul,hr,maindiv,popularAm,downimg)


// function goPayment(detailData){
//     window.location.href = "package_payment.html"
// }

// function bookingBtn()
// {
//      window.location.href="#fillRoom";
// }

function goPayment()
{
     window.location.href="#fillRoom";
}

document.querySelector("#btn").addEventListener("click", bookRoom)
function bookRoom(){
    let inDate = document.getElementById("inDate").value;
    let outDate = document.getElementById("outDate").value;
    let room = document.getElementById("room").value;
    let person = document.getElementById("person").value;
    console.log(inDate,outDate,room,person);

    let personalInfo = [{
         totalRoom:room,
         totalPerson:person,
         checkIn:inDate,
         checkOut:outDate,
    }];

    localStorage.setItem("perInfo",JSON.stringify(personalInfo));
    console.log(personalInfo);
    if(inDate&&outDate&&room&&person)
    {
         window.open("package_payment.html");
    }
    else
    {
         alert("Fill All The Details");
    }
   
}



