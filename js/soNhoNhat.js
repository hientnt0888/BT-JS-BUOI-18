function timSoNhoNhat() {
    var count = arrayList[0];
    for (var index = 0; index < arrayList.length; index++) {
        if (arrayList[index] < count) {
            count = arrayList[index];
        }
    }
    document.querySelector("#sumTimSNN").innerHTML = "👉 Số nhỏ nhất: " + count;
}
document.querySelector("#btnTimSNN").onclick = timSoNhoNhat;