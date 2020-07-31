function backtotop()
{
    document.body.scrollTop=0;
    document.documentElement.scrollTop = 0;
}
window.onscroll=function()
{
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("navgear");
    image.style.transform = "rotate(" + window.pageYOffset*2 + "deg)";
}
