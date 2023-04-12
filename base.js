document.write("JS learn for 1 month");
//вывод информации в строку на страницу
console.log("ahahahahah");
console.info("nu lol toze samoe");
console.error("format oshibki nu hz");
//можно выводить в консоль масивы обьекты для расмотрения структуры или состояния 
console.warn("preduprezdenie");
//создание файла js для более удобного кодинга
console.error("proverka faila");
//переменные (var)
var num = 5;
num = 20;
//num название
var nuum = 10;
console.log("peremennaya: " + num + ".");
console.error(nuum);
//константы не изменяемые
const nyam = 12;
//больше нельзя менять 
//в вар можно устанавливать целые дробные и т.д
var number;
number = false;
number = "stroka";
console.log(num + nuum);
//матиматические действия в JS
var num_1 = 5.9;
var num_2 = 20;
console.log((num_1 - num_2 + num_1));
var num_3 = 3;
num_3 = num_3 + 20;
console.log (num_3)
var str_1 = Number("12");
var str_2 = Number("2");
console.log(str_1 + str_2);
Math.PI
console.log(Math.PI);
console.log(Math.max(4, -5, 5,6 ,6 , 7, 7));
//условные операторыё(конструкции)
//за счет которой можно провирить правильность 
var con = 20;
if(con == 5){
    console.log("ok");
} 
else if(con < 5){
console.log("!ok");
}
else if(con >= 10){
    console.log("norm");
}
 else {
    console.log("net");
 }
//else if выполняется только правильное правильное и все остальные будут проигнорированы
var house = true;
if(con == 10 && house == true){
    console.log("hahaha");
}else{
    console.log("loh");
}
var stroka = "word";
switch(stroka) {
    case "4": 
    console.log("pravilno");
    break;
    case "wordd":
        console.log("ezz");
        break;
 default:
    console.log("default");
}
//else для чисел switch case для проверки определенного значения
var maslov = "maslow dolbaeb";
console.log("maslow dolbaeb");
if (maslov != "maslow dolbaeb"){
    
}else {
    console.log("dolbaeb v dvoine")
}
//масивы
var arr = [5, true, 5.4, "booom", 100];
arr[3] = "shhhhh";
console.log(arr.length);
//многомерные
var matrix = [[5],["shhhhhhh", 2.3, 0], [-100, "hahaha"]];
matrix[1][2] = 90;
console.log(matrix);
var love = "Anzhelika";
console.log(love);
if (love == "Anzhelika"){
    console.log("true love<3");
}
//ehhh lubov' v code hahahaha blya s katushek siehal
//операторы циклов, циклы
for(var i = 20; i > 2; i /= 2 ){
    console.log(i);
}
//в цикле ты устанавливаешь чему равна переменная, 
//условие при котором будет цикл выполнятся, 
//и то как переменная будет изменятся.
//буливые и строки не работают в цикле for
var p = 0;
while(p < 20){
    p ++;
    console.log(p);
}
//тоже самое но внутри цикла прописывается только условие 
//можно использовать булевые выражения 
//var t = true;
//while(t){}
// такое запускать нельзя бесконечный цикл
var x = 0;
do {
    console.log(x);
    x ++;
}while(x < 50);
for(var o = 10; o < 20; o ++){
    if(o % 2 == 0)
    continue;
    console.log(o);
}
var l = 12;
do {
    console.log(l);
    l ++;
}while(l < 20);
for(var o = 10; o < 20; o ++){
    if(o % 2 == 0)
    break;
    console.log(o);
}
//break полный выход 
//continue пропуск определеных значений
var rr = [2, 3, 5, 6, 7, 8, 20];
for(var z = 0; z < rr.length; z++){
    rr[z] *= 2;
    console.log("element" + (z + 1) + ":" + rr[z])
}
//всплывающие окна
alert("hahahahha maslow loh");
var data = confirm("lol vse ravno");
//alert просто сообщение
//confirm всплывающте окно с подверждением
if (data) {
    alert("тыchmo" );
}
var hehe = prompt("skoka let vam", 0);
console.log(hehe);

var person = null;
if(confirm("ti uveren")){
    person = prompt("vashe imya");
    alert("qq ," + person);

}else{
    alert("otmena");
}
//функции что такое функции для чего они нудны
//это подпрограмма которая содежит код
//позволяют выносить определенную программы для ссылки на него 
//методы позже ну принципе +- тоже самое 
//v js mnogo vstroenih function
function inf(){
    console.log("qq");
    console.log("!!!");
}
inf();
//fuction with parametr
function info(word){
    console.log(word + "!!!");
    console.log("!!!");
}
info("hi bithes!");
function summa(a ,b){
    var res = a + b;
    console.log(res);
    info(res);
}
summa (6 ,2);
//in fuction may made all you want
function plus (arrr) {
    var mraz = 0;
    for(var hs = 0; hs < arrr.length; hs++){
        mraz += arrr[hs];
    }
    return mraz
    //console.log(mraz);
}
var array = [5, 6, 7, 8, 9, 10];
var array_2 = [4, 7, 8, 1, 902, 10];
var array_3 = [85, 67, 57, 48, 39, 110];
var gavno = plus(array);
console.log(gavno);
//plus(array);
plus(array_2);
plus(array_3);
//local variables
//var aaaa = 10;- global
function aaa(){
    var aaaa = 11;//local in function variables
    console.log(aaaa);
}
aaa();
//события 
//отслеживать действия пользователя)
function clickbt(){
    alert('ti chmo');
    console.log("hahahaha");
}