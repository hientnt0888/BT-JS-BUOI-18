function doiCho() {
    var a = document.querySelector("#input1").value;
    var b = document.querySelector("#input2").value;
    var arrayListCopy = [];
    for (var i = 0; i < arrayList.length; i++) {
        arrayListCopy.push(arrayList[i]);
    }
    var n1 = arrayListCopy[a];
    var n2 = arrayListCopy[b];
    arrayListCopy[a] = n2;
    arrayListCopy[b] = n1;
    document.querySelector("#sumDoiCho").innerHTML = "👉 Mảng sau khi đổi: " + arrayListCopy;

}
document.querySelector("#btnDoiCho").onclick = doiCho;
