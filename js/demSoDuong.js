function DemSoDuong() {
    var count = 0;
    var arrayListCopy = [];
    for (var i = 0; i < arrayList.length; i++) {
        arrayListCopy.push(arrayList[i]);
    }
    for (var index = 0; index < arrayListCopy.length; index++) {
        if (arrayListCopy[index] > 0) {
            count++
        }
    }
    document.querySelector("#sumDem").innerHTML = "👉 Số dương: " + count;
}
document.querySelector("#btnDem").onclick = DemSoDuong;