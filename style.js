const allBtn = document.getElementsByClassName(`btn`);
for(const btn of allBtn){
 btn.addEventListener(`click`,function(event){
    const name = event.target.innerText;
    const tonMoy = document.getElementById(`Economoy`).innerText
    const perPrice = getConvertedValue(`per-price`);
    

 const selectContainer = document.getElementById(`container`);
 const div = document.createElement("div");
 div.classList.add(`flex`);



 const p1 = document.createElement(`p`);
 const p2 = document.createElement(`p`);
 const p3 = document.createElement(`p`);


 p1.classList.add(`mx-8`);
 p2.classList.add(`mx-8`);
 p3.classList.add(`mx-8`);
   
   p1.innerText = name;
   p2.innerText = tonMoy;
   p3.innerText = perPrice;

   div.appendChild(p1);
   div.appendChild(p2);
   div.appendChild(p3);
   selectContainer.appendChild(div);

   updateTotalPrice(perPrice);
   
  updateGrandPrice();
    
 })
}


// update badget




function updateGrandPrice(status){
  const totalPrice = getConvertedValue(`total-price`);
  if (status === undefined){
   
    document.getElementById(`grand-price`).innerText = totalPrice;

  }else{
    const couponCode = document.getElementById(`coupon-code`).value;
    if(couponCode === `NEW15`){
      
       const discounted = (totalPrice * 20 )/100;
       
      document.getElementById(`grand-price`).innerText = totalPrice-discounted ;
    }else{
      alert(`please enter valid coupon code.`)  
    }
  }
}




function updateTotalPrice(price){
 const totalPrice = getConvertedValue(`total-price`);
const convertedPrice = parseFloat(price);
const sum =  totalPrice + convertedPrice;
document.getElementById(`total-price`).innerText = sum;
}
 
 





function getConvertedValue(id){
    const price = document.getElementById(id).innerText;
    const convertPrice = parseFloat(price);
    return convertPrice;
}