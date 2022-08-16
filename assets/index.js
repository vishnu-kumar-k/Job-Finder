window.addEventListener("load",start,false)
function start()
{
    document.getElementById("job").addEventListener("mouseover",job_1,false);
    document.getElementById("job").addEventListener("mouseout",job_2,false);
    document.getElementById("picture").addEventListener("mouseover",mousemove1,false);
    document.getElementById("picture").addEventListener("mouseout",mouseout1,false);
}
function job_1()
{
    document.getElementById("join").innerHTML="Login now get hire the top edge person";
}
function job_2()
{
    document.getElementById("join").innerHTML="";
}
function mousemove1()
{
    document.getElementById("picture").setAttribute("src","hiring1.jpg");
}
function mouseout1()
{
    document.getElementById("picture").setAttribute("src","threee.jpg");
}