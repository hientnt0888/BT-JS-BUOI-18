function timSoDuongNN() {
    var arraySoDuong = [];

    for (var index = 0; index < arrayList.length; index++) {
        if (arrayList[index] > 0) {
            arraySoDuong.push(arrayList[index]);
        }
    }
    var count = arraySoDuong[0];
    for (var ii = 0; ii < arraySoDuong.length; ii++) {
        if (arraySoDuong[ii] < count && arraySoDuong[ii] > 0) {
            count = arraySoDuong[ii];
        }
    }
    document.querySelector("#sumTimSDNN").innerHTML = "👉 Số dương nhỏ nhất: " + count;
}
document.querySelector("#btnTimSDNN").onclick = timSoDuongNN;