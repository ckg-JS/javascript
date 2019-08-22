function doAction3(){
    let item = document.getElementById( "cCanvas");
    var pen = item.getContext( '2d');
    
    var posxs = new Array( 10, 30, 50, 70);
    
    pen.fillStyle ="red";
    // 
    //  次の命令をfor()を使って書きなおしなさい。
    //
    for(index=0;index<=3;index++){
        pen.fillRect(posxs[index],posys[index],10,10,10);
    }
    pen.fillRect(posxs[0],posys[0],10,10);
    pen.fillRect(posxs[1],posys[1],10,10);
    pen.fillRect(posxs[2],posys[2],10,10);
    pen.fillRect(posxs[3],posys[3],10,10);

   
    

}