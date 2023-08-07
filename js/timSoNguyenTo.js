function demSoNguyenTo() {
    var arrayListCopy = [];
    for (var i = 0; i < arrayList.length; i++) {
        arrayListCopy.push(arrayList[i]);
    }
    for (var index = 0; index < arrayListCopy.length; index++) {
        var check = true;
        for (var ii = 2; ii < Math.sqrt(arrayListCopy[index]); ii++) {
            if (arrayListCopy[index] % ii === 0) {
                check = false;
                break;
            }
        }
        if (check && arrayListCopy[index] > 1) {
            document.querySelector("#sumTimSoNguyenTo").innerHTML = "👉 Số nguyên tố là: " + arrayListCopy[index];
            break;
        } else {
            document.querySelector("#sumTimSoNguyenTo").innerHTML = "👉 Không có số nguyên tố ";
        }
    }
}

document.querySelector("#btnTimSoNguyenTo").onclick = demSoNguyenTo;



