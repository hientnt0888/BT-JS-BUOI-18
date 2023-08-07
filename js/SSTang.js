function timSoChanCC() {
    arrayList.sort(function(a,b){
        return a - b;
    })
    document.querySelector("#sumSSepTang").innerHTML = "👉 Danh sách tăng dần: " + arrayList;

}
document.querySelector("#btnSSepTang").onclick = timSoChanCC;