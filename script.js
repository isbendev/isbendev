var canvas2image=document.createElement(&#39;script&#39;);
canvas2image.setAttribute(&quot;type&quot;,&quot;text/javascript&quot;);
canvas2image.setAttribute(&quot;src&quot;, &quot;https://superal.github.io/canvas2image/canvas2image.js&quot;);
document.getElementsByTagName(&quot;head&quot;)[0].appendChild(canvas2image);

var html2canvas=document.createElement(&#39;script&#39;);
html2canvas.setAttribute(&quot;type&quot;,&quot;text/javascript&quot;);
html2canvas.setAttribute(&quot;src&quot;, &quot;https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js&quot;);
document.getElementsByTagName(&quot;head&quot;)[0].appendChild(html2canvas);

$(&quot;article&quot;).after(&quot;<b:if cond='data:blog.pageType == &quot;item&quot;'><div id='pin' style='height:900px; width: 600px; margin: auto; margin-top:30px;'><div style='height:600px; background-color: blue; width: 600px;'><img class='post-thumbnail' crossorigin='anonymous' expr:src='data:blog.postImageUrl' height='600px' id='img1' width='600px'/> </div><div style='height:260px; background-color: red; width: 600px; position: relative;'><div class='desc' style='margin: 0; position: absolute; top: 50%; -ms-transform: translateY(-50%); transform: translateY(-50%); text-align: center; left: 10%; right: 10%;'><data:blog.pageName/></div></div><div style='height:40px; background-color: red; width: 600px; text-align: center'><div class='copyright'><data:blog.homepageUrl/> &#9400;</div></div></div></b:if>&quot;);

  $(&#39;.desc&#39;).css(&#39;margin&#39;,&#39;auto&#39;);
  $(&#39;.desc&#39;).css(&#39;font-size&#39;,&#39;50px&#39;);
  $(&#39;.desc&#39;).css(&#39;font-family&#39;,&#39;fantasy&#39;);
  $(&#39;.desc&#39;).css(&#39;color&#39;,&#39;white&#39;);
  $(&#39;.copyright&#39;).css(&#39;font-size&#39;,&#39;20px&#39;);
  $(&#39;.copyright&#39;).css(&#39;font-family&#39;,&#39;fantasy&#39;);
  $(&#39;.copyright&#39;).css(&#39;color&#39;,&#39;white&#39;);

$( document ).ready(function() {
  html2canvas(document.querySelector(&#39;#pin&#39;), { logging: true, letterRendering: 1,  allowTaint: false, useCORS: true, 
    onrendered: function(canvas) {
      $(&#39;#pin&#39;).html(Canvas2Image.convertToJPEG(canvas, 600, 900));
    }
  });
});

