var searchConent = document.getElementById("search"); 
var likes = document.querySelectorAll(".likes");


// action if clint click join button (as requerd to remove it)
function clickJoin(element){
    element.remove();
}
// search button action with validation  
function goSearch(){
    if(searchConent.value != ""){
        alert("You are search for " + searchConent.value );
        searchConent.value = "";
    }else{
        alert("please enter what you to Search");
    }
}
// add like when user click image (using index of image)
function addLike(index){
    likes[index].innerText = Number(likes[index].innerText)+1;
}

