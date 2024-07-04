let count=0;
let correct = 0;
function heSee(){
    let d = document.getElementById("koo").value;
    let c = document.getElementById("aad").value;
    let n = document.getElementById("ppp").value;
    let p = 6;
    let f = 64;
    let t = 5;
   
    if(d == t){
         greeting = count+=1; 
         } 
         else{
             greeting = count+=0;
         }
    if (n == p){
       me = count+=1;
    }
    else{
     count+=0;
    }
    if(c == f){
        count+=1;
    }
    else{
        count+=0;
    }
    let y = 3-count;
    let zee = (count/3)*100;
    
    document.getElementById("ker").innerHTML = "You got "+count+"/3. You got "+y+" wrong. You got "+zee+"%";
    
}
function keePaper(){
    let kesos = document.getElementById("wealth").value;
    let peess = document.getElementById("element").value;
    let pe = document.getElementById("CEO").value;
    let kkkkk = "Christiano Ronaldo";
    let nn = "Oxygen";
    let np = "Elon Musk";
   
    if(kesos == kkkkk){
         correct+=1; 
         } 
         else{
             correct+=0;
         }
    if (peess == nn){
       correct+=1;
    }
    else{
     correct+=0;
    }
    if(pe == np){
        correct+=1;
    }
    else{
        correct+=0;
    }
    let oh = 3-correct;
    let rana = (correct/3)*100;
    
    document.getElementById("keso").innerHTML = "You got "+correct+"/3. You got "+oh+" wrong. You got "+rana+"%";
    
}

