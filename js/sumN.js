
function sumArray() {
    var sum = 0;
    var arrayListCopy = [];
    for (var i = 0; i < arrayList.length; i++) {
        arrayListCopy.push(arrayList[i]);
    }

    for (var ii = 0; ii < arrayListCopy.length; ii++) {
        if (arrayListCopy[ii] > 0) {
            sum += arrayListCopy[ii];
        }
    }
    document.querySelector("#sumDuong").innerHTML = "👉 Tổng các số dương: " + sum;
}
document.querySelector("#btnSum").onclick = sumArray;