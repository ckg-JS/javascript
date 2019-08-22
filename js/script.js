function doAction(){
    let item = document.getElementById( "cCanvas");
    var pen = item.getContext( '2d');
    
    
    pen.fillStyle ="red";
    // 
    //  次の命令をfor()を使って書きなおしなさい。
    //
    for(amrit=10;amrit<=150;amrit=amrit+20){
        pen.fillRect(amrit,10,10,10);
    }
    

}