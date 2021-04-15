let imgs = new Array("картинки/dg0.gif", "картинки/dg1.gif",
"картинки/dg2.gif", "картинки/dg3.gif", "картинки/dg4.gif",
"картинки/dg5.gif", "картинки/dg6.gif", "картинки/dg7.gif",
"картинки/dg8.gif", "картинки/dg9.gif", "картинки/dgam.gif",
"картинки/dgpm.gif", "картинки/dgc.gif", "картинки/dgp.gif");
//Создаем массив картинок в нужном порядке, что бы обращатся
//к цифрам по индексам
setInterval(gettime, 1000);//Вызываем функцию показа времени раз в секунду
function gettime(form)//При загрузке страницы выводим время
{
	var now = new Date();	//Узнаем дату
	var hours = now.getHours(); //Узнаем час
	var min  = now.getMinutes();//узнаем минуту
	var month = now.getMonth(); //Узнаем месяц
	var date = now.getDate();	//узнаем сегодняшнее число
	var year = now.getFullYear();//узнаем год
	var min2 = min / 10;	//данными преобразованиями мы разбиваем
	var min1 = Math.floor(min2);//число на цифры и выводим нужные цифры 
	//действия с часами и минутами
	image3.src = imgs[min1];//на экран
	image1.src = imgs[hours % 12];
	image2.src = imgs[12];
	image4.src = imgs[min % 10];
	if (hours > 12) //если количество часов больше 12
	{
		image5.src = imgs[11];//выводим pm
	}
	else//иначе
	{
		image5.src = imgs[10]//выводим am
	}
	//действия с месяцем
	image7.src = imgs[date % 10];//разбиение числа на цифры
	month++;
	min2 = date / 10; //разбиваем число на цифры
	min1 = Math.floor(min2);
	image6.src = imgs[min1];//выводим
	min2 = month / 10;//разбиваем на цифры и выводим
	min1 = Math.floor(min2);
	image8.src = imgs[13];
	image9.src = imgs[min1]; 
	image10.src = imgs[month % 10];
	image11.src = imgs[13];
	//действие с годом
	var year1 = year % 2000;//все так же, разбиваем и выводим
	var year2 = year / 1000;
	var year3 = year / 100;
	year2 = Math.floor(year2);
	year3 = Math.floor(year3);
	min2 = year1 / 10;
	min1 = Math.floor(min2);
	image12.src = imgs[year2];
	image13.src = imgs[year3 % 10];
	image14.src = imgs[min1];
	image15.src = imgs[year1 % 10];	
}
