// import navbar from "./components/navbar.js"
// document.querySelector(".navbar").innerHTML = navbar();

// let paymentSuccess = JSON.parse(localStorage.getItem("detailData"))
// console.table(paymentSuccess)

let paymentData = JSON.parse(localStorage.getItem("detailData"))
console.log(Number(paymentData.price) + Number(3500))

let h2 = document.createElement("h2")
h2.innerHTML = `Total: Rs ${Number(paymentData.price) + Number(3500)}`

let btn = document.createElement("button")
btn.innerHTML = "Go to Home"
btn.addEventListener("click", function(){
    goHome()
})
document.querySelector(".rectCont1").append(h2,btn)

function goHome(){
    window.location.href = "index.html"
}


