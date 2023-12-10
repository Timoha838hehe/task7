function checkAnswer() {
  var selectedOption = document.querySelector('input[name="customRadio"]:checked');

  if (selectedOption) {
    var isCorrect = selectedOption.id === "radio1"; 
    highlightAnswer(selectedOption, isCorrect);
  } else {
    alert("Будь ласка, виберіть відповідь.");
  }
}

function highlightAnswer(selectedOption, isCorrect) {
  var button = document.querySelector('button');
  
  if (isCorrect) {
    selectedOption.nextElementSibling.style.color = "#00FF00"; 
    button.style.background = "#00FF00"; 
  } else {
    selectedOption.nextElementSibling.style.color = "#FF0000"; 
    button.style.background = "#FF0000"; 
  }
}

function resetSelection() {
  var radioButtons = document.querySelectorAll('input[name="customRadio"]');
  radioButtons.forEach(function(button) {
    button.checked = false;
    button.nextElementSibling.style.color = "#000";
  });
  var buttons = document.querySelectorAll('button');
  buttons.forEach(function(button) {
    button.style.background = "#FFA500"; 
  });
}

