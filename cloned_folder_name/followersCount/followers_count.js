let count = 0; // Initialize count to 0
function increaseCount(){
    count++ //incremente the contage in one
    displayCount();
    checkCountValue();
};

function displayCount(){
    document.getElementById('countDisplay').innerText = count;
}; //exibe a contagem no h

function checkCountValue() {
    if (count === 10) {
      alert("Seu post no Instagram ganhou 10 seguidores! Parabéns!");
    } else if (count === 20) {
      alert("Seu post no Instagram ganhou 20 seguidores! Continue assim!");
    }
  }

  function resetCountValue(){
    let reset = 0;
    document.getElementById('countDisplay').innerText = reset
    alert("A contagem de seguidores foi redefinida")
  }
