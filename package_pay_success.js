// import navbar from "./components/navbar.js"
// document.querySelector(".navbar").innerHTML = navbar();

// let paymentSuccess = JSON.parse(localStorage.getItem("detailData"))
// console.table(paymentSuccess)

let paymentData = JSON.parse(localStorage.getItem("detailData"))
// console.log(Number(paymentData.price) + Number(3500))

let perInfo = JSON.parse(localStorage.getItem("perInfo"))

let datein = document.createElement("h3")
datein.innerHTML = `Check in date: ${perInfo[0].checkIn}`

let dateout = document.createElement("h3")
dateout.innerHTML = `Check out date: ${perInfo[0].checkOut}`

let h2 = document.createElement("h2")
h2.innerHTML = `Total paid: ${(Number(paymentData.price) * Number(perInfo[0].totalRoom) + 3500).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`

let btn = document.createElement("button")
btn.innerHTML = "Go to Home"
btn.addEventListener("click", function(){
    goHome()
})
document.querySelector(".rectCont1").append(datein,dateout,h2,btn)

function goHome(){
    window.location.href = "index.html"
}


