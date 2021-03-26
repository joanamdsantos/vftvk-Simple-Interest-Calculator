var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * year * rate / 100


// function that reads the value of the range slider
// and displays it the <span>adjacent to the slider
function range() {
    r = document.getElementById("rate").value;
    document.getElementById('spanRate').innerHTML = r + "%";
}

function compute() {

    principal = document.getElementById("principal").value;

    // Get rate from range function
    range();
    rate = r;

    // Get years from dropdown menu
    var y = document.getElementById("years");
    years = y.options[y.selectedIndex].value;

    // Calculate interest
    interest = principal * rate * years / 100;

    // Logic to convert the 'No of Years' into the actual
    // year in the future.
    const currentYear = new Date().getFullYear();
    finalYear = (parseInt(currentYear) + parseInt(years) - 1);


    // Write result message
    var res = "<br>" + "If you deposit " + "<span class='highlight'>" +
        principal + "</span>" + "," + "<br>" + "at an interest rate of " +
        "<span class='highlight'>" + rate + "%" + "</span>" + "." + "<br>" +
        "You will receive an amount of " + "<span class='highlight'>" +
        interest + "</span>" + "," + "<br>" +
        "in the year " + "<span class='highlight'>" + finalYear + "</span>" +
        "." + "<br>";

    result = document.getElementById("result");
    result.innerHTML = res;

}