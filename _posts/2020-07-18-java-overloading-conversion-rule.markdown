---
layout: post
title:  "Java overloading conversion rule."
date:   2020-07-18 22:40:42 +0100
categories: java
content: "Java overloading conversion rule."
---

<p class="post-content">
Being a Java programmer, It is important to build a strong basic foundation. I would like to share something 
about Java overloading conversion feature. Overloading feature allows a method to have same name 
but have different argument. There are few rules that we need to be aware about overloading.
Simple rule about over loading is, to have same method name and return type (method signature) but different argument or argument list.
It is also important to know the Java overloading conversion rule known as <b>"Widening over boxing"</b>.
 </p> 
 <p class="post-content">
 Simple Example: 
 <pre><code class="java"> public class Test {

      public static void main(String[] args) {
         print(5);
      }
      
      public static void print(Integer arg) {
        System.out.println("Integer "+arg);
      } 
    
      public static void print(float arg) {
        System.out.println("float "+arg);
      } 
 }</code></pre>
<br> Output
<pre><code class="java"> float 5.0 </code></pre>
<div id="disqus_thread m-5"></div>
<script>
/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = "https://thapabishal.github.io";  
this.page.identifier = "category/java/Java-overloading-conversion-rule"; /
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://thapabishal.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
                   


<!--
<div class="reference">
More more : <a href="https://www.i-programmer.info/news/80/10791.html">i-programmer</a>   
</div>

 <span class="file-name">Main.java</span>
 <pre><code class="java">
    class Simple{  
        public static void main(String args[]){  
            System.out.println("Hello Java");  
        }  
    } 
  </code></pre> -->


