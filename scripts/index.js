
//Alert
let discountFlights=document.getElementById("discFlights");
discountFlights.addEventListener("click", function(){
    window.alert("Splash! We're all in!!");
  });
//For About Us to dissapear
let aboutUs=document.getElementById("lgcard");
aboutUs.addEventListener("click", function(){
    aboutUs.remove();
    let para = document.createElement("P");               // Create a <p> element
    para.innerText = "Vivien: likes Hawaii, Cecil: is in a South Korean Documentary";               // Insert text
    document.getElementById("0023").appendChild(para);      
});

let gourpRates=documen.createElement("div");
groupRates.addEventListener("click", function(){
    

    var x = document.getElementById("gRates");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
    // document.createElement("div");
    // document.
    // document.getElementById('main');
    
}