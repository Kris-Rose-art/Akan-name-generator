var cc = centuryDigits;
var yy = yearDigits;
var dd = dayOfTheMonth;
var mm = monthOfTheYear;
var mod = modulusFunction;
var d = dayOfTheWeek;

// var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
// days.forEach(function(value, index) {
//     console.log(value, index)
// })
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// months.forEach(function(value, index, array) {
//     console.log(value, index)
// })
var currentDate = document.getElementById('date').value
    console.log(currentDate)
function calculateDay(currentDate) {
    getData(Event); d = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
    console.log(d);
    return(Math.floor(d));
}
    
function getData(event) {
    event.preventDefault()
    const form = new FormData(event.target)
    const date = form.get("currentDate")
    const gender = form.get("Gender")
    const dateObj = new Date(date)
    const dayBorn = dateObj.getDay()
    const akanNameMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const akanNameFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    let akanName = ""
    if (gender === "Female") {
       akanName = akanNameFemale[dayBorn]
       console.log (akanName)
     

    }else if (gender === "Male"){
        akanName = akanNameMale[dayBorn]
    }else {
        alert("Please select a gender")
        return false;
    }
    console.log (akanName)


    if (akanName === "Kwasi") {
        alert("Your Akan name is Kwasi")
    }else if (akanName === "Kwadwo") {
        alert("Your Akan name is Kwadwo")
    }else if (akanName === "Kwabena") {
        alert("Your Akan name is Kwabena")
    }else if (akanName === "Kwaku") {
        alert("Your Akan name is Kwaku") 
    }else if (akanName === "Yaw") {
        alert("Your Akan name is Yaw")
    }else if (akanName === "Kofi") {
        alert("Your Akan name is Kofi")
    }else if (akanName === "Kwame") {
        alert("Your Akan name is Kwame")
    }else if (akanName === "Akosua") {
        alert("Your Akan name is Akosua") 
    }else if (akanName === "Adwoa") {
        alert("Your Akan name is Adwoa")
    }else if (akanName === "Abenaa") {
        alert("Your Akan name is Abenaa")
    }else if (akanName === "Akua") {
        alert("Your Akan name is Akua") 
    }else if (akanName === "Yaa") {
        alert("Your Akan name is Yaa")
    }else if (akanName === "Afua") {
        alert("Your Akan name is Afua")
    }else if (akanName === "Ama") {
        alert("Your Akan name is Ama")
    }
}
var dd > 0;
var dd < 32;
var mm > 1;
var mm < 12;
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
names.forEach(function(value, index) {
    console.log(value, index)
})

var akanNameFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
names.forEach(function(value, index) {
    console.log(value, index)
})

