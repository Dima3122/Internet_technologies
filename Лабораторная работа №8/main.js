menu = document.getElementById('menu');//берем эллемент 
menu.onmouseover= function(event)//если на меню навели мышку
{
	let target = event.target;//узнаем где была мышка
	if (target.className == 'menu-item')//если попали на меню итем
	{
		let s = new Array(3);//создаем массив эллементов
		s = target.getElementsByClassName('submenu');//заполняем массив
		closeMenu();//закрываем все меню
		s[0].style.display='block';//открываем 1 пункт подменю
		s[1].style.display='block';//открываем 2 пункт подменю
		s[2].style.display='block';//открываем 3 пункт подменю
	}
}

document.onmousemove=function(event)//где двигалась мышка в документе
{
	let target = event.target;//Узнаем где была книжка 
	if (target.className!='menu-item' && target.className!='submenu' && target.className!='str_one' &&
	target.className!='str_two' && target.className!='str_there')//Если мышка не на меню и не на сабменю 
	{	 
		closeMenu();//то закрываем меню
	}
}

function closeMenu()//функция закрытия меню
{
	let subm=document.getElementsByClassName('submenu');
	for (let i=0; i<subm.length; i++)//обнуляем все подменю
	{
        subm[i].style.display="none";
    }
}
