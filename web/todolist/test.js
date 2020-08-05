var date = new Date();
var peopleHeight = document.querySelector("#peopleHeight");
var peopleWeight = document.querySelector("#peopleWeight");
var calculatorBMI = document.querySelector("#calculatorBMI");
var listview = document.querySelector(".grid-listView");
var data = JSON.parse(localStorage.getItem("listData")) || [];

// 監聽事件與更新
calculatorBMI.addEventListener("click", BMIfunc, false);
listview.addEventListener("click", deleteFunc, false);
updateList(data);

// 判斷BMI的數值
function BMIfunc(e) {
  // BMI = 公斤/身高平方
  var hei = parseInt(peopleHeight.value);
  var wei = parseInt(peopleWeight.value);
  var bmi = (wei / Math.pow(hei * 0.01, 2)).toFixed(2);
  var len = 0;
  if (bmi < 18.5) {
    addlist(wei, hei, bmi, "過輕", "thin");
  } else if (bmi >= 18.5 && bmi < 22) {
    addlist(wei, hei, bmi, "一般", "common");
  } else if (bmi >= 23 && bmi < 25) {
    addlist(wei, hei, bmi, "一般", "common");
  } else if (bmi >= 25 && bmi < 31) {
    addlist(wei, hei, bmi, "過重", "fatA");
  } else if (bmi >= 31 && bmi < 36) {
    addlist(wei, hei, bmi, "輕度肥胖", "fatAA");
  } else if (bmi >= 36 && bmi < 41) {
    addlist(wei, hei, bmi, "中度肥胖", "fatAAA");
  } else if (bmi >= 41 && bmi < 51) {
    addlist(wei, hei, bmi, "重度肥胖", "fatAAAA");
  } else {
    console.log("錯誤");
  }
}

// 資料回傳DOM
function addlist(w, h, bmi, text, color) {
  var Year = date.getFullYear();
  var Month = date.getMonth() + 1;
  var Day = date.getDate();
  var str = `<li class="` + color + `">
    <div class="grid-item">`+ text + `</div>
    <div class="grid-item"><em class="emi">BMI</em><span class="emiNum">`+ bmi + `</span></div>
    <div class="grid-item"><em class="weight">weight</em><span class="weightNum">`+ w + `</span>kg</div>
    <div class="grid-item"><em class="height">height</em><span class="heightNum">`+ h + `</span>cm</div>
    <div class="grid-item"><em class="date">`+ Year + `/` + Month + `/` + Day + `</em></div></li>`;

  listview.innerHTML += str;
  var todo = {
    content: str
  };
  data.push(todo);
  localStorage.setItem("listData", JSON.stringify(data));
}

// 將localstorage資料帶入DOM
function updateList(items) {
  str = "";
  var len = items.length;
  for (var i = 0; len > i; i++) {
    str += "<li class='#'><span>" + items[i].content + "</span><a data-index='" + i + "' href='#' class='btn btn-close'>刪除</a></li>";

  }
  listview.innerHTML = str;
}

// 刪除事件
function deleteFunc(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'A') { return };
  var index = e.target.dataset.index;
  data.splice(index, 1);
  localStorage.setItem('listData', JSON.stringify(data));
  updateList(data)
}