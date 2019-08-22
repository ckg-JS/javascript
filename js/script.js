function doAction(){
    let item = document.getElementById( "cCanvas");
    var pen = item.getContext( '2d');
    
    
    pen.fillStyle ="red";
    // 
    //  次の命令をfor()を使って書きなおしなさい。
    //
    for(tori=10;tori<=150;tori=tori+20){
        pen.fillRect(tori,10,10,10);
    }
    
    

}