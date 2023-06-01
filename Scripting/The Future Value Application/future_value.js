var calculateClick = function () {
    var investment = parseFloat(document.getElementById("investment").value);
    var annualRate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);

    if (isNaN(investment) || investment <= 0 || isNaN(annualRate) || annualRate <= 0 || isNaN(years) || years <= 0) {
        alert("Invalid Inputs! All input must be a valid number greater than zero.");
    }

    else {
        futureValue = investment;
        for (i = 1; i <= years; i++) {
            futureValue += futureValue * annualRate / 100;
        }

        document.getElementById("future_value").innerHTML = futureValue;

    }
}

window.onload = function () {
    document.getElementById("calculate").onclick = calculateClick;
    document.getElementById("investment").focus();

}