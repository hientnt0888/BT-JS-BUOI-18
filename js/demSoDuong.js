function DemSoDuong() {
    var count = 0;
    for (var index = 0; index < arrayList.length; index++) {
        if (arrayList[index] > 0) {
            count++
        }
    }
    document.querySelector("#sumDem").innerHTML = "👉 Số dương: " + count;
}
document.querySelector("#btnDem").onclick = DemSoDuong;