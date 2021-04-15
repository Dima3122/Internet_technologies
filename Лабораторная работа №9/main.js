if (getCookie("name") == NaN)//проверяем, есть ли зарегестированный пользователь
{
    document.getElementById("helloname").textContent = "Привет, " + getCookie("name") + "!";//вбиваем имя
    document.getElementById("pos_str").textContent = "Количество посещений этой страницы: " + getCookie("pos_size");    
    //вбиваем количество посещений
}
function foo1(form)//Кнопка зарегестрироваться
{
    let TEXT = document.getElementById('TEXTBOX1');//Считываем значение с textbox
    let a = TEXT.value;
    let today = new Date();//считываем дату
    let expires = new Date();
	expires.setTime(today.getTime() + 1000*60*60*24*365);//и устанавливаем срок действия куки
    setCookie("name", a, expires);//создаем куки имени
    setCookie("pos_size", 0, expires);//создаем куки количества посещений
    setCookie("time", today, expires);//создаем отметку времени
}

function datarazni()//Вывод даты
{
    let now = new Date();	//Узнаем дату
    let cookies = getCookie("time");//узнаем даду из файла куки
    let now2 = new Date(cookies);//переводим ее в нужный формат
    let time1 = Math.abs(now2 - now);//вычитаем две даты и получаем разницу в миллисекундах
    let seconds1 = Math.floor(time1/1000);//узнаем секунды
	let min1  = Math.floor(seconds1/60);//узнаем минуту
    let hours1 = Math.floor(min1/60); //Узнаем час
    seconds1 = seconds1 % 60;//переводим в нужный формат
    min1 = min1 % 60;
    hours1 = hours1 % 24;
    document.getElementById("time").textContent = "Вы были на этой странице: " + hours1 +" часов, " + min1 +
    " Минут " + seconds1 + " секунд назад";//вывод на экран
}

function foo3()//действия при заходе на страницу 
{
    if (getCookie("pos_size") >= 0)//если не первое посещение страницы 
    {
        let value = getCookie("pos_size");//узнаем значение из файлов куки
        let today = new Date();//узнаем дату
        let expires = new Date();
        expires.setTime(today.getTime() + 1000*60*60*24*365);//устанавливаем срок действия куки
        value++;//счетчик посещений + 1
        setCookie("pos_size", value, expires);//создаем куки        
    }
    if (getCookie("name") == NaN)//проверяем, есть ли зарегестированный пользователь 
    {
        datarazni();//узнаем разницу во времени    
    }
}

function foo2(form)//кнопка обнуления счетчика
{
    deleteCookies();//вызываем функцию обнуления счетчкика
}

function setCookie(name, value, expire) 
{  
	document.cookie = name + "=" + escape(value) +
		//В строку дописывается имя устанавливаемой cookie
	((expire == null) ? "" : ("; expires=" + expire.toGMTString()))
		//Устанавливается время действия
}

function getCookie(Name)//получить значение куки
{   
	var search = Name + "=";
		//Создается строка для поиска в document.cookie
    if (document.cookie.length > 0) 
    {
        offset = document.cookie.indexOf(search)
        //Поиск cookie по ее имени
        if (offset != -1) 
        {
			offset += search.length;
			end = document.cookie.indexOf(";", offset);
				//Определили положение нужной cookie, и по индексам вырежем ее
            if (end == -1)
            {
				end = document.cookie.length;
            }
			return unescape(document.cookie.substring(offset, end));
				//Вернули подстроку, содержащюю нужное значение cookie
		}
	}
}

function deleteCookies() 
{
    let today = new Date();//узнаем дату
    let expires = new Date();
	expires.setTime(today.getTime() + 1000*60*60*24*365);//устанавливаем срок действия куки
    setCookie("pos_size", 0, expires);//обнуляем посещения   
}