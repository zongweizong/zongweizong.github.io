let load = document.createElement("div");
load.setAttribute("id","load");
for(i=0;i<5;i++){
    let loadBox = document.createElement("div");
    loadBox.setAttribute("class","box");
    load.appendChild(loadBox)
}
document.getElementsByTagName("body")[0].appendChild(load);

setTimeout(function(){
    load.remove();
},3500)