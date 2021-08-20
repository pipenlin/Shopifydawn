<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
{% assign found_title = false %}
{% for item in checkout.line_items %}
  {% if item.variant.id == 6917049319609 %}
    {% assign found_title = true %}
  {% endif %}
{% endfor %}

{% if checkout.subtotal_price >= 10 %}
<script>
  $( document ).ready(function() {
      var variantId = 6917049319609;
      console.log('variantId');
      jQuery.post('/cart/add.js', {
        quantity: 1,
        id: variantId
      });
      setTimeout( 
        function() {
          window.location.reload(true);
        }, 1000);
  });
</script>
{% endif %}