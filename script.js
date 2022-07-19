var dice = {
    sides: 6,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides) + 1;
      return randomNumber;
    }
  }
  
  //Prints dice roll to the page
  
  function printNumber(number,diceNum) {
    var dice = document.getElementById(diceNum);
    dice.innerHTML = number;
  }
  
  var button = document.getElementById('button');
  let diceNum = ['d4','d6','d8','d10','d12','d20']
  let result;

  button.onclick = function() {
    for (let i=0; i<diceNum.length; i++){
      result = dice.roll();
      printNumber(result,diceNum[i]);
    }
  };
  