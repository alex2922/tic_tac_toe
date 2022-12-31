
 var turn = 1;
var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var box5 = document.querySelector("#box5");
var box6 = document.querySelector("#box6");
var box7 = document.querySelector("#box7");
var box8 = document.querySelector("#box8");
var box9 = document.querySelector("#box9");

function click1(){
 
    if ( turn === 1 ){
        box1.classList.add("cross")
        turn = 2;
    }
    else if ( turn === 2){
        box1.classList.add("dot")
        turn = 1;
    }

    
}
function click2(){
    
    if ( turn === 1){
        box2.classList.add("cross")
        turn = 2;
    }
    else if ( turn === 2){
        box2.classList.add("dot")
        turn = 1;
    }
}
function click3(){
    
    if ( turn === 1){
        box3.classList.add("cross")
        turn = 2;
    }
    else if ( turn === 2){
        box3.classList.add("dot")
        turn = 1;
    }
}
function click4(){
   
    if ( turn === 1){
        box4.classList.add("cross")
        turn = 2;
    }
    else if ( turn === 2){
        box4.classList.add("dot")
        turn = 1;
    }
}
function click5(){
    
    if ( turn === 1){
        box5.classList.add("cross")
        turn = 2;
    }
    else if ( turn === 2){
        box5.classList.add("dot")
        turn = 1;
    }
}
function click6(){
    if ( turn === 1){
        box6.classList.add("cross")
        turn = 2;
    }
    else if ( turn === 2){
        box6.classList.add("dot")
        turn = 1;
    }
}
function click7(){
    if ( turn === 1){
        box7.classList.add("cross")
        turn = 2;
    }
    else if ( turn === 2){
        box7.classList.add("dot")
        turn = 1;
    }
}
function click8(){
    if ( turn === 1){
        box8.classList.add("cross")
        turn = 2;
    }
    else if ( turn === 2){
        box8.classList.add("dot")
        turn = 1;
    }
}
function click9(){
  
    if ( turn === 1){
        box9.classList.add("cross")
        turn = 2;
    }
    else if ( turn === 2){
        box9.classList.add("dot")
        turn = 1;
    }
}




/// function for resting the game 

// function gameReset(){
//     var allboxs = document.querySelectorAll(".box");
//     allboxs.classList.remove("cross");
//     allboxs.classList.remove("dot");
//     console.log(" fucntion is being executed")
// }

function click_Tracker(boxnum){

    var box =  ".box";
    var id = boxnum;
    var boxId = box.concat("", id);  
    alert(boxId);
    var selectBox = document.getElementById(boxId);
    selectBox.classList.add("cross");  
   
   


}