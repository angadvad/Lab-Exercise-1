let dice = {
    roll: function (sides) {
      let randomNumber = Math.floor(Math.random() * sides) + 1;
      return randomNumber;
    }
  }
  
  //Prints dice roll to the page
  
  function printNumber(number,diceNum) {
    var dice = document.getElementById(diceNum);
    dice.innerHTML = number;
  }
  
  var button = document.getElementById('button');
  let diceStr = ['d4','d6','d8','d10','d12','d20']
  let diceNum = [4,6,8,10,12,20];
  let result;

  button.onclick = function() {
    for (let i=0; i<diceStr.length; i++){
      result = dice.roll(diceNum[i]);
      printNumber(result,diceStr[i]);
    }
  };
  