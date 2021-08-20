
<script>
  $( document ).ready(function() {
      var variantId = 6917049319609;
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
