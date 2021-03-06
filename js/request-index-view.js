let requestsTable;
let tableBody = document.getElementById('table-body');
let pendingRequestsButton = document.getElementById('pending-requests-button');
let approvedRequestsButton = document.getElementById('approved-requests-button');


let url = 'https://api.myjson.com/bins/f0kn3';

let fetchAllRequests = (url) => {
  requestsTable = document.getElementById('requests-table');
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      let requests = JSON.parse(xhr.responseText);
      console.log(requests);
      requests.forEach(request => {
        let row = document.createElement('tr');

        let idCell = document.createElement('td');
        idCell.innerHTML = request.id;
        row.appendChild(idCell);

        let empIdCell = document.createElement('td');
        empIdCell.innerHTML = request.requesterId;
        row.appendChild(empIdCell);

        let purposeCell = document.createElement('td');
        purposeCell.innerHTML = request.purpose;
        row.appendChild(purposeCell);

        let requestAmountCell = document.createElement('td');
        requestAmountCell.innerHTML = request.requestAmount;
        row.appendChild(requestAmountCell);

        let reviewingManagerIdCell = document.createElement('td');
        reviewingManagerIdCell.innerHTML = request.reviewerId;
        row.appendChild(reviewingManagerIdCell);

        let receipt = document.createElement('td');
        let anchorTag = document.createElement('a');
        anchorTag.href = '#';
        anchorTag.text = 'Image';
        receipt.innerHTML = anchorTag;
        row.appendChild(receipt);

        row.onclick = () => {
          console.log('The Row was clicked!!');
        };

        tableBody.appendChild(row);
      });


    }
  };

};

pendingRequestsButton.addEventListener('click', () => {
  // let url = 'some_url';
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  fetchAllRequests(url);
});

approvedRequestsButton.addEventListener('click', () => {
  // let url = 'some_url';
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
  fetchAllRequests(url);
});


let initWindow = () => {
  fetchAllRequests(url);
};

window.onload = initWindow;
