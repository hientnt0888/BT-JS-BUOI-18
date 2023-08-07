var arrayList9 = [];
function demSoNguyen() {
    var n = Number(document.querySelector("#input9").value);
    arrayList9.push(n)
    document.querySelector("#txtOutput9").innerHTML = "👉  " + arrayList9;

}
document.querySelector("#btnOutput9").onclick = demSoNguyen;

function dem() {
    var count = 0;
    for (var i = 0; i < arrayList9.length; i++) {
        if(Number.isInteger(arrayList9[i])){
            count++;
        }
    }
    document.querySelector("#sumDemSoNguyen").innerHTML = "👉 Số lượng số nguyên: " + count;
}
document.querySelector("#btnDemSoNguyen").onclick = dem;
