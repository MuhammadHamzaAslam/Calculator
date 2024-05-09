function calculator(a) {
    var input = document.getElementById("input").value += a; 
    console.log(input); 
    var multiply = eval(input); 
    let result = document.getElementById("input").value = multiply
    console.log(result);
    
}


function lastDelete(a) {
    var current = document.getElementById("input").value;
    document.getElementById("input").value = current.slice(0,-1); 
}

function clearAll() {
    var input = document.getElementById("input").value = " "; 
}
