/* let name = prompt("Как вас зовут Мистер").trim().toLowerCase()

if (name.length % 2 ) {
    alert("User is not a found")
} else {
  alert("You are welcome sir")  
}

if (number % 2 == 0) {
    alert("Ваше число " + number + " четное");
} else {
    alert("Ваше число " + number + " нечетное");
} 

let pervoe = +prompt('Введите первое число для калькулятора')
let znak = prompt('+ - / *')
let vtoroe = +prompt('Введите второе число для калькулятора')

if(znak === "+") {
  alert(pervoe + vtoroe);
} else if(znak === "-") {
  alert(pervoe - vtoroe);
} else if(znak === "/") {
  alert(pervoe / vtoroe);
} else if(znak === "*") {
  alert(pervoe * vtoroe);
} else {
  alert('Вы что то ввели неправильно');
}   */


/* let month = prompt("Введите любую цифру от 1 до 12 а я скажу вам какой это сезон")
if (month > 0 && month < 3 && month === 12) {
    alert("Это зима сэр")
} else if (month >= 3 && month < 6) {
    alert("Это весна сэр")
} else if (month >= 6 && month < 9) {
    alert("Это лето сэр")    
} else if (month >= 9 && month < 12) {
    alert("Это осень сэр")
} else if (month > 12) {
    alert("Вы ввели число превышающее условия")
} else {
    alert("Извините сер вы что-то ввели не правильно ")
} */

/* let imya = prompt ("Как вас зовут сэр?").toLowerCase().trim()
if (imya.charAt() === 'a' && 'а' ) {
    age = prompt("Сколько вам лет?")
} else {
    alert ("Мы не пропускаем тех чье имя не начинается на букву 'A'")
}

if (age >= 20 && age <= 40) {
    money = prompt("Сколько у вас денег с собой?")
} else {
    alert ("Вы не подходите по возрасту")
} 

if (money >= 100) {
    alert("Отлично")
    alert("У нас есть 10 мест 7 из которых заняты")
    quantity =prompt("Сколько вас?")
} else {
    alert ("У вас недостатчно денег для клуба")
}

if (quantity < 4 && quantity > 0) {
    alert("Мы вас успешно зарегестрировали")
    alert ("Хорошего вам время провождения!")
} else {
    alert ("Слишком много людей")
} */

let guestList = prompt("Hello \n What is your surname?") 
if (guestList === "obama") {
    alert("Mister Obama \n You are welcome")
} else if (guestList === "trump") {
    alert("Mister Trump \n You are welcome")
} else if (guestList === "biden") {
    alert("Mister Biden \n You are welcome")
} else if (guestList === "putin") {
    alert("Добро пожаловать \n Владимир Владимирович")
} else if (guestList === "sizinpin") {
    alert("習近平你好")
} else if (guestList === "zelenskiy") {
    alert("Ласкаво просимо \n містер Зеленський")
} else ("Вы не президент")