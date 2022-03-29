
const arr = [document.getElementById("InfoOne"),document.getElementById("InfoTwo"),document.getElementById("InfoThree"),document.getElementById("InfoFour"),document.getElementById("InfoFive"),document.getElementById("InfoSix"),document.getElementById("InfoSeven"),document.getElementById("InfoEight"),document.getElementById("InfoNine"),document.getElementById("InfoTen")];
const a = document.getElementById("sliders");
const s = document.getElementById("prev_infoObject");
const v = document.getElementById("next_infoObject");
const btn1 = document.getElementById("Btn1");
const btn2 = document.getElementById("Btn2");
const btn3 = document.getElementById("Btn3");
const btn4 = document.getElementById("Btn4");
const btn5 = document.getElementById("Btn5");
const btn6 = document.getElementById("Btn6");
const panel = document.getElementById("window_panel");
const btnStop = document.getElementById("close");
const btn7 = document.getElementById("Btn7");
max_lii = 0
max_lii *= 40;
var lii = 0;
let Images = new Map();
Images.set(1,[
	["url('img/OneImg.jpeg')","url('img/OneImg.jpeg')","url('img/OneImg.jpeg')","url('img/OneImg.jpeg')","url('img/OneImg.jpeg')"],
	["привет"]
]);
Images.set(2,[
	["url('img/TwoImg.jpeg')","url('img/TwoImg.jpeg')","url('img/TwoImg.jpeg')"],
	["лололоиоилоилоилои"]
]);
Images.set(3,[
	["url('img/ThreeImg.jpeg')","url('img/ThreeImg.jpeg')","url('img/ThreeImg.jpeg')","url('img/ThreeImg.jpeg')","url('img/ThreeImg.jpeg')"],
	["лотлтлтвломиукимгншингиги"]
]);
Images.set(4,[
	["url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')"],
	["иолривсгигшниушги"]
]);
Images.set(5,[
	["url('img/TwoImg.jpeg')","url('img/TwoImg.jpeg')","url('img/TwoImg.jpeg')"],
	["dcduycbuyguyvyuviui"]
]);
Images.set(6,[
	["url('img/ThreeImg.jpeg')","url('img/ThreeImg.jpeg')","url('img/ThreeImg.jpeg')","url('img/ThreeImg.jpeg')","url('img/ThreeImg.jpeg')"],
	["oirf3eriufbeiubiubiubiub"]
]);
Images.set(7,[
	["url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')","url('img/FourImg.jpg')"],
	["угшкшгиашгиукшгаишгкигши"]
]);
function left(){
	if(lii == -max_lii){lii = 0;}
	else{lii -= 40;}
	a.style.left = lii + "vw";
}
function right(){
	if(lii == 0){lii = -max_lii;}
	else{lii += 40;}
	a.style.left = lii + "vw";
}
s.addEventListener("click",right);
v.addEventListener("click",left);
btn1.addEventListener("click",function(){
	panel.style.display = "block";
	document.getElementById("body").style.overflow = "hidden";
	a.style.left = 0 + "vw";
	lii = 0;
	max_lii = (Images.get(1)[0].length-1)*40;
	for(var i=0;i<Images.get(1)[0].length;i++){
		arr[i].style.backgroundImage = Images.get(1)[0][i];
	}
	document.getElementById("text_information").innerHTML = Images.get(1)[1][0];
});
btn2.addEventListener("click",function(){
	panel.style.display = "block";
	document.getElementById("body").style.overflow = "hidden";
	a.style.left = 0 + "vw";
	lii = 0;
	max_lii = (Images.get(2)[0].length-1)*40;
	for(var i=0;i<Images.get(2)[0].length;i++){
		arr[i].style.backgroundImage = Images.get(2)[0][i];
	}
	document.getElementById("text_information").innerHTML = Images.get(2)[1][0];
});
btn3.addEventListener("click",function(){
	panel.style.display = "block";
	document.getElementById("body").style.overflow = "hidden";
	a.style.left = 0 + "vw";
	lii = 0;
	max_lii = (Images.get(3)[0].length-1)*40;
	for(var i=0;i<Images.get(3)[0].length;i++){
		arr[i].style.backgroundImage = Images.get(3)[0][i];
	}
	document.getElementById("text_information").innerHTML = Images.get(3)[1][0];
});
btn4.addEventListener("click",function(){
	panel.style.display = "block";
	document.getElementById("body").style.overflow = "hidden";
	a.style.left = 0 + "vw";
	lii = 0;
	max_lii = (Images.get(4)[0].length-1)*40;
	for(var i=0;i<Images.get(4)[0].length;i++){
		arr[i].style.backgroundImage = Images.get(4)[0][i];
	}
	document.getElementById("text_information").innerHTML = Images.get(4)[1][0];
});
btn5.addEventListener("click",function(){
	panel.style.display = "block";
	document.getElementById("body").style.overflow = "hidden";
	a.style.left = 0 + "vw";
	lii = 0;
	max_lii = (Images.get(5)[0].length-1)*40;
	for(var i=0;i<Images.get(5)[0].length;i++){
		arr[i].style.backgroundImage = Images.get(5)[0][i];
	}
	document.getElementById("text_information").innerHTML = Images.get(5)[1][0];
});
btn6.addEventListener("click",function(){
	panel.style.display = "block";
	document.getElementById("body").style.overflow = "hidden";
	a.style.left = 0 + "vw";
	lii = 0;
	max_lii = (Images.get(6)[0].length-1)*40;
	for(var i=0;i<Images.get(6)[0].length;i++){
		arr[i].style.backgroundImage = Images.get(6)[0][i];
	}
	document.getElementById("text_information").innerHTML = Images.get(6)[1][0];
});
btn7.addEventListener("click",function(){
	panel.style.display ="block";
	document.getElementById("body").style.overflow = "hidden";
	a.style.left = 0 + "vw";
	lii = 0;
	max_lii = (Images.get(7)[0].length-1)*40;
	for(var i=0;i<Images.get(7)[0].length;i++){
		arr[i].style.backgroundImage = Images.get(7)[0][i];
	}
	document.getElementById("text_information").innerHTML = Images.get(7)[1][0];
});
btnStop.addEventListener("click",function(){
	panel.style.display ="none";
	document.getElementById("body").style.overflow = "visible";
});