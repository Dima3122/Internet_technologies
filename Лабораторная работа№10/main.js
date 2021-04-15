let XmlDoc;//Загруженный XML документ
let selected_facult;//Выбранный факультет
let selected_course;//Выбранный курс
let change_xml;//Выбранные группы
let arr_groop = [];//Массив групп
let change_name;//Выбранное имя
let selected_groop//Выбранная группа
let arr_student = [];//Массив студентов
let flag1 = false;//флаг доступа 1
let flag2 = false;//флаг доступа 2

function onload_page()
{
    let Xmltext = new XMLHttpRequest();//создаем переменную для принятия запроса
    Xmltext.open("GET", "data.xml", true);//подготавливаем запрос
    Xmltext.send();//отправляем его
    Xmltext.onreadystatechange = function()//когда пришел ответ, то
    {
        if (Xmltext.readyState != 4)//если ответ не на 4 стадии, то выходим
        {
            return;
        }

        if (Xmltext.status != 200)//есди ответ не пришел
        {
            console.log(Xmltext.status + ":" + Xmltext.statusText);//выводим ошибку
        }
        else//иначе...
        {
            let parser = new DOMParser();//Парсим документ
            XmlDoc = parser.parseFromString(Xmltext.responseText, "text/xml");//и сохраняем его в XMLDOC
        }    
    }
}

function select_facult(form)//Выбранный факультет
{
    let select = document.getElementById("select_facult");//сохраняем в select переменную DOM
    selected_facult = select.value;//смотрим, что выбрал пользователь
    flag1 = true;//ставим флаг доступа в true, что бы разрешить показ групп после выбора курса
    if (flag2 == true)//Если курс уже выбран, то после выбора факультета вызываем функции для
    {                 //поиска групп и их вывода на экран
        help_select_groop();
        change_groops();
    }
}   

function select_course(form)
{
    let select = document.getElementById("select_course");//сохраняем в select переменную DOM
    selected_course = select.value;//смотрим, что выбрал пользователь
    flag2 = true;//ставим флаг доступа в true, что бы показать, что группы выбраны
    if (flag1 == true)//если факультет выбран, то
    {                 //вызываем функции для поиска групп и вывода их на экран
        help_select_groop();
        change_groops();
    }
    else//если факультет не выбран
    {
        alert("Выберите факультет!")//говорим, что пора его выбрать
    }
}

function select_groop(form)//Выбор группы
{
    let select = document.getElementById("select_groop");//сохраняем в select переменную DOM
    selected_groop = select.value;//смотрим, что выбрал пользователь
    help_select_name();//вызываем функции для поиска людей, которые находятся в этой группе
    get_array_student();
    changes_name();
}

function select_name(form)//Выбор студента
{
    let select = document.getElementById("select_name");//сохраняем в select переменную DOM
    let value = select.value;//смотрим, что выбрал пользователь
}

function help_select_groop()//функция для выбора нужной группы
{
    change_xml = XmlDoc.getElementsByTagName("faculty" + selected_facult)[0]//ищем нужный тег в xml документе с помощью
    .getElementsByTagName("course" + selected_course)[0];//глобальных переменных, в которые мы сохраняли что выбирал пользователь
    get_array_groop();//Вызываем функцию для получения массива групп
}

function help_select_name()//Функция для выбора нужного студента
{
    change_name = change_xml.getElementsByTagName("groop_" + arr_groop[selected_groop])[0];//ищем нужный тег в xml с помощью
}                                 //ранее подготовленного массива групп и глобальной переменной, которую мы подготовили заранее
                                                                        
function get_array_student()//получить массив студентов
{
    arr_student[0] = change_name.getElementsByTagName("student")[0].childNodes[1].innerHTML;//получаем массив студентов
    arr_student[1] = change_name.getElementsByTagName("student")[1].childNodes[1].innerHTML;
}

function get_array_groop()//получить массив груп
{
    arr_groop[0] = change_xml.getAttribute('groop1');//названия групп я записал в атрибуты, получаю значение атрибутов
    arr_groop[1] = change_xml.getAttribute('groop2');//в теге курса, там они все указаны
    arr_groop[2] = change_xml.getAttribute('groop3');
}

function change_groops()//изменяем значения выпадающего меню(группы)
{
    document.getElementById("select_groop").options[1].text = "Выберите Группу";//Первый пункт без изменений
    document.getElementById("select_groop").options[1].text = arr_groop[0];//Дальше просто проходимся по созданному массиву групп
    document.getElementById("select_groop").options[2].text = arr_groop[1];//и меняем значения на нужные 
    document.getElementById("select_groop").options[3].text = arr_groop[2];
}

function changes_name()//изменяем значения выпадающего меню
{
    document.getElementById("select_name").options[1].text = "Выберите Студента";//Первый пункт без изменений
    document.getElementById("select_name").options[1].text = arr_student[0];//Дальше просто проходимся по созданному массиву
    document.getElementById("select_name").options[2].text = arr_student[1];//студентов и меняем значения на нужные 
}