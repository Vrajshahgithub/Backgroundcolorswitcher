function color(colors)
{
document.body.style.backgroundColor= colors;
let txt = document.getElementsByTagName("p");
if(colors == "#000000")
{
for(let el of txt)
{
    el.style.color="white";
}
}else{
for(let el of txt)
{
    el.style.color="black";
}
}
}