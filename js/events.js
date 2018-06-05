function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  alert("hey you!")
  $('img').on('load', function() {
    $('img').addClass("tasty")
  })
}

function pressIt() {
  $('input#typing').on('keydown', function(e) {
    if (e.key === "G" || e.key === "g") {
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
//frameIt();
pressIt();
submitIt();

});
frameIt();