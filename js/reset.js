function clearWindow(){
    var canvas = document.getElementById( "cCanvas");
    var pen = canvas.getContext( '2d');
    pen.fillStyle="white";
    pen.fillRect( 1, 1, 599, 399);
    
}