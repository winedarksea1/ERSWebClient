
// Elements selected from the DOM
let myRevatureButtons = document.getElementsByClassName('revature-button');
let logoutButton = document.getElementById('logout-button');
let pendingRequestsEmployeeBtn = document.getElementById('pending-requests-employee-btn');
let pendingRequestsTable = document.getElementById('pending-requests-table');

let submitRequestButton;

let employeeName;
let employeeEmail;
let employeeUsername;
let employeeId;

let locationArray;
let paramString;
let userId;


// Register Event Listeners
logoutButton.addEventListener('click', () => {
  console.log("The logout button was clicked!!!! YAY!!!");
});

pendingRequestsEmployeeBtn.addEventListener('click', () => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.myjson.com/bins/11oz2n');
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      let requests = JSON.parse(xhr.responseText);
      requests.forEach(request => {
        let tableRow = document.createElement('tr');

        let requestIdCell = document.createElement('th');
        let requestPurposeCell = document.createElement('td');
        let requestAmountCell = document.createElement('td');

        requestIdCell.innerHTML = request.id;
        requestPurposeCell.innerHTML = request.purpose;
        requestAmountCell.innerHTML = request.requestAmount;

        tableRow.appendChild(requestIdCell);
        tableRow.appendChild(requestPurposeCell);
        tableRow.appendChild(requestAmountCell);

        pendingRequestsTable.appendChild(tableRow);
      });
    }
  };
});

let fetchUserProfile = () => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `http://localhost:8080//ers-project/FrontController/user.ajax?user-id=${userId}`);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let objectifiedData = JSON.parse(xhr.responseText);
      let user = objectifiedData[0];

      employeeName.innerHTML = `${user.firstName} ${user.lastName}`;
      employeeEmail.innerHTML = user.email;
      employeeUsername.innerHTML = user.username;
      employeeId.innerHTML = user.id;
    }
  };
};

let fetchUserRequests = () => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', `http://localhost:8080//ers-project/FrontController/request/getAllPendingRequestsForEmployee.ajax?user-id=${userId}`);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let requests = JSON.parse(xhr.responseText);
      requests.forEach(request => {
        let tableRow = document.createElement('tr');

        let requestIdCell = document.createElement('th');
        let requestPurposeCell = document.createElement('td');
        let requestAmountCell = document.createElement('td');

        requestIdCell.innerHTML = request.requestId;
        requestPurposeCell.innerHTML = request.purpose;
        requestAmountCell.innerHTML = `$${request.requestAmount}`;

        tableRow.appendChild(requestIdCell);
        tableRow.appendChild(requestPurposeCell);
        tableRow.appendChild(requestAmountCell);

        pendingRequestsTable.appendChild(tableRow);
      });
    }
  };
};

let initWindow = () => {
  employeeName = document.getElementById('employee-name');
  employeeEmail = document.getElementById('employee-email');
  employeeUsername = document.getElementById('employee-username');
  employeeId = document.getElementById('employee-id');

  locationArray = window.location.href.split('?');
  paramString = locationArray[1];
  userId = paramString.slice(3);
  console.log(userId);

  submitRequestButton = document.getElementById('submit-request');
  submitRequestButton.addEventListener('click', () => {
    window.location.href = `../html/request-form.html?id=${userId}`;
  });

  fetchUserProfile();
  fetchUserRequests();
};

window.onload = initWindow;
