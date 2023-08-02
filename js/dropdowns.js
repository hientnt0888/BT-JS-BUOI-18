function showw(idd) {
    return document.getElementById(idd).classList.toggle("show");
}

document.getElementById("showSum").onclick = function () {
    showw("sumSoDuong");
}
document.getElementById("clickDem").onclick = function () {
    showw("demSoDuong");
}
document.getElementById("clickTimSNN").onclick = function () {
    showw("timSNN");
}
document.getElementById("clickTimSDNN").onclick = function () {
    showw("timSDNN");
}
document.getElementById("clickTimSoChan").onclick = function () {
    showw("timSoChan");
}
document.getElementById("clickDoiCho").onclick = function () {
    showw("doiCho");
}
document.getElementById("clickSSepTang").onclick = function () {
    showw("SSepTang");
}
document.getElementById("clickTimSoNguyenTo").onclick = function () {
    showw("timSoNguyenTo");
}
document.getElementById("clickDemSoNguyen").onclick = function () {
    showw("DemSoNguyen");
}
document.getElementById("clickSSAmDuong").onclick = function () {
    showw("SSAmDuong");
}