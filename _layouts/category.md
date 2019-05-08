{% include header.html %}
{% include nav.html %}



<!-- Page Content Holder -->
<div class="container">
<div id="main">
    <div id="content">
        <h1>Tags</h1>


<div class="blog list">
    <h1>Filed Under <small>#{{ page.tag }}</small></h1>

    {% for post in site.categories[page.tag] %}
        
    {% endfor %}
</div>

</div>
</div>
</div>
{% include footer.html %}


