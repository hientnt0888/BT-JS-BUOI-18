function timSoNhoNhat() {
    var arrayListCopy = [];
    for (var i = 0; i < arrayList.length; i++) {
        arrayListCopy.push(arrayList[i]);
    }
    var count = arrayListCopy[0];
    for (var index = 0; index < arrayListCopy.length; index++) {
        if (arrayListCopy[index] < count) {
            count = arrayListCopy[index];
        }
    }
    document.querySelector("#sumTimSNN").innerHTML = "👉 Số nhỏ nhất: " + count;
}
document.querySelector("#btnTimSNN").onclick = timSoNhoNhat;