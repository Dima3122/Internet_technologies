let S1_TEXTBOX1 = document.getElementById("S1_TEXTBOX1");
let S2_TEXTBOX1 = document.getElementById("S2_TEXTBOX1");
let S3_TEXTBOX1 = document.getElementById("S3_TEXTBOX1");
let S4_TEXTBOX1 = document.getElementById("S4_TEXTBOX1");

function foo1(form)
{//попав в функцию подсчета площали квадрата мы:
	let a = S1_TEXTBOX1.value; //Забираем значение из textbox 
	let sum = a * a; //считаем площадь квадрата
	document.getElementById('S1_TEXTBOX2').value = sum;//выводим площадь квадрта
}

function foo2(form)
{
	let b = S2_TEXTBOX1.value;
	let sum = b * b;
	document.getElementById('S2_TEXTBOX2').value = sum;
}

function foo3(form)
{
	let c = S3_TEXTBOX1.value;
	let sum = c * c;
	document.getElementById('S3_TEXTBOX2').value = sum;
}

function foo4(form)
{
	let d = S4_TEXTBOX1.value;
	let sum = d * d;
	document.getElementById('S4_TEXTBOX2').value = sum;
}