function demSoNguyenTo() {
    for (var index = 0; index < arrayList.length; index++) {
        var check = true;
        for (var ii = 2; ii < Math.sqrt(arrayList[index]); ii++) {
            if (arrayList[index] % ii === 0) {
                check = false;
                break;
            }
        }
        if (check && arrayList[index] > 1 && Number.isInteger(arrayList[index])) {
            document.querySelector("#sumTimSoNguyenTo").innerHTML = "👉 Số nguyên tố là: " + arrayList[index];
            break;
        } else {
            document.querySelector("#sumTimSoNguyenTo").innerHTML = "👉 Không có số nguyên tố ";
        }
    }
}

document.querySelector("#btnTimSoNguyenTo").onclick = demSoNguyenTo;



