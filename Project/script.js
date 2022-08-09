function myFunction() {
  var f,
    borderRadius,
    sum = 0;
  let t = document.getElementById("t").value;
  let tCount=t.toString().length;
  if (tCount== 5) {
    while (t) {
      f = t % 10;
      sum += f*5;
      t = Math.floor(t / 10);
    }
    borderRadius = Math.floor(sum / 5);
    document.getElementById("create").style.width = sum + "px";
    document.getElementById("create").style.height = sum + "px";
    document.getElementById("create").style.borderRadius = borderRadius + "px";
  } else {
    alert("Please enter a 5-digit number");
  }
}
