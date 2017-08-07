//  FLIP ROTATE ANIMATION
var init = function() {
  var card = document.getElementById('card');
  document.getElementById('cvcNumbers').addEventListener( 'click', function(){
    card.classList.toggle('flipped');
  }, false);
};
window.addEventListener('DOMContentLoaded', init, false);

//  DEFAULT CHANGE
function replaceDefault() {
  var str = document.getElementById("cardInput").innerHTML;
  var res = str.replace("•••• •••• •••• ••••", " ");
  document.getElementById("cardInput").innerHTML = res;
}

//  1 CARD NUMBER INPUT
var inputTextValue;

$('#cardNumber').on('click', function() {
  window.onkeyup = keyup;
  function keyup(e) {
    inputTextValue = e.target.value;
     $('#cardInput').text(inputTextValue);
   }
});

$('#fullName').on('click', function() {
  window.onkeyup = keyup;
  function keyup(e) {
    inputTextValue = e.target.value;
     $('#nameInput').text(inputTextValue);
   }
});

$('#expiryDate').on('click', function() {
  window.onkeyup = keyup;
  function keyup(e) {
    inputTextValue = e.target.value;
     $('#expiryInput').text(inputTextValue);
   }
});

$('#cvcNumbers').on('click', function() {
  window.onkeyup = keyup;
  function keyup(e) {
    inputTextValue = e.target.value;
     $('#cvcInput').text(inputTextValue);
   }
});

//  MM/YY VALIDATION
document.getElementById('expiryDate').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{2})/, '$1/').trim();
});

//  FULL NAME VALIDATION
$(function() {
  $('#fullName').keyup(function() {
    this.value = this.value.toUpperCase();
  });
});

//  CVC VALIDATION
document.getElementById('cvcNumbers').addEventListener('input', function (e) {
  e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').trim();
});

//  CREDIT CARDS VALIDATION

var cards = new Array(16);
cards[0] = 4 || 5 || 3 || 6;
var elem = document.createElement("img");
elem.setAttribute("height", "50");
elem.setAttribute("width", "80");
elem.src = "img/othercardlogo.png";
document.getElementById("imagePlace").appendChild(elem);

function validateCreditCardNumber() {
  var ccNum  = document.getElementById("cardNumber").value;
  document.getElementById("cardInput").innerHTML = ccNum;
  var cards = ccNum;

  if (cards[0] == 4) {
      cards = ccNum;
      elem.src = 'img/visalogo.png';
      addSpace();
  } else if (cards[0] == 5) {
      elem.src = "img/mastercardlogo.png";
      addSpace();
  } else if (cards[0] == 3) {
      elem.src = "img/amexlogo.png";
      amexSpace();
  } else if (cards[0] == 6) {
      elem.src = "img/discoverlogo.png";
      addSpace();
  } else {
      elem.src = "img/othercardlogo.png";
      addSpace();
    }
}

document.getElementById('cardNumber').addEventListener('keyup', function () {
  validateCreditCardNumber(this.value);
});

//  4 NUMBERS SPACE VALIDATION

function addSpace(){
  document.getElementById('cardNumber').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
  });
}

//  AMEX VALIDATION

function amexSpace () {
  $('#cardNumber').on('keypress', function() {
    var amexTest = $(this).val().replace(/\b(\d{4})(\d{6})(\d{5})\b/, '$1 $2 $3');

    if (amexTest.match(/^3[47]\d{2}/)) {
      if (amexTest.length == 4) {
        amexTest += ' ';
        $('#cardNumber').val(amexTest);
      } else if (amexTest.length == 11) {
        amexTest += ' ';
        $('#cardNumber').val(amexTest);
      }
       else if (amexTest.length > 17) {
        val = $(this).val().substr(0, $(this).val().length - 1);
        $(this).val(val);
      }
    }
  });
}
