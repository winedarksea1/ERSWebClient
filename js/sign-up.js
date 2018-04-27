// let submitButton = document.getElementById('sign-up-button');
// let form = document.getElementById('new-user-form');
//
//
// submitButton.addEventListener('click', () => {
//   let firstName = document.getElementById('firstName').value;
//   let lastName = document.getElementById('lastName').value;
//   let email = document.getElementById('email').value;
//   let userName = document.getElementById('username').value;
//   let password1 = document.getElementById('password1').value;
//   // e.preventDefault();
//   let xhr = new XMLHttpRequest();
//   xhr.open('POST', "http://localhost:8080//ers-project/FrontController/user");
//   // xhr.setRequestHeader('Content-Type', 'application/json');
//   let body = {
//     firstName: firstName,
//     lastName: lastName,
//     email: email,
//     userName: userName,
//     password1: password1
//   };
//   console.log("Request Body: ");
//   console.log(body);
//   let json = JSON.stringify(body);
//   xhr.send(json);
//
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log(xhr.responseText);
//       console.log("success");
//     }
//   };
//   // window.location.href = 'request-index-view.html';
// });
