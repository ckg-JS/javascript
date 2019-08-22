function doAction2(){
    let item = document.getElementById( "cCanvas");
    var pen = item.getContext( '2d');
    
    
    pen.fillStyle ="red";
    // 
    //  次の命令をfor()を使って書きなおしなさい。
    //
    for(x=10; x <= 600; x=x+20){
        pen.fillRect( x,10,10,10);
    }
    }