function logIn(){
    var element = document.querySelector(".btn-login");
    if(element.innerHTML == "login"){
        element.innerHTML = "Logout";
    }else
        element.innerHTML = "login";
        
    
}

function addDef(element){
    element.remove();   
}
function addLike2(element){
    element.querySelector("span").innerHTML = Number(element.querySelector("span").innerHTML)+1;
    alert("ninja was Liked");
}

// other way
function addLike(element){
    var count = 0;
    var output ="";
    var content = element.innerHTML;
    var arrycontent = content.split(" ");
    count = Number(arrycontent[0])+ 1;
    arrycontent[0]= count;
    for(var i=0;i<arrycontent.length;i++){
        output = output+arrycontent[i]+" ";
    }
    element.innerHTML = output;
    alert("ninja was Liked");
}

