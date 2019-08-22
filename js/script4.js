function doAction4(){
    let item = document.getElementById( "cCanvas");
    var pen = item.getContext( '2d');
    
    var posxs = new Array( 10, 30, 50, 70);
    var posys = new Array( 70, 50, 30, 10);
    
    pen.fillStyle ="red";
    // 
    //  次の命令をfor()を使って書きなおしなさい。
    //
    for(y=0; y<=3; y++){
    pen.fillRect( posxs[y],posys[y],10,10);
    }
    

}