//hotel data 
function hotel(u,n,r,p,c,pt)
{
     this.url=u;
     this.name=n;
     this.rating=r;
     this.price=p;
     this.city=c;
     this.proprtyType=pt;
}
let hotelData=[];
let h1 = new hotel("https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
"Lemon Tree Premier","⭐⭐⭐⭐⭐",12000," patna","hotel");
hotelData.push(h1);

let h2 = new hotel("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
"Goroomgo Viram","⭐⭐⭐",4000," patna","hotel");
hotelData.push(h2);

let h3 = new hotel("https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/81/4f/03/exterior.jpg?w=900&h=-1&s=1",
"Hotel Maurya","⭐⭐⭐⭐⭐",16000," patna","hotel");
hotelData.push(h3);

let h4 = new hotel("https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
"Hotel Patliputra Continental","⭐⭐⭐",9000," patna","hotel");
hotelData.push(h4);

let h5 = new hotel("https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
"Goroomgo Fellow Farm","⭐⭐⭐",7000," patna","hotel");
hotelData.push(h5);

let h6 = new hotel("https://images.trvl-media.com/hotels/77000000/76460000/76453500/76453484/394a495d.jpg?impolicy=resizecrop&rw=598&ra=fit",
"Treebo Trend Svr Hotel & Banquet","⭐⭐⭐⭐",10000," patna","hotel");
hotelData.push(h6);

let h7 = new hotel("https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
"Goroomgo Vivek","⭐⭐⭐⭐",8000," patna","hotel");
hotelData.push(h7);

let h8= new hotel("https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
"Goroomgo Welcome Palace","⭐⭐⭐⭐",8000," patna","hotel");
hotelData.push(h8);

let h9= new hotel("https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
"Goroomgo Fortune","⭐⭐⭐",6000," patna","hotel");
hotelData.push(h9);

let h10= new hotel("https://images.trvl-media.com/hotels/35000000/34860000/34850100/34850050/36c8bb4f.jpg?impolicy=resizecrop&rw=598&ra=fit",
"Goroomgo Fortune","⭐⭐⭐⭐",11000," patna","hotel");
hotelData.push(h10);

let h11 = new hotel("https://images.trvl-media.com/hotels/76000000/75170000/75160900/75160803/16817ad4.jpg?impolicy=resizecrop&rw=598&ra=fit",
"Goroomgo Tulsi Patna","⭐⭐⭐⭐",11000," delhi","hotel");
hotelData.push(h11);

let h12 = new hotel("https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
"Treebo Trip Jiya House","⭐⭐⭐⭐⭐",16000," delhi","hotel");
hotelData.push(h12);

let h13= new hotel("https://images.unsplash.com/photo-1585551897231-77fe523c288a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
"Capital O 8306 Kamat Inn","⭐⭐⭐⭐",13000," delhi","hotel");
hotelData.push(h13);

let h14= new hotel("https://images.unsplash.com/photo-1578774204375-826dc5d996ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
"Treebo Trend The Hotel Bliss","⭐⭐⭐⭐",11000," delhi","hotel");
hotelData.push(h14);

let h15= new hotel("https://images.unsplash.com/photo-1537833633404-f02da1734a6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
"The Grand Empire A Boutique Hotel","⭐⭐⭐⭐",16000," delhi","hotel");
hotelData.push(h15);

let h16= new hotel("https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
"Hotel SVR","⭐⭐⭐",6000," delhi","hotel");
hotelData.push(h16);

let h17= new hotel("https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
"Goroomgo Raj Residency","⭐⭐⭐⭐⭐",16000," delhi","hotel");
hotelData.push(h17);

let h18= new hotel("https://images.unsplash.com/photo-1619634727222-3318c5e9ebd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQzfHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
"Hotel Pallavi International","⭐⭐⭐⭐⭐",22000," delhi","hotel");
hotelData.push(h18);

let h19= new hotel("https://images.unsplash.com/flagged/photo-1574342961579-cd8411b26ba0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
"FabExpress Pearl","⭐⭐⭐⭐",18000," delhi","hotel");
hotelData.push(h19);

let h20= new hotel("https://images.unsplash.com/photo-1548502669-0643e8fca1c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjIxfHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
"Hotel The Ambassador","⭐⭐⭐",7000," delhi","hotel");
hotelData.push(h20);

let h21= new hotel("https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM5fHxob3RlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
"Hotel Royal House","⭐⭐⭐⭐",17000," delhi","hotel");
hotelData.push(h21);
console.log(hotelData);

//bunglows house 
let h22 = new hotel("https://3.imimg.com/data3/LP/SX/MY-9387387/deep-500x500.jpg",
"Goroomgo Fellow Farm","⭐⭐⭐",7000," patna","house");
hotelData.push(h22);

let h23 = new hotel("http://designdetail.in/wp-content/uploads/2019/11/the-bunglow.jpg",
"Treebo Trend Svr Hotel & Banquet","⭐⭐⭐⭐",10000," patna","house");
hotelData.push(h23);

let h24 = new hotel("https://i.pinimg.com/736x/b6/e0/96/b6e096fce7fe2f1c4d2975fa41e3341e.jpg",
"Goroomgo Vivek","⭐⭐⭐⭐",8000," patna","house");
hotelData.push(h24);

let h25= new hotel("https://is1-2.housingcdn.com/4f2250e8/e453d87ac1f6e01a8fce129f55e21697/v0/fs/sree_balaji_bon_bunglow-daronda-bolpur-santiniketan-sree_balaji.jpg",
"Goroomgo Welcome Palace","⭐⭐⭐⭐",8000," patna","house");
hotelData.push(h25);

let h26= new hotel("https://i.ytimg.com/vi/U9DZwgs8WdY/maxresdefault.jpg",
"Goroomgo Fortune","⭐⭐⭐",6000," patna","hotel");
hotelData.push(h26);

let h27= new hotel("https://st.hzcdn.com/simgs/pictures/exteriors/home-architects-ernakulam-creo-homes-pvt-ltd-img~7ff1e1d70dd502d0_9-5449-1-40a9dac.jpg",
"Goroomgo Fortune","⭐⭐⭐⭐",11000," patna","house");
hotelData.push(h27);

let h28 = new hotel("https://www.pinoyeplans.com/wp-content/uploads/2019/08/1-storey-house-12.jpg",
"Goroomgo Tulsi Patna","⭐⭐⭐⭐",11000," delhi","house");
hotelData.push(h28);

let h29 = new hotel("https://www.hnsafal.com/wp-content/uploads/2017/08/project-landing-img1-1.jpg",
"Treebo Trip Jiya House","⭐⭐⭐⭐⭐",16000," delhi","house");
hotelData.push(h29);

//console.log(movieData);
localStorage.setItem("hotel",JSON.stringify(hotelData));

//cart data 
var cartData=JSON.parse(localStorage.getItem("cart"))||[];

function display(hotelData)
{
     //this line is very important to sort the element and show in display
document.querySelector("#hotel").innerHTML=""

hotelData.map(function(el,i,arr){
     let box1=document.createElement("div");
     let image = document.createElement("img");
     image.src=el.url;




    //  This is the logic for make our image responsive
     box1.addEventListener("click",myFunction);
     function myFunction()
     {
     addToCart(el);
     window.open('staysIndividual.html','_blank');
     }







     image.setAttribute("class","image");

     let box2=document.createElement("div");
     let name = document.createElement("h3");
     name.innerText=el.name;
     let rating = document.createElement("h3");
     rating.innerText = el.rating;
     let price1 = document.createElement("h3");
     price1.innerText = "₹"+el.price;
    //  let left=document.createElement("p");
    //  left.innerText="We have 7 left at";
    //  left.setAttribute("class","left")

     let city = document.createElement("h3");
     city.innerText = el.city;
     price1.style.marginLeft = "100px";
     price1.style.marginTop = "120px";
     let ref=document.createElement("p");
     ref.innerText="Fully refundable";
     let rese=document.createElement("p");
     rese.innerText="Reserve now, pay later";
     let rati=document.createElement("p");
     rati.innerText="4/5 Excellent(402 reviews)"
     price1.setAttribute("class","price1")
     //console.log(price1)
     box2.setAttribute("class","box2")
     let box4=document.createElement("div");
     box4.append(ref,rese,rati)

     let box5=document.createElement("div");
     box5.append(rating,city)
     box5.setAttribute("class","box5")
     box4.setAttribute("class","box4")
     box2.append(name,box5,box4);
     box1.setAttribute("class","box1");

     box1.append(image,box2,price1);
     document.getElementById("hotel").append(box1);

});

}



//sort function 
function sort()
{
     let select = document.getElementById("sort").value;
     //console.log(select);
     if(select=="htl")
     {
       hotelData.sort(function(a,b)
       {
         return b.price-a.price;
       });
       display(hotelData);
       
     }

     if(select=="lth")
     {
       hotelData.sort(function(a,b)
       {
         return a.price-b.price;
       });
       display( hotelData);

     }
}

//logic for sort by rating 
function sortByR5()
{
  hotelData.sort(function(a,b){
    if(a.rating<b.rating) return 1;
    if(a.rating>b.rating) return -1;
    return 0;
})
//console.log(movieData);
display(hotelData);
 
}

function sortByR3()
{
  hotelData.sort(function(a,b){
    if(a.rating>b.rating) return 1;
    if(a.rating<b.rating) return -1;
    return 0;
})
//console.log(movieData);
display(hotelData);
 
}


//implementation of search
//display(hotelData);
function search()
{
  //console.log("inside Search");
let destination = document.getElementById("search").value;
let inDate = document.getElementById("inDate").value;
let outDate = document.getElementById("outDate").value;
let room = document.getElementById("room").value;
let person = document.getElementById("person").value;
console.log(destination,inDate,outDate,room,person);
if(destination&&inDate&&outDate&&room&&person)
{
  let hotelData= JSON.parse(localStorage.getItem("hotel"))||[];
  let searchArray=[];
  let x = destination.toLowerCase();
 hotelData.map(function(el){
   if(el.city==x)
   {
     searchArray.push(el);
   }
 });
 ////console.log(searchArray)
 hotelData=[];
 display(searchArray);
}
else
{
  alert("please fill all the details");
}
}
display(hotelData);


//sort by price using checkbox
function sortByPrice()
{
  //console.log("inside Price");
  let hotelData= JSON.parse(localStorage.getItem("hotel"))||[];
  let searchArray=[];
  let x = document.getElementById("p5").value;
  console.log(x);
 hotelData.map(function(el){
   if(el.price >= x)
   {
     searchArray.push(el);
   }
 });
 ////console.log(searchArray)
 hotelData=[];
 display(searchArray);

}

//window.location.reload();


//searchbyProperty
let sByP=document.getElementById("searchbyProperty");
sByP.addEventListener("keypress", function(event){
  if (event.key === "Enter") 
  {
    event.preventDefault();
    searchByProperty();
  }

});

function searchByProperty()
{
  let searchValue=document.getElementById("searchbyProperty").value;
  //console.log(searchValue);
  let hotelData= JSON.parse(localStorage.getItem("hotel"))||[];
  let x = searchValue.toLowerCase();
  //console.log(x);
  let searchArray=[];
  hotelData.map(function(el){
    if(el.proprtyType == x)
    {
      searchArray.push(el);
    }
  });
  hotelData=[];
  display(searchArray);
}




function addToCart(el)
{
  // console.log(el);
  cartData=[];
  cartData.push(el);
  localStorage.setItem("cart",JSON.stringify(cartData));
  alert("Book The Room");
}