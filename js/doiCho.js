function doiCho() {
    var a = document.querySelector("#input1").value;
    var b = document.querySelector("#input2").value;
    var n1 = arrayList[a];
    var n2 = arrayList[b];
    arrayList[a] = n2;
    arrayList[b] = n1;
    document.querySelector("#sumDoiCho").innerHTML = "👉 Mảng sau khi đổi: " + arrayList;

}
document.querySelector("#btnDoiCho").onclick = doiCho;
