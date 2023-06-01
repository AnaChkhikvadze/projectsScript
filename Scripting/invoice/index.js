function discountCalculator(){
var total = document.getElementById("total_purchased").value;
var customerType= document.getElementById("customer_type").value;
var discount;
var currPrice;
if (customerType=== "retail" || customerType=== "Retail" || customerType=== "RETAIL") {
    discount = total *0.1;
} else if (customerType=== "wholesale" || customerType=== "Wholesale" || customerType=== "WHOLESALE") {
    discount = total *0.2;
    }
currPrice = total-discount;
document.getElementById("Result").innerHTML= "Discount: "+ discount;
document.getElementById("totalPrice").innerHTML= "Price Left:" + currPrice;
}