
const arr = [document.getElementById("InfoOne"),document.getElementById("InfoTwo"),document.getElementById("InfoThree"),document.getElementById("InfoFour"),document.getElementById("InfoFive"),document.getElementById("InfoSix"),document.getElementById("InfoSeven"),document.getElementById("InfoEight"),document.getElementById("InfoNine"),document.getElementById("InfoTen")];
const a = document.getElementById("sliders");
const s = document.getElementById("prev_infoObject");
const v = document.getElementById("next_infoObject");
const panel = document.getElementById("window_panel");
const btnStop = document.getElementById("close");
const BaseArticle = document.getElementById("two");
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
		],
		[
			["url('img/TwoO/one.jpeg')","url('img/TwoO/two.jpeg')","url('img/TwoO/three.jpeg')","url('img/TwoO/four.jpeg')","url('img/TwoO/five.jpeg')","url('img/TwoO/six.jpeg')","url('img/TwoO/seven.jpeg')","url('img/TwoO/eight.jpeg')","url('img/TwoO/nine.jpeg')","url('img/TwoO/ten.jpeg')"],
			["ЖК С Столицы","Дизайн-проект квартиры площадью 100 м2 по адресу ЖК 'Сердце Столицы' "]
		],
		[
			["url('img/TwoO/one.jpeg')","url('img/TwoO/two.jpeg')","url('img/TwoO/three.jpeg')","url('img/TwoO/four.jpeg')","url('img/TwoO/five.jpeg')","url('img/TwoO/six.jpeg')","url('img/TwoO/seven.jpeg')","url('img/TwoO/eight.jpeg')","url('img/TwoO/nine.jpeg')","url('img/TwoO/ten.jpeg')"],
			["ЖК С Столицы","Дизайн-проект квартиры площадью 100 м2 по адресу ЖК 'Сердце Столицы' "]
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

/*
Функция создания кнопки, создаёт кнопку по необходимому нам принципу
	:param: ButtonID int - порядковый айди для нашей кнопушки
	:param: ImageURL string - URL, который будет отображать кнопка
	
*/
function CreateButton(ButtonID, ImageURL) {
	//Берём базу кнопки и сразу заполняет ID и URL, полученный функцией
	var BaseButtonHTML = `<button id="Btn${ButtonID}" class="block">
								<div class="DarkSlite">
									<div class="block_image" style="background-image: ${ImageURL};"></div>
									<div class="block_text">
										<h3 >NameObject</h3>
										<p >information...</p>
									</div>
								</div>
							</button>`
	//Создаём некий DOM placeholder для элемента, внутрь пихаем новый HTML
	placeholder = document.createElement("div");
	placeholder.innerHTML = BaseButtonHTML;
	
	//Возвращаем первую часть внутренности
	return placeholder.firstChild;
}

/*
Функция создания DIV элемента
	:param: ItemClass string - класс, который мы будем использовать для отображения. two/three-items
	:param: NewID int - ID div'a для сохранения целостности объекта
	:param: Buttons DOM[] - массив DOM элементов, который мы будем заполнять внутрь DIV'a
*/
function CreateDiv(ItemClass, NewID, Buttons) {
	//Это База
	var BaseDivHTML = `<div class="${ItemClass}" id="placeholder${NewID}"> </div>`
	
	//Создаём некий DOM placeholder для элемента, внутрь пихаем новый HTML
	placeholder = document.createElement("div");
	placeholder.innerHTML = BaseDivHTML;
	
	//Проходимся по массиву и добавляем к первому дочернему элементу все кнопки
	for (i = 0; i < Buttons.length; i++) {
		placeholder.firstChild.appendChild(Buttons[i]);
	}

	//В качестве добавления в документ используем первый дочерний элемент - наш DIV
	node = placeholder.firstChild;

	BaseArticle.appendChild(node);
}

var counter = 0; //Переменная для просто забавного чередования two/three -items
var temp = 0;	//Темповая переменная для определения чередования
var tempButtonList = [];	//Времянка, где хранятся наши кнопки

//Пробегаемся по всему массиву
for (j = 0; j < Images.length; j++) {
		//Сразу вызываем функцию создания кнопки и результат добавляем в массив
		tempButtonList.push(CreateButton(j+1, Images[j][0][j]));

		//Для чередования юзаем counter. При достижении макс. кол-ва элементов в классе вызываем CreateDIV, обнуляем temp, увеличиваем counter, зачищаем темповый массив
		if (counter	% 2 == 0) {
			temp++;
			if (temp % 2 == 0) {
				CreateDiv("two-items", counter+1, tempButtonList);
				temp = 0;
				counter++;
				tempButtonList = [];
			}
		} else {
			temp++;
			if (temp % 3 == 0) {
				CreateDiv("three-items", counter+1, tempButtonList);
				temp = 0;
				counter++;
				tempButtonList = [];
			}
		}
};

//Проходясь по списку всего массива, прокидываем функцию обработки клика по картинке
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