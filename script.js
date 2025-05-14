let count = Number(localStorage.getItem("count")) || 0;
document.getElementById("countDisplay").textContent = count;
function increase(){
    count++;
    update();
}

document.getElementById("counterDisplay").textContent = count;
function increase(){
    count++;
    update();
}
function update(){
    document.getElementById("countDisplay").textContent = count;
    localStorage.setItems("count" ,count);
}