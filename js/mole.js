 // 添加耗子的Dom
 for (let i = 0; i < 9; i++) {
     $('.sence').append(`<li id="li${i}"><img class="mole" id="mole${i}" src="./img/mouse1.png" alt=""></li>`);
 }

 // 耗子定
 var xArr = [142, 330, 529, 120, 335, 530, 110, 335, 555];
 var yArr = [257, 255, 262, 345, 345, 345, 445, 450, 450];

 function pos() {

     for (let i = 0; i < 9; i++) {
         $(`#li${i}`).get(0).style.left = xArr[i] + "px";
         $(`#li${i}`).get(0).style.top = yArr[i] - 102 + "px";
         $(`#mole${i}`).get(0).style.left = 0 + "px";
         $(`#mole${i}`).get(0).style.top = 102 + "px";
     };
 };
 pos();

 // 耗子动
 // 一次step，20；老鼠停留时长750；击中老鼠变身时长700；老鼠每次冒泡总时长1500； 
 var speedtime = [20, 750, 700, 1500];
 var flag = true;
 var mRandom = parseInt(Math.random() * 9);
 let z = []; //碰撞检测数组
 function act() {
     flag = true;
     mRandom = parseInt(Math.random() * 9);
     let end = 102; //老鼠起始高度
     let step = 10; //步长
     z[0] = xArr[mRandom]; //碰撞检测x最小值
     z[1] = xArr[mRandom] + 102; //碰撞检测x最大值
     z[2] = yArr[mRandom] - 102; //碰撞检测y最小值
     z[3] = yArr[mRandom]; //碰撞检测y最大值
     var oneMove = setInterval(ive, speedtime[0]); //一次冒泡计时器

     function ive() { //一次冒泡位置值变化、碰撞检测加改src、计分
         end -= step;
         if (end <= 0) {
             end = 0;
             clearInterval(oneMove);
             $(`#mole${mRandom}`).get(0).style.top = end + 'px';
             var newtime = setTimeout(function() {
                 $(`#mole${mRandom}`).get(0).style.top = 102 + 'px';
             }, speedtime[1]);
             return;
         };

         $(`#mole${mRandom}`).get(0).style.top = end + 'px'; //老鼠top改变
         //碰撞检测点击事件
         $('.sence').click(function(e) {
             z[4] = e.clientX - 620; //鼠标值x
             z[5] = e.clientY - 170; //鼠标值y

             //如果碰撞，就改变图片的src 然后清除计时器
             if (z[4] < z[1] && z[4] > z[0] && z[5] > z[2] && z[5] < z[3] && end <= 50 && flag == true) {
                 $(`#mole${mRandom}`).attr('src', './img/mouse2.png');
                 setTimeout(() => {
                     $(`.mole`).attr('src', './img/mouse1.png');
                 }, speedtime[2])
                 moleScore(); //计分
                 flag = false;
             }
         });
     }
 };