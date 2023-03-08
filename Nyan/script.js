(function (window, $) {
  'use strict';

  $.fn.useSound = function (_event, _id) {
    var se = $(_id);
    this.on(_event, function(){
      se[0].currentTime = 0;
      se[0].play();
      return false;
    });
  };
  
})(this, this.jQuery);


//Execute
$('#btn').useSound('click', '#btnsound');
//Execute
$('#btn2').useSound('click', '#btnsound2');
//Execute
$('#btn3').useSound('click', '#btnsound3');
//Execute
$('#btn4').useSound('click', '#btnsound4');
//Execute
$('#btn5').useSound('click', '#btnsound5');
//Execute
$('#btn6').useSound('click', '#btnsound6');
