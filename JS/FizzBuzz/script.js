
var result ;
for(var index=1;index<=100;index++){
    //multiple of 3 
    if(index % 3 == 0){
        result = "Fizz";
    }
    //multiple of 5
    if(index % 5 == 0){
        result+= "Buzz";
    }
    //not multiple of 3 and 5
    if(index % 3 != 0 && index % 5 != 0){
        result = index;
    }
    //print then reset the result
    console.log(result);
    result = "";
}
