
var jquery=document.createElement('script');
jquery.setAttribute("type","text/javascript");
jquery.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js");
document.getElementsByTagName("head")[0].appendChild(jquery); 

var style=document.createElement("link");
style.setAttribute("rel", "stylesheet");
style.setAttribute("type", "text/css");
style.setAttribute("href", "https://isbendev.github.io/isbendev/wp-style.css");
document.getElementsByTagName("head")[0].appendChild(style);

var html2canvas=document.createElement('script');
html2canvas.setAttribute("type","text/javascript");
html2canvas.setAttribute("src", "https://html2canvas.hertzen.com/dist/html2canvas.min.js");
document.getElementsByTagName("head")[0].appendChild(html2canvas); 

var canvas2image=document.createElement('script');
canvas2image.setAttribute("type","text/javascript");
canvas2image.setAttribute("src", "https://cdn.jsdelivr.net/npm/canvas2image@1.0.5/canvas2image.min.js");
document.getElementsByTagName("head")[0].appendChild(canvas2image);

document.addEventListener("DOMContentLoaded", function(event){

$('.vce-related-box').prepend("<div class='pin'><div class='pinimg'><img class='post-thumbnail pinimg1' crossorigin='anonymous'/></div><div class='desc'><div class='desctxt'></div></div><div class='copyright'><div class='copyrighttxt'></div></div></div>");
$('.pinimg1').attr('src',$('.img-url').text());
$('.desctxt').text($('.article-title').text());
$('.copyrighttxt').text($('.site-url').text());

    
html2canvas(document.querySelector(".pin")).then(canvas => {
    document.body.appendChild(canvas)
});
 
  /*
  html2canvas(document.querySelector('.pin'), { logging: true, letterRendering: 1,  allowTaint: false, useCORS: true, 
  onrendered: function(canvas) {
    $('.pin').html(Canvas2Image.convertToJPEG(canvas, 600, 900)); 
    }
  });
  */
});
