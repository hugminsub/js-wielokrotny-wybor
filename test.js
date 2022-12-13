document.getElementByid("check").addEventListener("click", function(){
let odpowiedz = document.getElementById("wynik").value
if (odpowiedz.toLowerCase() == prawidlowaOdpowiedz){
 alert("Dobrze!")
}
 else
 {
  alert("Spróbuj jeszcze raz")
 }
})
