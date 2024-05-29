var input = ""; // Declare input globally

function calculator(a) {
    input += a; 
    document.getElementById("input").value = input; 
}

function calculate(b) {
    if (b == "=") {
        var result = eval(input); 
        console.log(result);
        document.getElementById("input").value = result;
        input = ""; 
    }
}

function lastDelete() {
    var current = document.getElementById("input").value;
    document.getElementById("input").value = current.slice(0,-1); 
}

function clearAll() {
    input = ""; 
    document.getElementById("input").value = ""; 
}
