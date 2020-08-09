

function fnOder() {

    var selName , txtQty ,divshow , qty ,price ,total ,imgName ;
    selName = document.getElementById('selName');
    txtQty = document.getElementById('txtQty');
    divshow = document.getElementById('divshow');
  
    qty = txtQty.value;
    price = selName.value;
    total = qty * price;

    imgName = selName.options[selName.selectedIndex].text + ".jpg";
    divshow.innerHTML = "<p>單價:" + price + '</p>' + '<p>總共:' + total + '</p>' + "<img src='images/"  +imgName + "' width='200'>"


}

