 // 添加个锤子的Dom
 $('.sence').append('<img id="hammer" src="./img/hammer1.png" alt="">');

 //搞个锤子的操作
 function hit() {
     $('#hammer').attr('src', "./img/hammer2.png")
 }

 function nohit() {
     $('#hammer').attr('src', "./img/hammer1.png")
 }

 function move(e) {
     let x = e.clientX - 620 + "px";
     let y = e.clientY - 170 + "px";
     $('#hammer').get(0).style.left = x;
     $('#hammer').get(0).style.top = y;
 }
 $('.sence').mousedown(hit).mouseup(nohit).mousemove(move);