function fnAdd(){
    let l = document.getElementById("l").value;
    let r = document.getElementById("r").value;
    let k = document.getElementById("k").value;

    l = Number(l);
    r = Number(r);
    k = Number(k);

    document.getElementById("p1").innerHTML = l + r + k;
}