alert("ll");
var canvas2image=document.createElement('script');
canvas2image.setAttribute("type","text/javascript");
canvas2image.setAttribute("src", "https://superal.github.io/canvas2image/canvas2image.js");
document.getElementsByTagName("head")[0].appendChild(canvas2image);

var html2canvas=document.createElement('script');
html2canvas.setAttribute("type","text/javascript");
html2canvas.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js");
document.getElementsByTagName("head")[0].appendChild(html2canvas);

$("article").after("<b:if cond='data:blog.pageType == "item"'><div id='pin' style='height:900px; width: 600px; margin: auto; margin-top:30px;'><div style='height:600px; background-color: blue; width: 600px;'><img class='post-thumbnail' crossorigin='anonymous' expr:src='data:blog.postImageUrl' height='600px' id='img1' width='600px'/> </div><div style='height:260px; background-color: red; width: 600px; position: relative;'><div class='desc' style='margin: 0; position: absolute; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); text-align: center; left: 10%; right: 10%;'><data:blog.pageName/></div></div><div style='height:40px; background-color: red; width: 600px; text-align: center'><div class='copyright'><data:blog.homepageUrl/> &#9400;</div></div></div></b:if>");

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
