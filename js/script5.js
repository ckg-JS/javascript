function doAction5(){
    let item = document.getElementById( "cCanvas");
    var pen = item.getContext( '2d');
    
    var posxs = new Array( 10, 30, 50, 70);
    var posys = new Array( 70, 50, 30, 10);
    
    pen.fillStyle ="red";
    // 
    //  次の命令をfor()を使って書きなおしなさい。
    //
    for(z=0; z<=3; z++){
    pen.fillRect( posxs[z],posys[3-z],10,10);
    }
    }