let legth;
let width

function calculateArea(){
    legth = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = legth * width

    document.getElementById('result').innerText = `The area of rectangle is: ${area}`
} 