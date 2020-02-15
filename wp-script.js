document.addEventListener("DOMContentLoaded", function(event){

var style=document.createElement("link");
style.setAttribute("rel", "stylesheet");
style.setAttribute("type", "text/css");
style.setAttribute("href", "https://isbendev.github.io/isbendev/wp-style.css");
document.getElementsByTagName("head")[0].appendChild(style);
    
$('.vce-related-box').prepend("<div class='pin'><div class='pinimg'><img class='post-thumbnail pinimg1' crossorigin='anonymous'/></div><div class='desc'><div class='desctxt'></div></div><div class='copyright'><div class='copyrighttxt'></div></div></div>");
$('.pinimg1').attr('src',$('.img-url').text());
$('.desctxt').text($('.article-title').text());
$('.copyrighttxt').text($('.site-url').text());

html2canvas(document.querySelector('.pin'), { logging: true, letterRendering: 1,  allowTaint: false, useCORS: true, 
onrendered: function(canvas) {
    $('.pin').html(Canvas2Image.convertToJPEG(canvas, 600, 900));
    }
});
  
});
