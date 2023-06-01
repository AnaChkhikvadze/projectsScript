function calculator() {
    miles = document.getElementById("miles_driven").value;
    gallons = document.getElementById("gallons_used").value;
    do {
        if (miles <= 0 || gallons <= 0 || isNaN(gallons) || isNaN(miles)) {
            document.getElementById("result").innerHTML = "Invalid Input";
            break;
        }
        let x = parseFloat(Number(miles) / Number(gallons))
        document.getElementById("result").innerHTML = "Your MPG is: " + x;
    } while (document.getElementById("restart"));
}
