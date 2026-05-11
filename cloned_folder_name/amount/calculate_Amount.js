let grocery01, grocery02, grocery03;

function calculateAmount(){
    grocery01 = parseFloat(document.getElementById('grocery01').value)
    grocery02 = parseFloat(document.getElementById('grocery02').value)
    grocery03 = parseFloat(document.getElementById('grocery03').value)
    
    let soma = grocery01 + grocery02 + grocery03
    
    document.getElementById('result').innerText = soma
}



//console.log(grocery01);