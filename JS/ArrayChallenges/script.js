//part 1
console.log("Solving Always Hungry problem:")
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
// part 2
console.log("Solving High Pass Filter problem:")
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
//part 3
console.log("Solving better than average problem:")
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4
//part 4
//reverse the array 
console.log("Solving reverse arra problem:")
var result = reverse(["a", "b", "c", "d", "e","f"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
//part 5
//Fibonacci Array
console.log("Solving Fibonacci Array problem:")
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


//function to count how many times repet "food" in array 
function alwaysHungry(arr) {
    var result=0;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] == "food"){
            result+=1;
        }
    }
    prentResultOfAlwaysHungry(result);
}
// function to print the result for alwaysHungry function 
function prentResultOfAlwaysHungry(result){
    var output="";
    if(result == 0){
        console.log("I'm hungry");
    }else{
        while(result > 0){
        output+="yummy ,";
        result--;
        }
        console.log(output);
    }
}
//function to find out how many number greater then specific number in the array 
function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] > cutoff){
            filteredArr.push(arr[index]);
        }
    }
    return filteredArr;
}
//function to find out how many of numbers greater than the average
function betterThanAverage(arr) {
    var sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum+=arr[index];
    }
    var average = sum/arr.length;
    var count = 0
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] > average){
            count++;
        }
    }
    return count;
}
//function to reverse the array 
function reverse(arr) {
    var temp;
    for (let index = 0, index2 = arr.length-1 ; index < index2; index++ ,index2--) {
        temp = arr[index];
        arr[index] = arr[index2];
        arr[index2] = temp; 
    }
    return arr;
}
//function of fibonacci Array 
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (let index = 2; index < n; index++){
        fibArr.push(fibArr[index-2]+fibArr[index-1]);
    }
    return fibArr;
}

