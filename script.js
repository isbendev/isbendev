var style=document.createElement("link");
style.setAttribute("rel", "stylesheet");
style.setAttribute("type", "text/css");
style.setAttribute("href", "https://isbendev.github.io/isbendev/style.css");
document.getElementsByTagName("head")[0].appendChild(style);

var canvas2image=document.createElement('script');
canvas2image.setAttribute("type","text/javascript");
canvas2image.setAttribute("src", "https://cdn.jsdelivr.net/npm/canvas2image@1.0.5/canvas2image.min.js");
document.getElementsByTagName("head")[0].appendChild(canvas2image);

var html2canvas=document.createElement('script');
html2canvas.setAttribute("type","text/javascript");
html2canvas.setAttribute("src", "https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.3/dist/html2canvas.min.js");
document.getElementsByTagName("head")[0].appendChild(html2canvas);

document.addEventListener('DOMContentLoaded', function(){
  html2canvas(document.querySelector('.pin'), { logging: true, letterRendering: 1,  allowTaint: false, useCORS: true, 
    onrendered: function(canvas) {
      $('.pin').html(Canvas2Image.convertToJPEG(canvas, 600, 900));
    }
  });
}, false);
