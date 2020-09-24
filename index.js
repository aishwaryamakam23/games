function ActiveFunction(){
    document.querySelector("#btn").disabled = false;
    document.querySelector("#btnPaper").disabled = false;
    document.querySelector("#btnSicssors").disabled = false;
    document.querySelector("#btnC").disabled=false;
    document.querySelector("#btnCPaper").disabled = false;
    document.querySelector("#btnCSicssors").disabled = false;

}

function ShowP(){
    
    document.getElementById("ppp").innerHTML = "Papers";
    Random();
    
}
function ShowR(){
    document.getElementById("ppp").innerHTML = "Rocks";
    Random();
}
function ShowS(){
    document.getElementById("ppp").innerHTML = "Scissors";
    Random();
}

function Random(){

var names = ["Papers","Rocks","Scissors"];

var len = names.length;

var ran = Math.floor(Math.random()*len);

document.getElementById("ccc").innerHTML = names[ran];

}