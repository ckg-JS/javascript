function doAction2(){
    let item = document.getElementById( "cCanvas");
    var pen = item.getContext( '2d');
    
    
    pen.fillStyle ="red";
    // 
    //  次の命令をfor()を使って書きなおしなさい。
    //
    pen.fillRect( 10,10,10,10);
    pen.fillRect( 30,10,10,10);
    pen.fillRect( 50,10,10,10);
    pen.fillRect( 70,10,10,10);
    pen.fillRect( 90,10,10,10);
    pen.fillRect( 110,10,10,10);
    pen.fillRect( 130,10,10,10);


}