$(function () {
  // 文字色変化ボタンを押すと文字の色が変わる
  $('#change-color').on("click", function (){
    $("#target").css("color", "red");
  });

  // 文字内容変化ボタンを押すとHello!に変わる
  $('#change-text').on("click", function (){
    $("#target").text("Hello!");
  });

  // 文字のフェードアウトボタンを押すと文字が非表示になる
  $("#fade-out").on("click", function () {
    $("#target").fadeOut();
  });

  // 文字のフェードインボタンを押すと文字が表示される
  $("#fade-in").on("click", function () {
    $("#target").fadeIn();
  });
});