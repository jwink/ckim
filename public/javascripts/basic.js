
var $ = require('jquery');

$(".chris-input")[0].value = "default value";


$($("#chris-button")[0]).click(function() {
  console.log($(".chris-input")[0].value, $(".chris-input")[1].value);
  var chrisNumber = parseInt($(".chris-input")[0].value);
  if (chrisNumber > 4) {
    console.log("higher");
  } else {
    console.log("lower");
  }
});