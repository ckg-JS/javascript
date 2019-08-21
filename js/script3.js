function doAction3(){
    let item = document.getElementById( "cCanvas");
    var pen = item.getContext( '2d');
    
    var posxs = new Array( 10, 30, 50, 70);
    
    pen.fillStyle ="red";
    // 
    //  次の命令をfor()を使って書きなおしなさい。
    //
    pen.fillRect( posxs[0],10,10,10);
    pen.fillRect( posxs[1],10,10,10);
    pen.fillRect( posxs[2],10,10,10);
    pen.fillRect( posxs[3],10,10,10);
    

}