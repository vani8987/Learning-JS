// function GetTheAmount() {
//     let salaries = {
//         John: 100,
//         Ann: 160,
//         Pete: 130
//     };

//     let summ = 0;


//     for (let key in salaries) {
//         summ += salaries[key];
//     };

//     console.log(summ);

// };

// GetTheAmount();

// Создайте функцию multiplyNumeric(obj), которая умножает все 
// числовые свойства объекта obj на 2.

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
 
//  function multiplyNumeric(obj) {
//     for(key in obj) {
//        if (typeof obj[key] === 'number') {
//           obj[key] *= 2;
//        }
//     }
//  }
  
//  multiplyNumeric(menu); // изменили размер
//  console.log(menu);







// изучение DOM;

// задание 1;

// Вывести кнопку с текстом "Привет", при нажатии; 
// на неё выводим alert c текстом "Привет Мир!";

const BtnTaskOne = document.querySelector('#BtnTaskOne');

BtnTaskOne.addEventListener('click', function() {
    alert("Привет Мир!");
});

// задание 2;

// Выводим кнопку с текстом "Заполнить" ;
// и незаполненный инпут, при клике на кнопку, заполняем инпут текстом "test@email.ru";

const EmailInputTaskTwo = document.querySelector('#EmailInputTaskTwo');
const BtnTaskTwo = document.querySelector('#BtnTaskTwo');
const BtnDeletions = document.querySelector('#BtnDeletions');



BtnTaskTwo.addEventListener('click', function() {
    BtnTaskTwo.innerText = "заполнено"
    EmailInputTaskTwo.value = 'test@email.ru'
    EmailInputTaskTwo.focus()
    BtnDeletions.innerText = 'удалить данные'
});

BtnDeletions.addEventListener('click', function() {
    BtnTaskTwo.innerText = "заполнить"
    EmailInputTaskTwo.value = ''
    EmailInputTaskTwo.focus()
    BtnDeletions.innerText = 'данных нет'
});

// задание 3;

// Выводим кнопку и инпут, в инпуте можно ввести любой и текст и при нажатии на кнопку,
// выводится алерт с текстом "Вы ввели 'текст инпута'" или "Вы ничего не ввели в поле";

const InputTaskThreeTaskTwo = document.querySelector('#InputTaskThree');
const BtnTaskThree = document.querySelector('#BtnTaskThree');

BtnTaskThree.addEventListener('click', function() {
    if (!InputTaskThreeTaskTwo.value) {
        alert("Вы ничего не ввели в поле");
    } else {
        const data = InputTaskThreeTaskTwo.value;
        alert(`Вы ввели: ${data}`); 
    }
});


// задание 4;

// Выводим кнопку с текстом "Поменять" и два инпута, при клике на;
// кнопку инпуты меняются своим введеным текстом;

const InputTaskThree_One = document.querySelector('#InputTaskFourth_One');
const InputTaskThree_Two = document.querySelector('#InputTaskFourth_Two');
const BtnTaskFourth = document.querySelector('#BtnTaskFourth');


BtnTaskFourth.addEventListener('click', ()=> {
    if (!InputTaskThree_Two.value) {
        InputTaskThree_Two.value = InputTaskThree_One.value;
        InputTaskThree_Two.focus();
        InputTaskThree_One.value = '';
    } else {
        InputTaskThree_One.value = InputTaskThree_Two.value;
        InputTaskThree_One.focus();
        InputTaskThree_Two.value = '';
    }
});


// задание 5;

// Выводим две кнопки "заблокировать" и "разблокировать" и инпут. Одна;
// из них блокирует инпут с помощью атрибута disabled, а другая разблокирует;

const InputTaskFive = document.querySelector('#InputTaskFive');
const BtnTaskFiveBlocking = document.querySelector('#BtnTaskFiveBlocking');
const BtnTaskFiveUnlock = document.querySelector('#BtnTaskFiveUnlock');


BtnTaskFiveBlocking.addEventListener('click', ()=> {
    if (InputTaskFive.hasAttribute('disabled') !== 'disabled') {
        InputTaskFive.setAttribute('disabled', 'disabled');
        InputTaskFive.classList.add('BlockedInputTaskFive')
    }
});

BtnTaskFiveUnlock.addEventListener('click', ()=> {
    if (InputTaskFive.getAttribute('disabled') == 'disabled') {
        InputTaskFive.removeAttribute('disabled');
        InputTaskFive.classList.remove('BlockedInputTaskFive')
    }
});


// задание 6;

// Вывести любой квадрат и кнопку "скрыть квадрат". Когда мы нажимаем на скрыть, квадрат исчезает и текст кнопки меняется на "показать квадрат" и так можно кликать сколько угодно раз;


const BlockId = document.querySelector('#BlockId');
const Btnhide = document.querySelector('#Btnhide');


Btnhide.addEventListener('click', function() {
    if (!BlockId.classList.contains('BlockHide')) {
        BlockId.classList.add('BlockHide');
        Btnhide.innerText = 'показать блок';
    } else {
        BlockId.classList.remove('BlockHide');
        Btnhide.innerText = 'скрыть блок';
    };
});


// задание 7
 
// водим красный квадрат, при наведении на него он становиться зеленым, а когда уводим курсор от него, обратно красным.


const BlockRed = document.querySelector('#BlockRed');

BlockRed.addEventListener('mouseover', function() {
    
    if (!BlockRed.classList.contains('GreenBlock')) {
        BlockRed.classList.add('GreenBlock');
        BlockRed.classList.remove('RedBlock');
    
    } else {
        
        BlockRed.addEventListener('mouseout', function() {
            BlockRed.classList.add('RedBlock'); 
            BlockRed.classList.remove('GreenBlock');
        });
    };
});


