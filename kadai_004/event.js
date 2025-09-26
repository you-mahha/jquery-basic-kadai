$(window).on('load', () => {
  // HTMLドキュメントの読み込みが完了したとき
  console.log('loadイベントが発生しました')
});

$(window).on('scroll', () => {
  // 画面をスクロールされた場合
  console.log('scrollイベントが発生しました')
});