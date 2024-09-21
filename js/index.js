// all required elements id
let totalSeatBooked = document.getElementById("seat-booked");
const totalPrice = document.getElementById("total-price");
const couponInput = document.getElementById("coupon-input");
const applyCouponBtn = document.getElementById("apply-coupon");
const seatSelected = document.getElementById("seat-selected");
const grandParent = document.getElementById("grand-parent");


grandParent.addEventListener("click", (event)=>{
    if(event.target.tagName === "BUTTON"){
        if(event.target.tagName == "BUTTON"){
            event.target.style.backgroundColor = "#1DD100";
            event.target.style.color = "white";
            seatSelected.innerHTML += `
            <li class="text-base font-normal flex justify-between">
                <span>${event.target.innerText}</span>
                <span>Economy</span>
                <span>550</span>
            </li>
        `
         let num = parseFloat(totalSeatBooked.innerText);
         totalSeatBooked.innerText = num + 1;
        }
    }
})