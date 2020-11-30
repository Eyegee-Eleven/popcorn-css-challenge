

window.onload=function(){
//Alert
let discountFlights=document.getElementById("discFlights");
discountFlights.addEventListener("click", function(){
    window.alert("Splash! We're all in!!");
  });

//For About Us to dissapear
let aboutUs=document.getElementById("002");
aboutUs.addEventListener("click", function(){
   aboutUs.remove();
   //create a new element <pre><>
   //let moreInfo= document.getElementsByClassName('card large-card').createElement('pre');
   //moreInfo.innerHTML = 'facts about Cecil and Vivien'
   document.getElementById("card large-card").innerHTML = 'facts about Cecil and Vivien';
   //use inner html elment to append
   //document.write('facts about Cecil and Vivien');
  

});


}
