var arrayList = [];


function taoMang() {
    var n = document.querySelector("#inputN").value;
    n = parseInt(n);
    arrayList.push(n)
    document.querySelector("#txtOutput").innerHTML = "👉  " + arrayList;

}
document.querySelector("#btnOutput").onclick = taoMang;