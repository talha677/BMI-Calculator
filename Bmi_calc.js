function Bmi(){
    let your_height = + document.querySelector("#he1").value;
    let your_weight = + document.querySelector("#we1").value;
    
    res = (your_weight / ((your_height * your_height) / 10000)).toFixed(1);
    
    
    document.querySelector("#res1").innerHTML = res
       
}