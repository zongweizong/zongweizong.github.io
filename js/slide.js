let slide = document.getElementsByClassName("slide")[0];
let items = document.getElementsByClassName("item");
let x = 0;
let sliding = setInterval(function(){
    x = x - 100;
    if(x <= -500){
        x = 0;
    }
    slide.style.left = "calc(" + x + "%)";
    items[Math.abs(x) / 100].checked = true;
},3000);
for (const item of items) {
    item.addEventListener("click",function(){
        x = this.getAttribute("value") * -100;
        slide.style.left = "calc(" + x + "%)";
    })
}
document.getElementById("prev").addEventListener("click",function(){
    x = x + 100;
    if(x >= 0){
        x = -400;
    }
    slide.style.left = "calc(" + x + "%)";
    items[Math.abs(x) / 100].checked = true;
})
document.getElementById("next").addEventListener("click",function(){
    x = x - 100;
    if(x <= -500){
        x = 0;
    }
    slide.style.left = "calc(" + x + "%)";
    items[Math.abs(x) / 100].checked = true;
})