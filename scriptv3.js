$( document ).ready(function() {  
  
$('.post').after("<div class='pin' id='pin'><div class='pinimg'><img class='post-thumbnail pinimg1' crossorigin='anonymous'/></div><div class='desc'><div class='desctxt'></div></div><div class='copyright'><div class='copyrighttxt'></div></div></div>");
$('.pinimg1').attr('src',$('.img-url').text());
$('.desctxt').text($('.article-title').text());
$('.copyrighttxt').text($('.site-url').text());
  
html2canvas(document.querySelector('.pin'), { logging: true, letterRendering: 1,  allowTaint: false, useCORS: true, 
  onrendered: function(canvas) {
    $('.pin').html(Canvas2Image.convertToJPEG(canvas, 600, 900));
    //Canvas2Image.saveAsJPEG(canvas, 600, 600);
    //$('.pin').after("<a class='pin-art' href='http://pinterest.com/pin/create/button/?url=" + window.location.href + "&amp;media=" + document.getElementById('pin').getElementsByTagName('img')[0].src + "&amp;description=h' onclick=\"window.open(this.href, 'windowName', 'width=600, height=400, left=24, top=24, scrollbars, resizable'); return false;\" rel='nofollow' target='_blank'><i class='fa fa-pinterest'/></a>");
  }
  });
  
 });
