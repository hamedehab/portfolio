let name ="Hamed Ehab";
let value = 1;
function writetext(){
    document.getElementById('name').textContent=name.slice(0,value);
    value++;
    if(value > name.length){
        value = 0;
    }
}
setInterval (function(){
    writetext()
},300);