function doAction(){
    let item = document.getElementById( "cCanvas");
    var pen = item.getContext( '2d');
    
    
    pen.fillStyle ="red";
    // 
    //  次の命令をfor()を使って書きなおしなさい。
    //
    pen.fillRect( 10,10,20,30);
    pen.fillRect( 30,20,20,30);
    pen.fillRect( 50,30,20,30);
    pen.fillRect( 70,40,20,30);
    pen.fillRect( 90,50,20,30);
    pen.fillRect( 110,60,20,30);
    pen.fillRect( 130,70,20,30);
    pen.fillRect( 150,80,20,30);

}