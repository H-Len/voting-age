$(document).ready(function(){
  var age = parseInt(prompt("How old are you?"));
  console.log(age);
  if (age < 18) {
    $(".young").show();
  } else if (age >= 18){
    $(".old").show();
  } else {
    alert("That's not a real age!");
  }

});
