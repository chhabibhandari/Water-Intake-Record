
var number = 0;
function addOne() {

if(number < 13){

number++;
document.getElementById('textbox1').innerHTML = number ;
document.getElementById("imge"+number).style.display = "inline";

} else if ( number == 13) { 

document.getElementById('complete').innerHTML = "daily achivement complete" ;

}else {

	document.getElementById('complete').innerHTML = "sorry some technical problem" ;

}
}
