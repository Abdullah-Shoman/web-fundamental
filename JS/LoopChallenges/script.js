//print odd number from 1 to num
function printOddNum(){
    for(var index=1;index<20;index++){
        if(index % 2 != 0){
            console.log(index);
        }
    }
}
// Decreasing Multiples of 3 loop from 100 - 1
function multipleOfThree(){
    var number = 100;
    while(number > 0){
        if(number % 3 ==0){
            console.log(number);
        }
        number-=1;
    }
}
// print of sequence 4, 2.5, 1, -0.5, -2, -3.5.
function printSequence(){
    var sequence="";
    var index =4;
    while(index > -4){
        sequence = sequence + index + ","
        index-=1.5;
    }
    console.log(sequence);
}
// sum number from 1 to 100
function sigma(){
    let sum =0;
    for (let index = 0; index <=100; index++) {
        sum+=index;
    }
    console.log(sum);
}
// factoral number from 1 to 12
function factoral(){
    let factoral = 1;
    let index =1;
    while (index <= 12){
        factoral*=index;
        index+=1;
    }
    console.log(factoral);
}

console.log("Odd Number from 1 to 20 :")
printOddNum();
console.log("The Numbers is mutiple of 3 from 100 to 1: ");
multipleOfThree();
console.log("Print of sequence (4, 2.5, 1, -0.5, -2, -3.5)");
printSequence();
console.log("The sum of number from 1 to 100:")
sigma();
console.log("The Factoral from 1 to 12:")
factoral();