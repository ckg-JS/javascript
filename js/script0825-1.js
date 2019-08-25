function btnAction001_1(){
    //  テキストボックスから数字をとりだす
    let item = document.getElementById( "txtNum");
    let text = item.value;
    alert( text);

    //  キャンバスからペンを作る
    let canvas = document.getElementById( "cCanvas");
    alert( "getElementById() is ok");
    let pen = canvas.getContext( "2d");
    alert( "getContent() is ok.");

    //  ペンの色を設定する
    pen.fillStyle = "black";
    alert( pen.fillStyle);

    //  テキストボックスから取り出した文字をみて、二つに分ける
    if( text == "1"){
        drawLineDownRight( pen);
    }else{
        drawLineDownLeft( pen);
    }
/*    
*/
}

function drawLineDownRight(  pen ){
    let MAX_W = 600;
    for ( let x = 0; x <= MAX_W ; x++){
        pen.fillRect( x, x, 1, 1    );
    }
}

function drawLineDownLeft( pen){
    let MAX_W = 600;
    let MAX_H = 400;
    for ( let x = 0; x <= MAX_W ; x++){
        pen.fillRect( x, MAX_H - x, 1, 1    );

    }

}