var cookies = document.querySelector(".cookies");
var temp = document.querySelectorAll(".temp");
var showTemp = document.getElementById("tempreature")

function selectCity(){
    alert("Loding Weather report...");
}
//user select how to show the tempturear 
function changeTemp(){
    if(showTemp.value == "Celsius"){
        for(var index = 0; index<temp.length;index++){
            temp[index].innerText = fahrenToCelsius(temp[index].innerText);
        }
    }else if (showTemp.value == "Fahrenheit"){
        for(var index = 0; index<temp.length;index++){
            temp[index].innerText = celsiusToFahren(temp[index].innerText);
        }
    }
}
 //change Temprature from Celsuise To Fahrenheit
function celsiusToFahren(clsius){
    clsius = Number(clsius);
    var fahren = (clsius*(9/5)+32);
    return fahren;
}
 //change Temprature from Fahrenheit to Celsuise
function fahrenToCelsius(fahren){
    fahren = Number(fahren);
    var celsius = (fahren - 32)* 5/9;
    return celsius;
}
function acceptCookies(){
    cookies.remove();
}