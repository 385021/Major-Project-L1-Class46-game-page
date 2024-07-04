function heSelf(){
    let c = prompt("Register your name for the games");
    if(c == ""){
        alert("Write your name")
        let c = prompt("Register your name for the games");
        document.getElementById("see").innerHTML= "Hello "+c+", Welcome to Educational Game Deluxe, Your name has been registered";
    }
    else{
document.getElementById("see").innerHTML= "Hello "+c+", Welcome to Educational Game Deluxe, Your name has been registered";}
}
