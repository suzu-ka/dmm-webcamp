let username;
let userresult;

username = prompt("お名前を教えて下さい。"); /* 入力フォーム */
if (username == "") {
    username = "名無し";
  } /* 名前が未入力の場合、名無しと表示 */
document.getElementById("name").innerHTML = username; /* 入力内容を画面に表示 */

let rand = Math.floor( Math.random() * 5) ; /* 0～4の数字をランダムに取得 */
if (rand == 0) {
    userresult = "大吉";
  } /* 数字が0の場合、大吉 */
if (rand == 1) {
    userresult = "中吉";
  }
if (rand == 2) {
    userresult = "小吉";
  }
if (rand == 3) {
    userresult = "吉";
  }
if (rand == 4) {
    userresult = "凶";
  }
document.getElementById("result").innerHTML = userresult; /* 結果を画面に表示 */