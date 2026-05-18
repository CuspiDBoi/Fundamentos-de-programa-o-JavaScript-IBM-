let testText = "The Quick brown fox jumps over the lazy dog."
let startTime, endTime;

function startTest(){
    document.getElementById("inputText").value = testText;

    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();

    document.getElementById("output").innerHTML = "";

    startTime = new Date().getTime();
};

function endTest(){
    endTime = new Date().getTime();

    //desabilita a entrada do usuario

    document.getElementById("userInput").readOnly = true;

    //calculate time decorrido and palavras for minutes
    let timeElapsed = (endTime - startTime) /1000 //in secunds
    let userTypedText = document.getElementById("userInput").value;

    //divide o texto usando regex para contar as palavras corretamente

    let typedWords = userTypedText.split(/\s+/).filter(function (word){
        return word !=="";
    }).length;

    let wpm = 0; //valor padrão?

    if(timeElapsed !== 0 && !isNaN(typedWords)){
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Resultados do Teste de Digitação:</h2>" +
                "<p>Palavras Digitadas: " + typedWords + "</p>" +
                "<p>Tempo Decorrido: " + timeElapsed.toFixed(2) + " segundos</p>" +
                "<p>Palavras Por Minuto (WPM): " + wpm + "</p>";
}

