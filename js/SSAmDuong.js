function SSAmDuong() {
    var duong = 0;
    var am = 0;

    for (var i = 0; i < arrayList.length; i++) {
        if (arrayList[i] > 0) {
            duong++;
        } else if(arrayList[i] < 0) {
            am++;
        }
    }

    if (duong > am) {
        document.querySelector("#sumSSAmDuong").innerHTML = "👉 Số dương > Số âm";
    } else if (duong < am) {
        document.querySelector("#sumSSAmDuong").innerHTML = "👉 Số dương < Số âm";
    } else {
        document.querySelector("#sumSSAmDuong").innerHTML = "👉 Số dương = Số âm";
    }
}
document.querySelector("#btnSSAmDuong").onclick = SSAmDuong;