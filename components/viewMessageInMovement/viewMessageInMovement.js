var timed = 0;
var scrollGo = false;
var delay=100;
var space=100;
function scroll_start()
{
    var i=0;
    msg="Éste es ek mensahe demostrado en la barra de estado";
    for ( i=0;i<space;i++ )
    msg=" "+msg;
    scrollGo=true;
    timerid=window.setTimeout("scrollmsg(0)",delay);
}
function scrollmsg(pos)
{
    var out= "";
    scrollGo=false;
    if (pos<msg.length)
    self.status = msg.substring(pos, msg.length);
    else
    pos=-1;
    ++pos;
    scrollGo=true;
    timerid=window.setTimeout("scrollmsg("+pos+")",delay);

}