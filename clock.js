// JavaScript source code
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();   //the times
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = // for the actual clock
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}