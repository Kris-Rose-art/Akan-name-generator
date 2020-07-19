var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
months.forEach(function(value, index, array) {
    console.log(value, index)
})
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
days.forEach(function(value, index) {
    console.log(value, index)
    
}) 
var cc = centuryDigits;
var yy = yearDigits;
var dd = dayOfTheMonth;
var mm = monthOfTheYear;
var mod = modulusFunction;
var d = dayOfTheWeek;

function calculateDay() {
    getData(); d = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)mod7;
    console.log(d);
    return(Math.floor(d));
}
var dd => 1;
var dd =<31;
var mm =>1;
var mm =<12;
if (dd<1) {
  console.log("date invalid!"); 
} 
 if (dd>31) {
  console.log("date invalid");  
 }   
if (mm<1) {
    console.log("month invalid!");  
}
if (mm>12) {
    console.log("month invalid!");
}

var akanNameMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
days.forEach(function(value, index) {
    console.log(value, index)
})

var akanNameFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function getData(Event) {
    console.log("function called")
    event.preventDefault()
    let res = Document.getElementById('datepicker').value
    res.innerHTML = <h1>$input</h1>
}

if (Gender = Male && d =>0) {
    console.log("give akanNameMale");
} else (Gender = Female && d =>0) {
  console.log("give akanNameFemale");
}

