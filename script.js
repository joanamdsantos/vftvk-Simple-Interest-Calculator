var principal = "principal"
var rate = "rate"
var years = "years"
var interest = principal * years * rate / 100

// Logic to convert the 'No of Years' into the actual 
// year in the future.

var d = new Date()
d.setFullYear(d.getFullYear() + years);
document.getElementById("years").innerHTML = d;

// function that reads the value of the range slider 
// and displays it the <span>adjacent to the slider

function range() {
    output=document.getElementById("rate").value
    document.getElementById('spanRate').innerHTML = output;   
} 


function compute()
{
    p = document.getElementById("principal").value;
    
}
        