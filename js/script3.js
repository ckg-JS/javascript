function doAction3(){
    let item = document.getElementById( "cCanvas");
    var pen = item.getContext( '2d');
    
    
    pen.fillStyle ="red";

    pen.fillRect( 10,10,10,10);
    pen.fillRect( 30,10,10,10);
    pen.fillRect( 50,10,10,10);
    

}