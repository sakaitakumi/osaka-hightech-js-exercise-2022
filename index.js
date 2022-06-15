//State 相当の値を準備
var peaces = [
  6, 4, 3, 10,
  7, 1, 2, 5,
  9, 13, 12, 8,
  15, 14, 11, 16,
];

//Component 相当の関数の準備
function Component(){
  for (let n = 1; n <= 16; n = n + 1) {
    const piece = document.querySelector('.pos-' + n);

   piece.style.order = peaces[n];
  }
}  

Component();

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

