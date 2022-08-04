function fnAdd(){
    let l = document.getElementById("l").value;
    let r = document.getElementById("r").value;
    let k = document.getElementById("k").value;

    l = Number(l);
    r = Number(r);
    k = Number(k);
    var count = 0;

    for(let i=l;i<=r;i++){
        if(i%k == 0){
            count +=1;
            
        }
        document.getElementById("p1").innerHTML = count;
    }

    // document.getElementById("p1").innerHTML = l + r + k;
}