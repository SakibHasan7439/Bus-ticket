// all required elements id
let totalSeatBooked = getElementById("seat-booked");
const totalPrice = getElementById("total-price");
const couponInput = getElementById("coupon-input");
const applyCouponBtn = getElementById("apply-coupon");
const applyCouponInput = getElementById("coupon-input");
const seatSelected = getElementById("seat-selected");
const grandParent = getElementById("grand-parent");
const remainSeat = getElementById("seat-remain");
const defaultText = getElementById("seatBookedTitle");
const grandPrice = getElementById("grand-price");

const nextBtn = getElementById("next-btn");
const passengerName = getElementById("passenger-name");
const passengerPhone = getElementById("passenger-number");


let priceCount = 0;
let countSeat = [];
grandParent.addEventListener("click", (event)=>{
    if(countSeat.includes(event.target.innerText)){
        return alert("Already added");

    }else if(countSeat.length === 3){
        applyCouponBtn.disabled = false;
        applyCouponInput.disabled = false;
        
        applyCouponBtn.addEventListener("click", ()=>{
            if(applyCouponInput.value === "NEW50" || applyCouponInput.value === "Coupon 20" ){
                let discount = priceCount * 0.25;
                totalPrice.innerText = priceCount - discount;
                grandPrice.innerText = totalPrice.innerText;
            }
        })
    }
    

    if(countSeat.length === 4){
        return alert("Maximum seat added");
    }

    if(event.target.tagName === "BUTTON"){
        defaultText.style.display = "none";
        event.target.style.backgroundColor = "#1DD100";
        event.target.style.color = "white";
        seatSelected.innerHTML += `
        <li class="text-base font-normal flex justify-between">
            <span>${event.target.innerText}</span>
            <span>Economy</span>
            <span>550</span>
        </li>
        `
        countSeat.push(event.target.innerText);
        totalSeatBooked.innerText = countSeat.length;
        
        const availableSeat = parseFloat(remainSeat.innerText);
        remainSeat.innerText = availableSeat - 1;

        priceCount += 550;
        totalPrice.innerText = priceCount.toFixed(2);

        function validateForm() {
            
            if (passengerName.value !== "" && passengerPhone.value.length === 11) {
                nextBtn.removeAttribute("disabled"); 
            } else {
                nextBtn.setAttribute("disabled", true); 
            }
        }
        
        passengerName.addEventListener('input', validateForm);
        passengerPhone.addEventListener('input', validateForm);

    }

})

document.getElementById("continueBtn").addEventListener("click", ()=>{
    location.reload();
})
