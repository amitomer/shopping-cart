var ShoppingCart = function () {

  // an array with all of our cart items
  var cart = [];
  
  var updateCart = function () {
    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.

    $(".cart-list").empty();
    let source = $('#items-template').html();
    let template = Handlebars.compile(source);
    let newHTML = template({cart});
    $('.cart-list').append(newHTML);
    
    sumOfItems();
   
  }

  function sumOfItems (){
    let sum=0;
    for (let i=0;i<cart.length;i++){
      sum+= cart[i].price;
    }
    $('.total').text(sum);
  } 


  var addItem = function (item, price) {
    // TODO: Write this function. Remember this function has nothing to do with display. 
    // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
    let cartItem = {
      name: item,
      price: price
    }
    cart.push(cartItem);
  }

  var clearCart = function () {
    // TODO: Write a function that clears the cart ;-)
    cart=[];
    $(".cart-list").empty();
    sumOfItems ();
  }

  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart
  }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
  $(".shopping-cart").toggle();
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  let item = $(this).closest('.buybox').closest('.item');
  let itemName = item.data().name;
  let itemPrice = item.data().price;
  app.addItem(itemName, itemPrice);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});