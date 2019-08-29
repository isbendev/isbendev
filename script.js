if (window.location.href.indexOf('m=1') == -1 ){
document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);
window.addEventListener("load", pageFullyLoaded, false);

function theDomHasLoaded(e) {
  
var style=document.createElement("link");
style.setAttribute("rel", "stylesheet");
style.setAttribute("type", "text/css");
style.setAttribute("href", "https://isbendev.github.io/isbendev/style.css");
document.getElementsByTagName("head")[0].appendChild(style);

$('article').after("<div class='pin'><div class='pinimg'><img class='post-thumbnail pinimg1' crossorigin='anonymous'/></div><div class='desc'><div class='desctxt'></div></div><div class='copyright'><div class='copyrighttxt'></div></div></div>");
$('.pinimg1').attr('src',$('.img-url').text());
$('.desctxt').text($('.article-title').text());
$('.copyrighttxt').text($('.site-url').text());
  
var canvas2image=document.createElement('script');
canvas2image.setAttribute("type","text/javascript");
canvas2image.setAttribute("src", "https://cdn.jsdelivr.net/npm/canvas2image@1.0.5/canvas2image.min.js");
document.getElementsByTagName("head")[0].appendChild(canvas2image);

var html2canvas=document.createElement('script');
html2canvas.setAttribute("type","text/javascript");
html2canvas.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js");
document.getElementsByTagName("head")[0].appendChild(html2canvas);
  
}

function pageFullyLoaded(e) {
    html2canvas(document.querySelector('.pin'), { logging: true, letterRendering: 1,  allowTaint: false, useCORS: true, 
  onrendered: function(canvas) {
    $('.pin').html(Canvas2Image.convertToJPEG(canvas, 600, 900));
    $('.pin').after("<a class='pin-art' expr:href='http://pinterest.com/pin/create/button/?url=" + window.location.href + "&amp;media=https://2.bp.blogspot.com/-QWOAFEhHN-I/XUnCIlTUOII/AAAAAAAAAGA/7ynHZSFscIgl9eJcV5lvHNRy2A83N3eiQCK4BGAYYCw/s400/1.jpg&amp;description=https://2.bp.blogspot.com/-QWOAFEhHN-I/XUnCIlTUOII/AAAAAAAAAGA/7ynHZSFscIgl9eJcV5lvHNRy2A83N3eiQCK4BGAYYCw/s400/1.jpg' onclick=\"window.open(this.href, 'windowName', 'width=600, height=400, left=24, top=24, scrollbars, resizable'); return false;\" rel='nofollow' target='_blank'><i class='fa fa-pinterest'/></a>");
  }
  });
}
  
}

