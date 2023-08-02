function timSoChanCC() {
    var count = -1;
    var arrayListCopy = [];
    for (var i = 0; i < arrayList.length; i++) {
        arrayListCopy.push(arrayList[i]);
    }
    for (var index = 0; index < arrayListCopy.length; index++) {
        if (arrayListCopy[index] % 2 == 0) {
            count = arrayListCopy[index];
            document.querySelector("#sumTimSoChan").innerHTML = "👉 Số chẵn cuối cùng: " + count;

        }else {
            document.querySelector("#sumTimSoChan").innerHTML = "👉 Không có số chẵn";
        }
    }
}
document.querySelector("#btnTimSoChan").onclick = timSoChanCC;