function timSoChanCC() {
    var count = [];
    for (var index = 0; index < arrayList.length; index++) {
        if (arrayList[index] % 2 === 0) {
            count.push(arrayList[index]);
        } else {
            document.querySelector("#sumTimSoChan").innerHTML = "👉 Không có số chẵn";
        }
    }
    document.querySelector("#sumTimSoChan").innerHTML = "👉 Số chẵn cuối cùng: " + count[count.length - 1];

}
document.querySelector("#btnTimSoChan").onclick = timSoChanCC;