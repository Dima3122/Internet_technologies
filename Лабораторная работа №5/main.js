let image = document.getElementById("image"); //Привязываем к переменной image стартовую картинку
let imgs = new Array('Картинки/s1.gif','Картинки/s2.gif','Картинки/s3.gif'
	,'Картинки/s4.gif','Картинки/s5.gif','Картинки/s6.gif' ,'Картинки/s7.gif'
	,'Картинки/s8.gif' ,'Картинки/s9.gif' ,'Картинки/s10.gif' ,'Картинки/s11.gif' 
	,'Картинки/s12.gif'); //Создаем массив картинок 
let buttomstart = document.getElementById('buttom1'); //Привязываем кнопки к JS
let buttomstop = document.getElementById('buttom2');
let buttomfast = document.getElementById('buttom3');
let buttomlow = document.getElementById('buttom4');

let iq = 0; //Отвечает за то, нужно ли остановится 
let i = 0;  //Отвечает за проход по массиву
let but1 = 0; //Активность кнопки 1
let but2 = 0; //Активность кнопки 2
let but3 = 0; //Активность кнопки 3
buttomstart.onclick = () => { //если нажали кнопку старт
	if (but2 == 0 && but1 == 0 && but3 == 0) 
	{ //Если никакая кнопка не активна, то
		but1++;	//делаем кнопку активной
		iq = 0; //Останавливаться не нужно
		let interval = setInterval(function() {
			//задаем нужный интервал
			if (iq == 0)//Проверка, нужно ли остановится
			{	//если не нужно, то проходимся по массиву, 
				i++;   //и пролистываем изображения
				image.src=imgs[ i % imgs.length ];
			}
			else //иначе
			{
				but1 = 0; //кнопка больше не активна
				clearInterval(interval); //очистить интервал
			}
		}, 300, iq);
	}
}

buttomstop.onclick = () => { //если нажали кнопку стоп

	iq = 1; //То останавливаем анимацию
}

buttomfast.onclick = () => { //Если нажали кнопку быстрее
	if (but2 == 0 && but1 == 0 && but3 == 0) 
	{//Если никакая кнопка не активна
		but2++; //Делаем кнопку активной 
		iq = 0; //Останавливаться не нужно
		let interval2 = setInterval(function() {
			//задаем нужный интервал
			if (iq == 0)//Проверка, нужно ли остановится
			{		 //Если не нужно, то прохожимся по массиву
				i++; //и пролистываем изображения
				image.src=imgs[ i % imgs.length ];
			}
			else//в противном случае
			{
				but2 = 0; //выключаем кнопку и останавливаем
				clearInterval(interval2);// интервал
			}
		}, 200, iq);
	}
}

buttomlow.onclick = () => { //Если нажата кнопка медленне
	if (but2 == 0 && but1 == 0 && but3 == 0) 
	{	//Если другие кнопки не наживались
		but3++;	//то нажимаем кнопку
		iq = 0; //Останавливаться не нужно
		let interval3 = setInterval(function() {
			//задаем нужный интервал
			if (iq == 0)//Проверка, нужно ли остановится
			{ 	//Если не нужно, то проходимся по массиву
				i++; //И пролистываем изображения
				image.src=imgs[ i % imgs.length ];
			}
			else //В противном случае 
			{
				but3 = 0;//Выключаем кнопку и останавливаем
				clearInterval(interval3);// Интервал
			}
		}, 500, iq);
	}
}