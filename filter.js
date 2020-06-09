// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function filterSelection(value){
  if(value==="all"){
    var photos=document.querySelectorAll(".photos");
    for(var i=0; i<photos.length; i++){
      photos[i].style.display="block";
    }
    var writings=document.querySelectorAll(".writings");
    for(var i=0; i<writings.length; i++){
      writings[i].style.display="block";
    }
  }
  else if(value==="photos"){
    var photos=document.querySelectorAll(".photos");
    for(var i=0; i<photos.length; i++){
      photos[i].style.display="block";
    }
    var writings=document.querySelectorAll(".writings");
    for(var i=0; i<writings.length; i++){
      writings[i].style.display="none";
    }
  }
  else if(value==="writings"){
    var photos=document.querySelectorAll(".photos");
    for(var i=0; i<photos.length; i++){
      photos[i].style.display="none";
    }
    var writings=document.querySelectorAll(".writings");
    for(var i=0; i<writings.length; i++){
      writings[i].style.display="block";
    }
  }
}


