
    var fileName
  $('input[type="file"]').change(function(e){
    fileName = e.target.files[0].name;
 
    fileName = './Image/product/dog/' + fileName
    console.log(fileName)
    $('#output').attr('src',fileName)
});
    $('.add-product-btn').click(function(){
        var stt = document.getElementsByClassName('stt').length + 1

        var title = document.getElementById('Product-Name').value
        var price = parseFloat(document.getElementById('Product-Price').value).toLocaleString('vi-VN')+ 'VNĐ'
       
        addproduct(title,price,fileName,stt)
    })
    
    function addproduct(title,price,img_src,stt){
        var cartRow = document.createElement('tr')
        var checkeout = document.getElementById("Product-list");
    var row = `
    <th scope="row" class = 'stt'>${stt}</th>
    <td><img src="${img_src}" alt="""></td>
    <td>${title}</td>
    <td>${price}</td>
    <td><button class="btn btn-danger">Xóa</button></td>`
    cartRow.innerHTML = row
    checkeout.append(cartRow)
   }

  
$('.add-product').click(function(){
    $(".form-add-product").css('display','unset')
})
$('.Close').click(function(){
    $(".form-add-product").css('display','none')
})