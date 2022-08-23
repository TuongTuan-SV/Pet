
var order = document.getElementsByClassName("order")[0];
// qua trang thanh toan khi nhan nut thanh toan
    order.onclick = function () {
    
    var cart = document.getElementsByClassName("checkout-sp");
    
    var total_all = 0;
    var soluong = document.getElementById('slsanpham').innerText;
    $("#checkout-badge")[0].innerText = soluong;
    for (var i = 0; i < cart.length; i++) {
     var add_total_each = 0;
     // lay so luong san pham
     var  add_quantity_input =  cart[i].getElementsByClassName("soluongsanpham")[0].value;
     // lay ten san  pham
     var  add_title =  cart[i].getElementsByClassName("cart-item-title")[0].innerText
     // lay gia san pham
     var  add_price = cart[i].getElementsByClassName("tiensanpham")[0].innerText
     // lay gia thuc te cua san pham
     var  add_price_item = cart[i].getElementsByClassName("tiensanpham")[0].title
   
     add_total_each =  add_total_each +  ( add_price_item *  add_quantity_input);
     total_all = total_all +  add_total_each;
     addsanpham(add_title, add_price, add_quantity_input,add_total_each)
    }
    $('.total-all').text( total_all.toLocaleString('vi-VN')+ 'VNĐ')
   }

   // them san pham
   function addsanpham(add_title,add_price,add_quantity_input,add_total_each){
    var cartRow = document.createElement('div')
    add_total_each = add_total_each.toLocaleString('vi-VN') + 'VNĐ'
    var checkeout = document.getElementById("ds-sanpham");
    var title =  checkeout.getElementsByClassName("checkout-title");
    for (var i = 0; i < title.length; i++) {
        if (title[i].innerText == add_title) {
           var inner_checkout = document.getElementsByClassName('row-sanpham')[i];
           inner_checkout.getElementsByClassName('checkout-money')[0].innerText = add_price;
           inner_checkout.getElementsByClassName('checkout-quantity')[0].innerText = add_quantity_input;
           inner_checkout.getElementsByClassName('checkout-totalmoney')[0].innerText = add_total_each;
            return
        }
       }
    var row = `
    <li class="list-group-item d-flex justify-content-between lh-condensed row-sanpham">
            <div>
                <h6 class="my-0 checkout-title">${add_title}</h6>
                <small class="text-muted checkout-moneyxquantiy"><span class = 'checkout-money'>${add_price}</span> x <span class = 'checkout-quantity'>${add_quantity_input}</span></small>
            </div>
            <span class="text-muted checkout-totalmoney ">${add_total_each}</span>
        </li>`
    cartRow.innerHTML = row
    checkeout.append(cartRow)
   }

   function update_checkout() {
    var checkeout = document.getElementById("ds-sanpham")[0];
    var cart_rows = checkeout.getElementsByClassName("row-sanpham");
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


    

