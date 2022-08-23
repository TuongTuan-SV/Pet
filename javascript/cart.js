


var sl = 0;
var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];

var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];

btn.onclick = function () {
 modal.style.display = "block";
}
close.onclick = function () {
 modal.style.display = "none";
}
close_footer.onclick = function () {
 modal.style.display = "none";
}
order.onclick = function () {
 alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
 if (event.target == modal) {
   modal.style.display = "none";
 }
}
 // xóa cart
var remove_cart = document.getElementsByClassName("btn-danger");
for (var i = 0; i < remove_cart.length; i++) {
var button = remove_cart[i]
button.addEventListener("click", function () {
var button_remove = event.target
button_remove.parentElement.parentElement.remove()
})

}
 // update cart 
function updatecart() {
var cart_item = document.getElementsByClassName("cart-items")[0];
var cart_rows = cart_item.getElementsByClassName("cart-row");
var total = 0;
for (var i = 0; i < cart_rows.length; i++) {
 var cart_row = cart_rows[i]
 var price_item = cart_row.getElementsByClassName("cart-price")[0].title
 var quantity_item = cart_row.getElementsByClassName("cart-quantity-input")[0]
 var quantity = quantity_item.value // lấy giá trị trong thẻ input.

 total = (total + (price_item * quantity))
}

document.getElementsByClassName("cart-total-price")[0].innerText = total.toLocaleString('vi-VN') + 'VNĐ'
}
 // thay đổi số lượng sản phẩm
var quantity_input = document.getElementsByClassName("cart-quantity-input");
for (var i = 0; i < quantity_input.length; i++) {
var input = quantity_input[i];
input.addEventListener("change", function (event) {
 var input = event.target
 if (isNaN(input.value) || input.value <= 0) {
   input.value = 1;
 }
 updatecart()
})
}
 // Thêm vào giỏ
var add_cart = document.getElementsByClassName("btn-cart");
for (var i = 0; i < add_cart.length; i++) {
var add = add_cart[i];
add.addEventListener("click", function (event) {
 sl+=1;
 document.getElementById('slsanpham').innerText = sl ;
 
 var button = event.target;
 var product = button.parentElement.parentElement;

 var quantity_input = product.parentElement.getElementsByClassName("cart-quantity-input")[0].value;
 var img = product.parentElement.getElementsByClassName("img-prd")[0].src
 var title = product.getElementsByClassName("content-product-h3")[0].innerText
 var price = product.getElementsByClassName("price")[0].innerText
 var real_price = product.getElementsByClassName('money')[0].title
 addItemToCart(title, price, img, quantity_input,real_price)
 // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal

 updatecart()
})
}

function addItemToCart(title, price, img, quantity_input,real_price) {
var cartRow = document.createElement('div')
cartRow.classList.add('cart-row')
cartRow.classList.add('checkout-sp')
var cartItems = document.getElementsByClassName('cart-items')[0]
var cart_title = cartItems.getElementsByClassName('cart-item-title')
//Nếu title của sản phẩm bằng với title mà bạn thêm vao giỏ hàng thì sẽ thông cho user.
for (var i = 0; i < cart_title.length; i++) {
 if (cart_title[i].innerText == title) {
    sl-=1;
    document.getElementById('slsanpham').innerText = sl ;
   alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
   return
 }
}

var cartRowContents = `
<div class="cart-item cart-column">
   <img class="cart-item-image" src="${img}" width="100" height="100">
   <span class="cart-item-title">${title}</span>
</div>
<span class="cart-price cart-column tiensanpham" title="${real_price}">${price}</span>
<div class="cart-quantity cart-column">
   <input class="cart-quantity-input soluongsanpham" type="number" value='${quantity_input}'>
   <button class="btn btn-danger" id="cart-button" type="button">Xóa</button>
</div>`
cartRow.innerHTML = cartRowContents
cartItems.append(cartRow)
cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function () {
  sl-=1;
 document.getElementById('slsanpham').innerText = sl;
 var button_remove = event.target
 button_remove.parentElement.parentElement.remove()
 updatecart()
})
cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function (event) {
 var input = event.target
 if (isNaN(input.value) || input.value <= 0) {
   input.value = 1;
 }
 updatecart()
})
}


// menu
$('.stars a').click(function (e) {

  if($(this).hasClass('checked')){
    $(this).removeClass('checked');
  }
  else{
    $(this).addClass('checked');
  }
})
$('#myTabs a[href="#home"]').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('.ctsp').on('click',function(){
  $(".menu-tabs").removeClass("active ");
  $('html,body').scrollTop(0); //scroll to top
})

$('.menu-tabs').on('click',function(){
  $('html,body').scrollTop(0); //scrollto top
  $('#ctsp-quantity').val('1'); 
  $('.star').removeClass('selected')
  if(!$('.sp-cho').hasClass("active")){
      $('.CTSP li').removeClass("active");
      $('.my-tapane').removeClass("active in");
      $('.sp-cho').addClass("active")
      $('#Dog-product').addClass("active in");
  }
  if(!$('.mota').hasClass('active')){
    $('#danhgia').removeClass('active')
    $('#mota').addClass('active in')
    $('.danhgia').removeClass('active')
    $('.mota').addClass('active')
  }
})
$('.sidebar-product').on('click',function(){
  $('html,body').scrollTop(0); //scrollto top

})
$(document).ready(function(){
  $('#sidebarmenu').css("display","none")
  $(document).mousemove(function(){
    if($(".carousel:hover").length != 0){
       $(".carousel-control").addClass('show')        
   } else{
    $(".carousel-control").removeClass('show')
   
   }
});
})

$(document).on("click",function(){
  if($('#admin').hasClass('active')){
    $('#sidebarmenu').css("display","unset")
  }
  else{
    $('#sidebarmenu').css("display","none")
  }
})


// ctsp

$(".ctsp").click(function(){
  var price = this.getElementsByClassName('money')[0].innerText;
  var real_price = this.getElementsByClassName('money')[0].title
  var inner = this.getElementsByClassName("motasanpham")[0].innerHTML;
  var img = this.getElementsByClassName('img-prd')[0].src;
  var title = this.getElementsByClassName('content-product-h3')[0].innerText;
   $("#ctsp-img").attr("src",img)
   $('#mota').html(inner) 
   $('#ctsp-money').html(price)
   $('#ctsp-money').attr('title',real_price)
   $('#ctsp-title').html(title)
})