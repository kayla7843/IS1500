function calculate() {
    //initialize quantities
    var linked = document.getElementById("linked").value;
    var flower = document.getElementById("flowerEarring").value;
    var ring = document.getElementById("flowerRing").value;
    var dew = document.getElementById("dewEarring").value;
    var coupon = document.getElementById("coupon").value;

    //initialize prices & discounts
    var lPrice = 12.50;
    var fPrice = 13.00;
    var rPrice = 8.00;
    var dPrice = 12.00;
    var discount = 0.90;
    var code = "LOOF10";

    //error check
    var pass = false;

    //initialize outputs
    var couponError = document.getElementById("couponError");
    var output = document.getElementById("output");

    var total = (linked * lPrice) + (flower * fPrice) + (ring * rPrice) + (dew * dPrice);

    //checks coupons errors
    if (coupon !== coupon.toUpperCase() && coupon !== "") {
        couponError.innerHTML = "code must be in caps";
        pass = true;
    }
    else if (coupon !== code && coupon !== "") {
        couponError.innerHTML = "invalid code";
        pass = true;
    }
    else {
        couponError.innerHTML = "";
    }

    //determines if coupons passes
    if (pass) {
        return;
    }

    if (coupon === code) {
        total = (total * discount).toFixed(2);
        output.innerHTML = "total: $" + total;
    }
    else {
        total = total.toFixed(2);
        output.innerHTML = "total: $" + total;
    }
}

paypal.Buttons({
    style: {
        layout:  'vertical',
        color:   'black',
        shape:   'pill',
        label:   'paypal'
    }
}).render('#pay');