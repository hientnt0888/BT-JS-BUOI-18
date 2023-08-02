var arrayList = [];


function taoMang() {
    var n = Number(document.querySelector("#inputN").value);
    arrayList.push(n)
    document.querySelector("#txtOutput").innerHTML = "👉  " + arrayList;

}
document.querySelector("#btnOutput").onclick = taoMang;