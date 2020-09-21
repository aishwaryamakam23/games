function ActiveFunction(){
    document.querySelector("#btn").disabled = false;
    document.querySelector("#btnPaper").disabled = false;
    document.querySelector("#btnSicssors").disabled = false;
    document.querySelector("#btnC").disabled=false;
    document.querySelector("#btnCPaper").disabled = false;
    document.querySelector("#btnCSicssors").disabled = false;

}

function Show(){
    var tag=document.createElement("span");
    var text = document.getElementById("btn").value;
    console.log(text);

}