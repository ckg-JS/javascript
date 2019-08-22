function doAction5(){
    let item = document.getElementById( "cCanvas");
    var pen = item.getContext( '2d');
    
    var posxs = new Array( 10, 30, 50, 70);
    var posys = new Array( 70, 50, 30, 10);
    
    pen.fillStyle ="red";
    // 
    //  次の命令をfor()を使って書きなおしなさい。
    //
   
    index=0;
    while(index<=3){
        pen.fillRect(posxs[index],posys[3-index],10,10);
        index++;
    }
    

}