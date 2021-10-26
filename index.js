// Import stylesheets
import './style.css';

// let input1 = document.querySelector('#input1');
// let outputDiv = document.querySelector('#output');
// let input2 = document.querySelector('#input2');

// input2.addEventListener('input', () => {
//   if (input1.value.includes(input2.value)) {
//     outputDiv.innerText = 'found';
//   } else {
//     outputDiv.innerText = 'not found';
//   }
// });

////////////////////////

// let fetchBtn = document.querySelector('#fetch');
// let outputDiv = document.querySelector('#output');

// fetchBtn.addEventListener('click', () => {
//   outputDiv.innerHTML = '';
//   fetch('https://randomuser.me/api/?results=10')
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data);
//       let newData = Object.values(data);
//       console.log(newData[0]);
//       newData[0].forEach((element, index) => {
//         let display = document.createElement('p');
//         display.innerHTML = `${newData[0][index].dob.age}`;
//         if (newData[0][index].dob.age > 45) {
//           display.style.color = 'red';
//         } else {
//           display.style.color = 'green';
//         }
//         outputDiv.append(display);
//       });
//     });
// });

//////////////////////////////////////

// let img = document.querySelector('#img');
// let link = document.querySelector('#link');
// let name = document.querySelector('#name');
// let generate = document.querySelector('#generate');

// generate.addEventListener('click', () => {
//   fetch('https://api.github.com/users')
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       data.forEach((element, index) => {
//         name.innerHTML = `Img : <img src="${data[index].avatar_url}"> <br> Name : ${data[index].name} <br> Url : <a href="${data[index].html_url}">Link</a> <br> `;
//       });
//     });
// });

/////////////////////////////
