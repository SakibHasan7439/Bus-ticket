// all required elements id
let totalSeatBooked = document.getElementById("seat-booked");
const totalPrice = document.getElementById("total-price");
const couponInput = document.getElementById("coupon-input");
const applyCouponBtn = document.getElementById("apply-coupon");
const applyCouponInput = document.getElementById("coupon-input");
const seatSelected = document.getElementById("seat-selected");
const grandParent = document.getElementById("grand-parent");
const remainSeat = document.getElementById("seat-remain");
const defaultText = document.getElementById("seatBookedTitle");
const grandPrice = document.getElementById("grand-price");

const nextBtn = document.getElementById("next-btn");
const passengerName = document.getElementById("passenger-name");
const passengerPhone = document.getElementById("passenger-number");


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
            // Check if both name and phone fields are not empty
            if (passengerName.value !== "" && passengerPhone.value.length === 11) {
                nextBtn.removeAttribute("disabled");  // Enable submit button
            } else {
                nextBtn.setAttribute("disabled", true); // Keep button disabled
            }
        }
        
        // Attach event listeners to each input to trigger validation as the user types
        passengerName.addEventListener('input', validateForm);
        passengerPhone.addEventListener('input', validateForm);

    }

})

document.getElementById("continueBtn").addEventListener("click", ()=>{
    location.reload();
})
