 // 得分
 var score = 0;

 function moleScore() {
     score += 5;
     $('#score1').html(score);
 };
 //倒计时
 var endDate = 30;

 function gameDate() {
     var times = setInterval(jian1, 1000)
     var move = setInterval(act, speedtime[3]);

     function jian1() {
         $('#endDate').html(endDate);
         if (endDate < 0) {
             endDate = 0;
             clearInterval(times);
             clearInterval(move);
             console.log(1);
             $('.gameover').css('display', 'block');
             $('.gameover p').html(`您的得分是  <span style= "font-size : 32px">${score}</span>  分`);
             score = 0;
             endDate = 30;
             $('#score1').html(score);
             $('#endDate').html(endDate);
             return;
         }
         endDate -= 1;
     }
 }