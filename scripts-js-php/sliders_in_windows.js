
const arr = [document.getElementById("InfoOne"),document.getElementById("InfoTwo"),document.getElementById("InfoThree"),document.getElementById("InfoFour"),document.getElementById("InfoFive"),document.getElementById("InfoSix"),document.getElementById("InfoSeven"),document.getElementById("InfoEight"),document.getElementById("InfoNine"),document.getElementById("InfoTen")];
const a = document.getElementById("sliders");
const s = document.getElementById("prev_infoObject");
const v = document.getElementById("next_infoObject");
const panel = document.getElementById("window_panel");
const btnStop = document.getElementById("close");
max_lii = 0
max_lii *= 100;
var lii = 0;
let Images = 
	[
		[
			["url('img/OneO/one.jpeg')","url('img/OneO/two.jpeg')","url('img/OneO/three.jpeg')","url('img/OneO/four.jpeg')","url('img/OneO/five.jpeg')","url('img/OneO/six.jpeg')","url('img/OneO/seven.jpeg')","url('img/OneO/eight.jpeg')","url('img/OneO/nine.jpeg')","url('img/OneO/ten.jpeg')"],
			["ЖК Огни","Дизайн-проект квартиры площадью 79 м2 по адресу ЖК 'Огни' "]
		],
		[
			["url('img/TwoO/one.jpeg')","url('img/TwoO/two.jpeg')","url('img/TwoO/three.jpeg')","url('img/TwoO/four.jpeg')","url('img/TwoO/five.jpeg')","url('img/TwoO/six.jpeg')","url('img/TwoO/seven.jpeg')","url('img/TwoO/eight.jpeg')","url('img/TwoO/nine.jpeg')","url('img/TwoO/ten.jpeg')"],
			["ЖК Сердце Столицы","Дизайн-проект квартиры площадью 100 м2 по адресу ЖК 'Сердце Столицы' "]
		],
		[
			["url('img/TwoO/one.jpeg')","url('img/TwoO/two.jpeg')","url('img/TwoO/three.jpeg')","url('img/TwoO/four.jpeg')","url('img/TwoO/five.jpeg')","url('img/TwoO/six.jpeg')","url('img/TwoO/seven.jpeg')","url('img/TwoO/eight.jpeg')","url('img/TwoO/nine.jpeg')","url('img/TwoO/ten.jpeg')"],
			["ЖК Сердц Столицы","Дизайн-проект квартиры площадью 100 м2 по адресу ЖК 'Сердце Столицы' "]
		],
		[
			["url('img/TwoO/one.jpeg')","url('img/TwoO/two.jpeg')","url('img/TwoO/three.jpeg')","url('img/TwoO/four.jpeg')","url('img/TwoO/five.jpeg')","url('img/TwoO/six.jpeg')","url('img/TwoO/seven.jpeg')","url('img/TwoO/eight.jpeg')","url('img/TwoO/nine.jpeg')","url('img/TwoO/ten.jpeg')"],
			["ЖК Серд Столицы","Дизайн-проект квартиры площадью 100 м2 по адресу ЖК 'Сердце Столицы' "]
		],
		[
			["url('img/TwoO/one.jpeg')","url('img/TwoO/two.jpeg')","url('img/TwoO/three.jpeg')","url('img/TwoO/four.jpeg')","url('img/TwoO/five.jpeg')","url('img/TwoO/six.jpeg')","url('img/TwoO/seven.jpeg')","url('img/TwoO/eight.jpeg')","url('img/TwoO/nine.jpeg')","url('img/TwoO/ten.jpeg')"],
			["ЖК Сер Столицы","Дизайн-проект квартиры площадью 100 м2 по адресу ЖК 'Сердце Столицы' "]
		],
		[
			["url('img/TwoO/one.jpeg')","url('img/TwoO/two.jpeg')","url('img/TwoO/three.jpeg')","url('img/TwoO/four.jpeg')","url('img/TwoO/five.jpeg')","url('img/TwoO/six.jpeg')","url('img/TwoO/seven.jpeg')","url('img/TwoO/eight.jpeg')","url('img/TwoO/nine.jpeg')","url('img/TwoO/ten.jpeg')"],
			["ЖК Се Столицы","Дизайн-проект квартиры площадью 100 м2 по адресу ЖК 'Сердце Столицы' "]	
		],
		[
			["url('img/TwoO/one.jpeg')","url('img/TwoO/two.jpeg')","url('img/TwoO/three.jpeg')","url('img/TwoO/four.jpeg')","url('img/TwoO/five.jpeg')","url('img/TwoO/six.jpeg')","url('img/TwoO/seven.jpeg')","url('img/TwoO/eight.jpeg')","url('img/TwoO/nine.jpeg')","url('img/TwoO/ten.jpeg')"],
			["ЖК С Столицы","Дизайн-проект квартиры площадью 100 м2 по адресу ЖК 'Сердце Столицы' "]
		]
	]


function left(){
	if(lii == -max_lii){lii = 0;}
	else{lii -= 100;}
	a.style.left = lii + "%";
}
function right(){
	if(lii == 0){lii = -max_lii;}
	else{lii += 100;}
	a.style.left = lii + "%";
}
s.addEventListener("click",right);
v.addEventListener("click",left);

for (j = 0; j < Images.length; j++) {
		document.getElementById("Btn" + String(j + 1)).addEventListener("click",function(){
			j -= 1;
			panel.style.display = "block";
			document.getElementById("body").style.overflow = "hidden";
			a.style.left = 0 + "%";
			lii = 0;
			max_lii = (Images[j][0].length-1)*100;
			for(var i=0;i<Images[j][0].length;i++){
				arr[i].style.backgroundImage = Images[j][0][i];
			}
			document.getElementById("Main_text_information").innerHTML = Images[j][1][0];
			document.getElementById("text_information").innerHTML = Images[j][1][1];
	})
};
btnStop.addEventListener("click",function(){
	panel.style.display ="none";
	document.getElementById("body").style.overflow = "visible";
});