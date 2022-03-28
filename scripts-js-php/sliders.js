var distantion=0;
const btn_next = document.getElementById("next");
const btn_prev = document.getElementById("prev");
const slider_body = document.getElementById("sliders_body");
slider_body.style.width = (slider_body.ariaValueMax*100)+"vw";
function left(){
	distantion-=100;
	if(distantion < (slider_body.ariaValueMax-1)*(-100)){distantion = 0;}
	slider_body.style.left = distantion+"vw";
}
function right(){
	distantion+=100;
	if(distantion > 0){distantion = (slider_body.ariaValueMax-1)*(-100);}
	slider_body.style.left = distantion+"vw";
}
btn_next.addEventListener("click",left);
btn_prev.addEventListener("click",right);



