const couponInput = document.getElementById('coupon-input');
    const applyBtn = document.getElementById('apply-btn');
    const couponSuccess = document.getElementById('coupon-success');

    applyBtn.addEventListener('click', () => {
        const couponCode = couponInput.value.trim();

        // Array of valid coupon codes
        const validCoupons = ["NEW15", "Couple 20"];

        // Check if the entered coupon code is in the array of valid coupons
        if (validCoupons.includes(couponCode)) {
            // Apply the coupon logic here, for now just hide the input and show success message
            couponInput.style.display = 'none';
            applyBtn.style.display = 'none';
            couponSuccess.style.display = 'block';
        } else {
            alert('Invalid coupon code. Please try again.');
        }
    });