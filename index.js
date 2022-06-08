for (let n = 1; n <= 16; n = n + 1) {
    const piece = document.querySelector('.pos-' + n);
  
    // MEMO: 1 ～ 16 でランダムに数値を決めると、番号が被る場合がある
    piece.style.order = parseInt(Math.random() * 16) + 1;
  }

//ピースがクリックされたときに実行する処理（関数）
for (let n = 1; n <= 15; n = n + 1) {  
   function pieceClickHandler(event){
     console.log(n+'番ピースがクリックされました');
     console.log(event,target);
   }
   const piece = document.querySelector('.pos-'+n);

   piece.addEventListener('click',pieceClickHandler);
}  