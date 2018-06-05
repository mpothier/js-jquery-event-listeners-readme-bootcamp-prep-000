function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
 $('img').on('click', function() {
    $('img').addClass("tasty")
  })
}

function pressIt() {
  $('input#typing').on('keydown', function(e) {
    if (e.which === 71) {
      alert("You have pressed the 'G' key.")
      return
    }
  })
}

function submitIt() {
  $('form').on('submit', function() {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});