let arr = [];//массив для хранения радиокнопок
let arr_study = [];//Массив оценок

function foo1()
{
    arr[0] = document.getElementById("metrologia0");//заполняем массив всеми радиокнопками
    arr[1] = document.getElementById("metrologia1");
    arr[2] = document.getElementById("metrologia2");
    arr[3] = document.getElementById("OOP0");
    arr[4] = document.getElementById("OOP1");
    arr[5] = document.getElementById("OOP2");
    arr[6] = document.getElementById("Arxcetectyra0");
    arr[7] = document.getElementById("Arxcetectyra1");
    arr[8] = document.getElementById("Arxcetectyra2");
    arr[9] = document.getElementById("teoria0");
    arr[10] = document.getElementById("teoria1");
    arr[11] = document.getElementById("teoria2");
    arr[12] = document.getElementById("economic0");
    arr[13] = document.getElementById("economic1");
    arr[14] = document.getElementById("economic2");
    arr[15] = document.getElementById("BazaD0");  
    arr[16] = document.getElementById("BazaD1");  
    arr[17] = document.getElementById("BazaD2");  
    arr[18] = document.getElementById("fizra0");  
    arr[19] = document.getElementById("fizra1");  
    arr[20] = document.getElementById("fizra2");
}

function foo2()
{
    foo1();//Смотрим, какие оценки выставил пользователь
    let count = 0;//счетчик, для прохода по массиву оценок
    for (let i = 0; i < 21; i++)//проходимся по всем радиокнопкам
    {
        if (arr[i].checked)//если радиокнопка выбрана
        {
            arr_study[count] = arr[i].value*1;//записываем ее значение в массив с оценками (*1 что бы перевести в int) 
            count++;                          //счетчик +1
        }
    }
    count = 0;//обнуляем счетчик, теперь это у нас будет средним баллов
    for (let i = 0; i < arr_study.length; i++) 
    {
        count += arr_study[i];//складываем все баллы при помощи массива
    }
    count = count / 7;//и делим на количество оценок
    document.getElementById("SR_BALL").textContent = "Средний балл за контрольный срок составляет: " + count;//выводим
}

function foo3()
{
    for (let i = 0; i < arr_study.length; i++)//обнуляем массив оценок
    {
        arr_study[i] = 0;
    }
    for (let i = 0; i < arr.length; i++)//обнуляем массив радиокнопок
    {
        arr[i] = 0;
    }
    document.getElementById("metrologia0").checked = true;//ставим радиокнопки в начальное положение
    document.getElementById("metrologia1").checked = false;
    document.getElementById("metrologia2").checked = false;
    document.getElementById("OOP0").checked = true;
    document.getElementById("OOP1").checked = false;
    document.getElementById("OOP2").checked = false;
    document.getElementById("Arxcetectyra0").checked = true;
    document.getElementById("Arxcetectyra1").checked = false;
    document.getElementById("Arxcetectyra2").checked = false;
    document.getElementById("teoria0").checked = true;
    document.getElementById("teoria1").checked = false;
    document.getElementById("teoria2").checked = false;
    document.getElementById("economic0").checked = true;
    document.getElementById("economic1").checked = false;
    document.getElementById("economic2").checked = false;
    document.getElementById("BazaD0").checked = true;  
    document.getElementById("BazaD1").checked = false;  
    document.getElementById("BazaD2").checked = false;  
    document.getElementById("fizra0").checked = true;  
    document.getElementById("fizra1").checked = false;  
    document.getElementById("fizra2").checked = false;
    document.getElementById("SR_BALL").textContent = "Средний балл за контрольный срок составляет: 0";//ну и обновляем строку
}