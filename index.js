var up;    //空白ピース基準で1つ上のピースを記録
var down;  //空白ピース基準で1つ下のピースを記録
var left;  //空白ピース基準で1つ左のピースを記録
var right; //空白ピース基準で1つ右のピースを記録

//State 相当の値を準備
var peaces = [
  16, 4, 3, 10,
  7, 1, 2, 5,
  9, 13, 12, 8,
  15, 14, 11, 6,
];

//空白ピースを基準に、上下左右の計算する処理を追加
function calcAdjacentPeaces(){
  const empty = peaces[15];

  let temp_up = empty-4;
  let temp_down = empty+4;
  let temp_left = empty-1;
  let temp_right = empty+1;

  if(temp_up <1)temp_up = null;
  if(temp_down>16)temp_down = null;
  if(empty % 4===1)temp_left = null;
  if(empty % 4===0)temp_right = null;

  up = temp_up;
  down = temp_down;
  left = temp_left;
  right = temp_right;
}

//Component 相当の関数の準備
function Component(){
  for (let n = 1; n <= 16; n = n + 1) {
    const piece = document.querySelector('.pos-' + n);

   piece.style.order = peaces[n];
  }
}  

Component();
calcAdjacentPeaces();
function pieceClickHandler(event){
  //(1)event.target からピースの番号Nを特定する(文字になっているので数値で変換のする)
  const N = Number(event.target.innerHTML);

  if(peaces[N-1]===up)console.log('上にあるので、移動してok');
  if(peaces[N-1]===down)console.log('下にあるので、移動してok');
  if(peaces[N-1]===left)console.log('左にあるので、移動してok');
  if(peaces[N-1]===right)console.log('右にあるので、移動してok');
}

for (let n = 1; n <= 16; n = n + 1) {
    const piece = document.querySelector('.pos-' + n);
  
    // MEMO: 1 ～ 16 でランダムに数値を決めると、番号が被る場合がある
    piece.style.order = parseInt(Math.random() * 16) + 1;
  }

//ピースがクリックされたときに実行する処理（関数）
for (let n = 1; n <= 15; n = n + 1) {  
   function pieceClickHandler(event){
     console.log(n+'番ピースがクリックされました');
     console.log(event.target);
   }
   const piece = document.querySelector('.pos-'+n);

   piece.addEventListener('click',pieceClickHandler);
}  

