<!--Function that will return what Semester it is in the format of Season + Year-->
function returnSemester()
{
  var d = new Date();
  var g = new Date();
  var monthplaceholder = d.getMonth() + 1;
  var g = d.getFullYear();

  if(monthplaceholder == 1 || monthplaceholder == 2 || monthplaceholder == 3 || monthplaceholder == 4) {
    document.getElementById("Semester").innerHTML = "Winter " + g;
  }
  else if(monthplaceholder == 5 || monthplaceholder == 6 || monthplaceholder == 7 || monthplaceholder == 8){
    document.getElementById("Semester").innerHTML = "Spring/Summer " + g;
  }
  else {
    document.getElementById("Semester").innerHTML = "Fall " + g;
  }
}
