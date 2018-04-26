console.log('Hello World');
let requestIdElement;
let requestAmount;
let requesterId;
let reviewerId;
let status;
let purpose;
let recieptImage;

let locationArray;
let requestId;

let url;

let fetchRequest = url => {
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.send();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let objectifiedData = JSON.parse(xhr.responseText);
      let request = objectifiedData[0];
      console.log(request);

      requestIdElement.innerHTML = request.requestId;
      requestAmount.innerHTML = `$${request.requestAmount}`;
      requesterId.innerHTML = request.requesterId;
      reviewerId.innerHTML = request.reviewerId;
      status.innerHTML = request.status;
      purpose.innerHTML = request.purpose;
      recieptImage.innerHTML = 'Reciept';
    }
  };
};

let initWindow = () => {
  requestIdElement = document.getElementById('request-id');
  requestAmount = document.getElementById('request-amount');
  requesterId = document.getElementById('requester-id');
  reviewerId = document.getElementById('reviewer-id');
  status = document.getElementById('status');
  purpose = document.getElementById('purpose');
  recieptImage = document.getElementById('reciept-image');

  locationArray = window.location.href.split('?');
  requestId = locationArray[1];

  url = `http://localhost:8080//ers-project/FrontController/request.ajax?request-id=${requestId}`;

  fetchRequest(url);
};

window.onload = initWindow;
