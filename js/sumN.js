
function sumArray() {
    var sum = 0;
     for (var ii = 0; ii < arrayList.length; ii++) {
        if (arrayList[ii] > 0) {
            sum += arrayList[ii];
        }
    }
    document.querySelector("#sumDuong").innerHTML = "👉 Tổng các số dương: " + sum;
}
document.querySelector("#btnSum").onclick = sumArray;