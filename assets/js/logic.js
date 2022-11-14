//Main Logic
function search_dsa() {
  let input = document.getElementById("searchbar").value;

  input = input.toLowerCase();

  document.getElementById("gyan").style.display = "none";

  let x = document.getElementsByClassName("dsa");
  let flag = 0;
  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      flag = 1;
      x[i].style.display = "list-item";
    }
  }

  if (flag == 0) {
    x.style.display = "none";
    document.getElementById("gyaan").innerHTML =
      "<h3>OPPS! No Search realted to this.</h3>";
  }
}
