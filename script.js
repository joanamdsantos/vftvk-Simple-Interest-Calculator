var principal = document.getElementById("principal").value;
var rate = document.getElementById("rate").value;
var years = document.getElementById("years").value;
var interest = principal * years * rate / 100
var final = principal + 1 * interest

// Logic to convert the 'No of Years' into the actual 
// year in the future.



// function that reads the value of the range slider 
// and displays it the <span>adjacent to the slider

function range() {
    output=document.getElementById("rate").value
    document.getElementById('spanRate').innerHTML = output;   
} 

function compute()
{
    p = document.getElementById("principal").value
    r = document.getElementById("rate").value
    y = document.getElementById("years").value
    
    principal = p
    rate = r
    years = y

    var a_year = new Date()
    a_year.setFullYear(a_year.getFullYear(year) + years);
    document.getElementById("a_year").innerHTML = a_year;
    
    return principal, rate, year, interest, final, a_year
    
    document.getElementById("result").innerHTML = "If you deposit " + <span style='color:yellow;'> compute(principal) </span> + ",\
    <br>at an interest rate of "<span style='color:yellow;'> compute(rate) </span> + ".\
    <br>You will receive an amount of" + <span style='color:yellow;'> compute(final) </span> + ",\
    <br>in the year" + <span style='color:yellow;'> compute(a_year) </span> + "."

    
}