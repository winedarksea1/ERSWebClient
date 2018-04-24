// window.onload = onWindowLoad;

// Elements selected from the DOM
let myRevatureButtons = document.getElementsByClassName('revature-button');
let logoutButton = document.getElementById('logout-button');
let submitRequestButton = document.getElementById('submit-request');
let pendingRequestsEmployeeBtn = document.getElementById('pending-requests-employee-btn');
let pendingRequestsTable = document.getElementById('pending-requests-table');


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

// submitRequestButton.addEventListener('click', () => {
//   let listElement = document.createElement('li');
//   listElement.innerHTML = "Request #" + count;
//   pendingRequestsList.appendChild(listElement);
//   count++;
// });
