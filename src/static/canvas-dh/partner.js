function partner()
{
    var circles = document.querySelectorAll(".circle");
    for(var i = 0; i < circles.length; i++)
    {
        circles[i].style.animationDelay=i * 0.6 + "s";
        circles[i].classList.add("go");
    }
    var audio = document.querySelector("audio");
    audio.loop = "loop";
    audio.play();
}