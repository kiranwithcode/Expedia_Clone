
 import navbar from "./components/navbar.js";
 let header = document.getElementById("header");
 header.innerHTML = navbar();


let user1 = [
    {time:"6:20-7:55",from:"delhi(DEL)",to:"patna(PAT)",flightN:"Go First",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAilBMVEX///8WHK8AAKyoqNkAAKkAAK8MFK4UGq/19fsMF7Ts7PcACq34+PwAAKYQF678/P7b2+/h4fJ6e8gsL7LDw+TV1eycndV1dseSk9GMjc9NTrq7vOKXmNO2tt+hotY8PrpkZcFrbMaEhc5ERrhcXr/JyuczNrQnKbBXWL0gJLCvr9xBRLxub8MAAJ7GCWPaAAAEkklEQVRoge1YXZeiOhAkTSdBIlFQEFEUvx1n9v//vdtJwNHx7K6AZ1+u9WKITtEU3dWd8bw33njjjTfe+JcIwjh4Gddhlc+36fU6jKIo/cPvW6GMABAX1+stSPWyyA/IGMNrrCFIfXwVt5eCIY+byzkwlbyMPAbJWNQIMYwYg8vLyENlyJsrCpzh+GXkQ0bkWF8EQjKJo/6sh/rzpJkU9TqnwEXRn/uCQ7eYaKbX9SbSU6hZb+4xQu5WhWDi7JZLClxi7xIankSj7UYx9eU2PzTlSt6X20vgSjMn8q1drYziu97cXkjqSm2zOwMGc7spaQ/iP/7dc1hQ1cPSrHwiz+oFQ/8F3FYYpzrdBm1NkuLqBWloMREudHIunNLnhe6mwheRj0FKQarH6EyR8v3GeTuiPNfhrdCKTV5lTJHUUVVf7hgV1ra3VxKCNOMDOBjF9cewLzlJLXFnEy7QcjBAOK4Bd2SHVvleqExvYALnJlEOnG9ssad7Ct9WUtzjla5MUzOACUlR8WuwU87N7coe+ZKilAoAFDkhfmW3bWHMt154xu7VH2gNsMn9LFmjYOreoxaQK1W7TBcUAFmdEelZCHafHWcuNZZdube4+1Z0priLMuewsdsHDsdl15FlGt0ISk3fvc0lHwz4h91z/tUJMeibsBKU3LzOkVQDYrdqFN37xARXbnG4LIIABXBTSQEFTuRWoVmx6NjivsANJ8MCAaMJK5bM9P/RyUZuY57xqNs85GPdhbcAk8Qfk0Iz+yRG84HrP3uIOvWhlKzP9TIFTSqX7v1uOXeSe7D0uyRLQF3GNTUPr0NPXI+fYeooF9gtD8+KNV34KFjDAee7Hx0nnchzY1eisuuMJv3Lxtbm5i6xcy66zENTa4XSTZujHSJGdlDMgH9ndsZ1l/k2NBO4mfBr31hVX65Xpqj5p5tH0zNxS/wdxe9BKls8HEdS0+/5sUqqNSduJj5bc8+ANQ3i3k9jM9MyOaBU5IBMN8naApem9xhhbs1jSh2DSWlGf/a1SsOTbH1eceFdYy+aEhxX5gsACcK9xuFZYMv6DOjccAuBRb6YlttdpMyTLOMg3OFlHHurSEjZcrTYI/sBQUfaCNVR0/xJ5hKOkfpPYoY6cf473y2WD9wKhfwojRBbwNA7/oooZSiPApTYrn8ebgSXQoEhSPcCjZ8Ygx97YRj4aI+KH7rdpNhUj41YFUkZmkJaAZEWv0KvUEXgjUw3ZXjwEgWt6nOnvpXeW1Pag1GXUi6NvVDTCHMUmZmdwfdKFH/ju0UC31Jr8u7sHIE+eV7kDoMljbWJTw6eKDp7+vtW81B5+zIlvbwqme4EefZRrb3g03glmN/51jJBQIv6vK+eeoTNkdTdIg2EnxT9BtezSjfP12IeGjV21dRm7oV5RSWeeSXYO8yTndZKXENo0T/3cMdtTvRxpKRpGTH16oKEUnfFK9XT/09IfnBbrzaZKU8zOvwIIX98T/n0LPf2oTLp3BPstI1QP3xndXu2PjeP3HQ2jsTj7s3Nn6vPcI3QHs/1z2Hmd8IL/j/0xhtvvPHG/xX/AUp0Ps1UWGKIAAAAAElFTkSuQmCC",sefty:"4 cleaning and safety",price:"RS.4,550"},
    {time:"10:20-11:55",from:"delhi(DEL)",to:"patna(PAT)",flightN:"Go First",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAilBMVEX///8WHK8AAKyoqNkAAKkAAK8MFK4UGq/19fsMF7Ts7PcACq34+PwAAKYQF678/P7b2+/h4fJ6e8gsL7LDw+TV1eycndV1dseSk9GMjc9NTrq7vOKXmNO2tt+hotY8PrpkZcFrbMaEhc5ERrhcXr/JyuczNrQnKbBXWL0gJLCvr9xBRLxub8MAAJ7GCWPaAAAEkklEQVRoge1YXZeiOhAkTSdBIlFQEFEUvx1n9v//vdtJwNHx7K6AZ1+u9WKITtEU3dWd8bw33njjjTfe+JcIwjh4Gddhlc+36fU6jKIo/cPvW6GMABAX1+stSPWyyA/IGMNrrCFIfXwVt5eCIY+byzkwlbyMPAbJWNQIMYwYg8vLyENlyJsrCpzh+GXkQ0bkWF8EQjKJo/6sh/rzpJkU9TqnwEXRn/uCQ7eYaKbX9SbSU6hZb+4xQu5WhWDi7JZLClxi7xIankSj7UYx9eU2PzTlSt6X20vgSjMn8q1drYziu97cXkjqSm2zOwMGc7spaQ/iP/7dc1hQ1cPSrHwiz+oFQ/8F3FYYpzrdBm1NkuLqBWloMREudHIunNLnhe6mwheRj0FKQarH6EyR8v3GeTuiPNfhrdCKTV5lTJHUUVVf7hgV1ra3VxKCNOMDOBjF9cewLzlJLXFnEy7QcjBAOK4Bd2SHVvleqExvYALnJlEOnG9ssad7Ct9WUtzjla5MUzOACUlR8WuwU87N7coe+ZKilAoAFDkhfmW3bWHMt154xu7VH2gNsMn9LFmjYOreoxaQK1W7TBcUAFmdEelZCHafHWcuNZZdube4+1Z0priLMuewsdsHDsdl15FlGt0ISk3fvc0lHwz4h91z/tUJMeibsBKU3LzOkVQDYrdqFN37xARXbnG4LIIABXBTSQEFTuRWoVmx6NjivsANJ8MCAaMJK5bM9P/RyUZuY57xqNs85GPdhbcAk8Qfk0Iz+yRG84HrP3uIOvWhlKzP9TIFTSqX7v1uOXeSe7D0uyRLQF3GNTUPr0NPXI+fYeooF9gtD8+KNV34KFjDAee7Hx0nnchzY1eisuuMJv3Lxtbm5i6xcy66zENTa4XSTZujHSJGdlDMgH9ndsZ1l/k2NBO4mfBr31hVX65Xpqj5p5tH0zNxS/wdxe9BKls8HEdS0+/5sUqqNSduJj5bc8+ANQ3i3k9jM9MyOaBU5IBMN8naApem9xhhbs1jSh2DSWlGf/a1SsOTbH1eceFdYy+aEhxX5gsACcK9xuFZYMv6DOjccAuBRb6YlttdpMyTLOMg3OFlHHurSEjZcrTYI/sBQUfaCNVR0/xJ5hKOkfpPYoY6cf473y2WD9wKhfwojRBbwNA7/oooZSiPApTYrn8ebgSXQoEhSPcCjZ8Ygx97YRj4aI+KH7rdpNhUj41YFUkZmkJaAZEWv0KvUEXgjUw3ZXjwEgWt6nOnvpXeW1Pag1GXUi6NvVDTCHMUmZmdwfdKFH/ju0UC31Jr8u7sHIE+eV7kDoMljbWJTw6eKDp7+vtW81B5+zIlvbwqme4EefZRrb3g03glmN/51jJBQIv6vK+eeoTNkdTdIg2EnxT9BtezSjfP12IeGjV21dRm7oV5RSWeeSXYO8yTndZKXENo0T/3cMdtTvRxpKRpGTH16oKEUnfFK9XT/09IfnBbrzaZKU8zOvwIIX98T/n0LPf2oTLp3BPstI1QP3xndXu2PjeP3HQ2jsTj7s3Nn6vPcI3QHs/1z2Hmd8IL/j/0xhtvvPHG/xX/AUp0Ps1UWGKIAAAAAElFTkSuQmCC",sefty:"4 cleaning and safety",price:"RS.4,550"},
    {time:"15:20-17:55",from:"delhi(DEL)",to:"patna(PAT)",flightN:"Air India",image:"https://1000logos.net/wp-content/uploads/2020/09/Air-India-Logo-2007.jpg",sefty:"4 cleaning and safety",price:"RS.6,550"},
    {time:"20:20-21:55",from:"delhi(DEL)",to:"patna(PAT)",flightN:"Go First",image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAilBMVEX///8WHK8AAKyoqNkAAKkAAK8MFK4UGq/19fsMF7Ts7PcACq34+PwAAKYQF678/P7b2+/h4fJ6e8gsL7LDw+TV1eycndV1dseSk9GMjc9NTrq7vOKXmNO2tt+hotY8PrpkZcFrbMaEhc5ERrhcXr/JyuczNrQnKbBXWL0gJLCvr9xBRLxub8MAAJ7GCWPaAAAEkklEQVRoge1YXZeiOhAkTSdBIlFQEFEUvx1n9v//vdtJwNHx7K6AZ1+u9WKITtEU3dWd8bw33njjjTfe+JcIwjh4Gddhlc+36fU6jKIo/cPvW6GMABAX1+stSPWyyA/IGMNrrCFIfXwVt5eCIY+byzkwlbyMPAbJWNQIMYwYg8vLyENlyJsrCpzh+GXkQ0bkWF8EQjKJo/6sh/rzpJkU9TqnwEXRn/uCQ7eYaKbX9SbSU6hZb+4xQu5WhWDi7JZLClxi7xIankSj7UYx9eU2PzTlSt6X20vgSjMn8q1drYziu97cXkjqSm2zOwMGc7spaQ/iP/7dc1hQ1cPSrHwiz+oFQ/8F3FYYpzrdBm1NkuLqBWloMREudHIunNLnhe6mwheRj0FKQarH6EyR8v3GeTuiPNfhrdCKTV5lTJHUUVVf7hgV1ra3VxKCNOMDOBjF9cewLzlJLXFnEy7QcjBAOK4Bd2SHVvleqExvYALnJlEOnG9ssad7Ct9WUtzjla5MUzOACUlR8WuwU87N7coe+ZKilAoAFDkhfmW3bWHMt154xu7VH2gNsMn9LFmjYOreoxaQK1W7TBcUAFmdEelZCHafHWcuNZZdube4+1Z0priLMuewsdsHDsdl15FlGt0ISk3fvc0lHwz4h91z/tUJMeibsBKU3LzOkVQDYrdqFN37xARXbnG4LIIABXBTSQEFTuRWoVmx6NjivsANJ8MCAaMJK5bM9P/RyUZuY57xqNs85GPdhbcAk8Qfk0Iz+yRG84HrP3uIOvWhlKzP9TIFTSqX7v1uOXeSe7D0uyRLQF3GNTUPr0NPXI+fYeooF9gtD8+KNV34KFjDAee7Hx0nnchzY1eisuuMJv3Lxtbm5i6xcy66zENTa4XSTZujHSJGdlDMgH9ndsZ1l/k2NBO4mfBr31hVX65Xpqj5p5tH0zNxS/wdxe9BKls8HEdS0+/5sUqqNSduJj5bc8+ANQ3i3k9jM9MyOaBU5IBMN8naApem9xhhbs1jSh2DSWlGf/a1SsOTbH1eceFdYy+aEhxX5gsACcK9xuFZYMv6DOjccAuBRb6YlttdpMyTLOMg3OFlHHurSEjZcrTYI/sBQUfaCNVR0/xJ5hKOkfpPYoY6cf473y2WD9wKhfwojRBbwNA7/oooZSiPApTYrn8ebgSXQoEhSPcCjZ8Ygx97YRj4aI+KH7rdpNhUj41YFUkZmkJaAZEWv0KvUEXgjUw3ZXjwEgWt6nOnvpXeW1Pag1GXUi6NvVDTCHMUmZmdwfdKFH/ju0UC31Jr8u7sHIE+eV7kDoMljbWJTw6eKDp7+vtW81B5+zIlvbwqme4EefZRrb3g03glmN/51jJBQIv6vK+eeoTNkdTdIg2EnxT9BtezSjfP12IeGjV21dRm7oV5RSWeeSXYO8yTndZKXENo0T/3cMdtTvRxpKRpGTH16oKEUnfFK9XT/09IfnBbrzaZKU8zOvwIIX98T/n0LPf2oTLp3BPstI1QP3xndXu2PjeP3HQ2jsTj7s3Nn6vPcI3QHs/1z2Hmd8IL/j/0xhtvvPHG/xX/AUp0Ps1UWGKIAAAAAElFTkSuQmCC",sefty:"4 cleaning and safety",price:"RS.4,550"},
    {time:"23:20-1:55",from:"delhi(DEL)",to:"patna(PAT)",flightN:"IndiGO",image:"https://upload.wikimedia.org/wikipedia/commons/3/35/%E0%A4%87%E0%A4%82%E0%A4%A1%E0%A5%80%E0%A4%97%E0%A5%8B_%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B.jpg",sefty:"4 cleaning and safety",price:"RS.8,550"},

    
    {time:"8:20-10:55",from:"patna(PAT)",to:"delhi(PAT)",flightN:"Air India",image:"https://1000logos.net/wp-content/uploads/2020/09/Air-India-Logo-2007.jpg",sefty:"4 cleaning and safety",price:"RS.6,500"},
    {time:"16:20-17:55",from:"pune(PUN)",to:"Bangalore(BAG)",flightN:"Go Air",image:"https://static.wikia.nocookie.net/logopedia/images/1/19/Go_First.jpg/revision/latest/scale-to-width-down/250?cb=20210514144815",sefty:"4 cleaning and safety",price:"RS.2,550"},
    {time:"12:20-14:55",from:"delhi(DEL)",to:"kolkata(KOL)",flightN:"IndiGO",image:"https://upload.wikimedia.org/wikipedia/commons/3/35/%E0%A4%87%E0%A4%82%E0%A4%A1%E0%A5%80%E0%A4%97%E0%A5%8B_%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B.jpg",sefty:"4 cleaning and safety",price:"RS.5,550"}
]

 //console.table(user1)



let cartData = JSON.parse(localStorage.getItem("cart")) || []


document.querySelector("#seche").addEventListener("click", searchFun)

function searchFun(){
    // event.preventDefault();
    let input1 = document.querySelector("#lev").value;
    let input2 = document.querySelector("#go").value;

    for(let i=0;i<user1.length;i++){
        if(input1[i]===input2[i]){
           
            return;
        }

        
    


    user1.map(function(el){
    let box = document.createElement("div")

    box.setAttribute("class","mainbox")
    let box1 = document.createElement("div")

    let box2 = document.createElement("div")
  
    let box3 = document.createElement("div")
 



   let times = document.createElement("h3")
   times.innerText = el.time;
   let nameFrom = document.createElement("p")
   nameFrom.textContent = el.from;
   let goTo = document.createElement("p")
   goTo.textContent = el.to;
   let fulls = nameFrom.innerText + " - " + goTo.innerText;
//    console.log(fulls)
  let p2 = document.createElement("p")
  p2.innerText = fulls;
  
   let flightName = document.createElement("p")
   flightName.textContent = el.flightN;
   let images = document.createElement("img")
   images.src = el.image;
   let seftys = document.createElement("p")
   seftys.textContent = el.sefty;
   let p3 = document.createElement("p")
   p3.innerText  = seftys.innerText;
   let prices = document.createElement("h2")
   prices.innerText = el.price;

   let p4 = document.createElement("p")
   p4.innerText = "1h 30m (Direct)";

  


   let p1 = document.createElement("p")
   p1.innerText = "Return per traveller";

   let imgDiv = document.createElement("div")
   imgDiv.setAttribute("class" , "flyimge")
   imgDiv.append(images,flightName)

  
  
   document.querySelector("#container").append(box)
   box1.append(times,p2,imgDiv,p3)
   box3.append(p4)
   box2.append(prices ,p1)
   
   
   box.append(box1,box3,box2,)
   

})
    }
}





//   user2 = JSON.parse(localStorage.getItem("username")) ||[]
//   function searchFun(){
//     event.preventDefault();
//     let input1 = document.querySelector("#lev").value;
//     let input2 = document.querySelector("#go").value;

//     for(let i=0;i<user1.length;i++){
//         if(input1[i]==input2[i]){
//             alert(document.getElementById("myin").value)
//             return;
//         }else{
//             user2.push(user1[i]);
//         }
//     console.log(user2[i])
//     }
    

// }

