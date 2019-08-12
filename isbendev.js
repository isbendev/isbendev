  $('.desc').css('margin','auto');
  $('.desc').css('font-size','50px');
  $('.desc').css('font-family','fantasy');
  $('.desc').css('color','white');
  $('.copyright').css('font-size','20px');
  $('.copyright').css('font-family','fantasy');
  $('.copyright').css('color','white');

$( document ).ready(function() {
  html2canvas(document.querySelector('#pin'), { logging: true, letterRendering: 1,  allowTaint: false, useCORS: true, 
    onrendered: function(canvas) {
      $('#pin').html(Canvas2Image.convertToJPEG(canvas, 600, 900));
    }
  });
});
