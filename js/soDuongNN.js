function timSoDuongNN() {
    var arraySoDuong = [];
    var arrayListCopy = [];
    for (var i = 0; i < arrayList.length; i++) {
        arrayListCopy.push(arrayList[i]);
    }
    for (var index = 0; index < arrayListCopy.length; index++) {
        if (arrayListCopy[index] > 0) {
            arraySoDuong.push(arrayListCopy[index]);
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