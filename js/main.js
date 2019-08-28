  //开始  gamestart gameover
  $('.gamestart button').click(sta);

  function sta() {
      $('.gamestart').get(0).style.display = 'none';
      $('.gameover').get(0).style.display = 'none';
      $('.div2').css('display', 'block');
      let i = 3;
      $('.div2').html(i);
      $('.div2').css('animation', " move 1s cubic-bezier(0.755, 0.05, 0.855, 0.06) 4");

      function move() {
          i--;
          $('.div2').html(i);

          switch (i) {
              case -1:
                  $('.div2').css('display', 'none');
                  clearInterval(startAni);
                  gameDate();
                  i = 3;
                  break;
              case 1:
                  $('.div2').html('ready');
                  break;
              case 0:
                  $('.div2').html('go!');
                  break;
          }
      }
      var startAni = setInterval(move, 1000);
  }
  // });
  $('.over1').click(function() {
      $('.gameover').css('display', 'none');
      $('.gamestart').css('display', 'block');
  });
  $('.over2').click(sta);