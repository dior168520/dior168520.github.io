// 設定旋轉啟動

(function () {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  const display = document.querySelector('.display');

  let deg = 0;
  let zoneSize = 45;  // deg度數

  const symbolZones = {
    1:"恭喜抽中託付豬手機座!",
    2:"恭喜抽中託付豬文件夾!",
    3:"恭喜抽中託付豬手機座!",
    4:"恭喜抽中託付豬文件夾!",
    5:"恭喜抽中託付豬手機座!",
    6:"恭喜抽中託付豬文件夾!",
    7:"恭喜抽中託付豬手機座!",
    8:"恭喜抽中託付豬文件夾!"
  }

  const handleWin = (actualDeg) => {
    const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
    display.innerHTML = symbolZones[winningSymbolNr];
  }

  startButton.addEventListener('click', () => {
 //  重置显示
    display.innerHTML = "抽獎中..."
   
    startButton.style.pointerEvents = 'none'; // 旋轉期間禁用按鈕
    deg = Math.floor(2000 + Math.random() * 2000); // 計算 5000 到 10000 之間的新旋轉
    wheel.style.transition = 'all 5s ease-out';  // 旋轉的transition速度等
    wheel.style.transform = `rotate(${deg}deg)`;  // 將輪盤旋轉
    wheel.classList.add('blur');  // 適用於模糊
  });

  wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur'); // 取消模糊
    startButton.style.pointerEvents = 'auto'; // 旋轉結束時啟用按鈕
    wheel.style.transition = 'none';  // 需要將 transition 設置為 none 因為我們想立即旋轉
    const actualDeg = deg % 360;
    // 在 360 度的基礎上計算度數以獲得自然的真實旋轉
    // 重要，因為我們想從那個旋轉開始下一個旋轉
    // 使用模數獲取剩餘值
    wheel.style.transform =`rotate(${actualDeg}deg)`;  // 無需動畫即可立即設置真實旋轉

    handleWin(actualDeg);    // 計算機顯示贏得什麼獎品？
  });



})();




  var top_2 = document.getElementById("to-top");//获取图片元素
  var timer = null;
  top_2.onclick = function () { //点击图片时触发点击事件
      timer = setInterval(function () { //设置一个计时器
          var ct = document.documentElement.scrollTop || document.body.scrollTop; //获取距离顶部的距离
          ct -= 30;
          if (ct > 0) {//如果与顶部的距离大于零
              window.scrollTo(0, ct);//向上移动30px
          }
          else {//如果距离小于等于零
              window.scrollTo(0, 0);//移动到顶部
              clearInterval(timer);//清除计时器
          }
      }, 5);//隔5ms执行一次前面的function，展现一种平滑滑动效果
  }


// --------------------------------copysec--------------------------------

function copyText() {
  var input = document.getElementById("input");
  input.select(); // 選中文字
  document.execCommand("copy"); // 執行瀏覽器複製命令
  alert("複製成功");
}



// --------------------------------點擊後的彈跳視窗--------------------------------


// $(function () {
//   $('.pop-up').hide();
//   $('.pop-up').fadeIn(1000);

//   $('.close-button').click(function (e) {

//       $('.pop-up').fadeOut(700);
//       $('#overlay').removeClass('blur-in');
//       $('#overlay').addClass('blur-out');
//       e.stopPropagation();

//   });
// });
