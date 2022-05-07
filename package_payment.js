let paymentData = JSON.parse(localStorage.getItem("detailData"))
console.table(paymentData)

let total_price = JSON.parse(localStorage.getItem("total")) | []

let box = document.createElement("div")
box.setAttribute('class','box')

let img = document.createElement("img")
img.src = paymentData.image

let name1 = document.createElement("h4")
name1.innerHTML= paymentData.name
name1.setAttribute('class','name')

let rating = document.createElement("h3")
rating.innerHTML= paymentData.rating
rating.setAttribute('class','rating')

let guest = document.createElement("p")
guest.innerHTML= "Guests rated this property 4.8/5 for cleanliness"
guest.setAttribute('class','guest')

let room = document.createElement("p")
room.innerHTML= "1 Room: Lagoon Suite with 2 Private Balconies"
room.setAttribute('class','room')

let refund = document.createElement("p")
refund.innerHTML= paymentData.refund
refund.setAttribute('class','refund')

let checkIn = document.createElement("p")
checkIn.innerHTML= "Check-in: Fri, 20 May"
checkIn.setAttribute('class','checkIn')

let checkOut = document.createElement("p")
checkOut.innerHTML= "Check-out: Sat, 21 May"
checkOut.setAttribute('class','checkOut')

let oneNight = document.createElement("p")
oneNight.innerHTML= "1-night stay"
oneNight.setAttribute('class','oneNight')

let priceDiv = document.createElement("div")
priceDiv.setAttribute('class','priceDiv')

let pricehead = document.createElement("h2")
pricehead.innerHTML = "Price details"

let hr = document.createElement("hr")

let roomPriceDiv = document.createElement("div")
roomPriceDiv.setAttribute('class','roomPriceDiv')

let taxPriceDiv = document.createElement("div")
taxPriceDiv.setAttribute('class','taxPriceDiv')

let roomnight = document.createElement("p")
roomnight.innerHTML= "1 room x 1 night"
roomnight.setAttribute('class','roomnight')

let price = document.createElement("p")
price.innerHTML= `Rs${paymentData.price}`
price.setAttribute('class','price')

let taxes = document.createElement("a")
taxes.innerHTML = `<a href="">Taxes and service fees </a>`
taxes.setAttribute('class','taxes')

let taxPrice = document.createElement("p")
taxPrice.innerHTML=  "Rs3500"
taxPrice.setAttribute('class','taxPrice')

let hr1 = document.createElement("hr")

let totalDiv = document.createElement("div")
totalDiv.setAttribute('class','totalDiv')

let total = document.createElement("h3")
total.innerHTML = "Total"

let totalPrice = document.createElement("h3")
totalPrice.innerHTML = `Rs${Number(paymentData.price) + 3500}`

let promo = document.createElement("a")
promo.innerHTML = `<a href="">Use a coupon, credit, or promotion code </a>`
promo.setAttribute('class','promo')

let lastpara = document.createElement("p")
lastpara.innerHTML=  "Trip total includes GST that Expedia pays to its vendors (e.g. Hotels). We retain our service fee for facilitating your travel reservation. For details please see our terms of use."
lastpara.setAttribute('class','lastpara')

totalDiv.append(total,totalPrice)
roomPriceDiv.append(roomnight,price)
taxPriceDiv.append(taxes,taxPrice)
priceDiv.append(pricehead,hr,roomPriceDiv,taxPriceDiv,hr1,totalDiv,promo,lastpara)
box.append(img,name1,rating,guest,room,refund,checkIn,checkOut,oneNight)
document.querySelector(".right").append(box,priceDiv)


// let obj = {
//     price_total: 1555,
// }
// total_price.push(obj)



function clickcomplete(total_price){
   
    window.location.href = "package_pay_success.html"
}