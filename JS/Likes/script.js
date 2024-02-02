
var element = document.querySelectorAll(".like-Num");
var count;

function addLike(index){
    // var element = document.querySelector(".like-Num");
    // var count = Number(element.innerHTML);
    // count++;
    // element.innerHTML = count;

    
    count = Number(element[index].innerHTML)+1;
    element[index].innerHTML = count;
    

}

function addAvatar(){
    var element = document.getElementById("avatar-image");
    var newAvatar = document.getElementById("avatar");
    // console.log(element.src);
    var selectroType = newAvatar.files[0].type;
    // console.log(selectroType);
    // image/jpg image/png image/jpeg
    if (selectroType == "image/jpeg" || selectroType == "image/jpg" ){
        element.src = URL.createObjectURL(newAvatar.files[0]);
    }else{
        alert("the input is not Image")
    }
}