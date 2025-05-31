function Opan(){
  bardata = document.getElementById("tab")
  bardata.style.transform="translateX(0px)"
  btndata = document.getElementById("bar")
  btndata.style.display="none"
  btncdata = document.getElementById("close")
  btncdata.style.display="block"

}
function Close(){
  bardata = document.getElementById("tab")
  bardata.style.transform="translateX(1400px)"
  btndata = document.getElementById("bar")
  btndata.style.display="block"
  btncdata = document.getElementById("close")
  btncdata.style.display="none"

}



// function Scroll(){

// }