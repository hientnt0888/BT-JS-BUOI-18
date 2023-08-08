function timSoChanCC() {
    var arrayListCopy = [];
    for (var i = 0; i< arrayList.length; i++ ){
        arrayListCopy.push(arrayList[i]);
    }
        arrayListCopy.sort(function (a, b) {
            return a - b;
        })
    document.querySelector("#sumSSepTang").innerHTML = "👉 Danh sách tăng dần: " + arrayListCopy;

}
document.querySelector("#btnSSepTang").onclick = timSoChanCC;