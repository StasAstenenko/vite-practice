import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import icon from './public/favicon.svg';

// ЗАДАЧА 1
// Якщо імейл і пароль користувача збігаються, зберігай дані з форми при сабміті
// у локальне сховище і змінюй кнопку Login на Logout і роби поля введення
// недоступними для змін.
// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити Logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці Logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.
// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.



// const USER_DATA = {
//   email: "user@mail.com",
//   password: "secret",
// };

// const LS_K = 'user_data';

// const formElement = document.querySelector('.login-form');
// const emailElem = formElement.querySelector('[name="email"]');
// const passElem = formElement.querySelector('[name="password"]');
// const btnElem = formElement.querySelector('.login-btn');

// formElement.addEventListener('submit', e => {
//     e.preventDefault();

//     const email = emailElem.value.trim();
//     const password = passElem.value.trim();

//     if (btnElem.textContent === 'Logout') {
//         localStorage.removeItem(LS_K);
//         formElement.reset();
//         emailElem.removeAttribute('readonly');
//         passElem.removeAttribute('readonly');

//         btnElem.textContent = 'Login';
//         return; 
//     }

//     if (email === '' || password === '') return iziToast.warning({
//             message: 'Треба заповнити усі поля',
//             iconUrl: icon
//         });


//     if (email !== USER_DATA.email || password !== USER_DATA.password)  return iziToast.error({
//             message: 'Не вірний пароль або імейл',
//             iconUrl: icon
//     });

//     localStorage.setItem(LS_K, JSON.stringify({ email, password }));
//     btnElem.textContent = 'Logout';

//     emailElem.setAttribute('readonly', true);
//     passElem.setAttribute('readonly', true);
//     iziToast.success({
//         message: 'Вітаємо',
//     });

// })

// window.addEventListener('DOMContentLoaded',() => {
//     const saveData = localStorage.getItem(LS_K);
//     if (!saveData) return;
//     const parseData = JSON.parse(saveData);

//     emailElem.value = parseData.email || '';
//     passElem.value = parseData.password || '';

//     btnElem.textContent = 'Logout';

//     emailElem.setAttribute('readonly', true);
//     passElem.setAttribute('readonly', true);
// });

// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {
//   return "hello world";
// }

// const promise = new Promise(resolve => {
//     setTimeout(() => resolve('hello world'), 2000);
// });

// promise.then(message => console.log(message));
