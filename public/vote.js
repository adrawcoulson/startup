
function displayDeviceName() {
  const containerEl = document.getElementById("deviceInfo");
    let storedPoll = localStorage.getItem("poll");
    let cpoll = JSON.parse(storedPoll);
    let deviceName = cpoll.deviceName;
    containerEl.textContent = deviceName;
}
function setPassword() {
    const inputElement = document.getElementById("password");
    let storedPoll = localStorage.getItem("poll");
    let cpoll = JSON.parse(storedPoll);
    let passLength = cpoll.passWordLength;
    let characters = cpoll.specialChar;
    let number = cpoll.includeNumb;
    let capital = cpoll.capitalize;
    let canSubmit = true;
    if (inputElement) {
      let passValue = inputElement.value;
      if(passValue.length < passLength){
        alert("Password length must be at least " + passLength + " characters long");
      }
      if (number === true){
        let hasNum = /\d/.test(passValue);
        if(!hasNum) {
          alert("Password must contain a number");
          canSubmit = false;
        }
      }
      if (characters === true){
        let hasChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passValue);
        if(!hasChar) {
          alert("Password must contain a special character");
          canSubmit = false;
        }
      }
      if (capital === true){
        let hasCap = /[A-Z]/.test(passValue);
        if(!hasCap) {
          alert("Password must contain a capitol letter");
          canSubmit = false;
        }
      } 
      if(canSubmit){
      let storedUser = localStorage.getItem("userName");
      const userPassword = inputElement.value;
      populateTable(storedUser, userPassword);
    }  
  }
}

function displayThirdName() {
  fetch('https://random-word-api.herokuapp.com/word')
    .then((response) => response.json())
    .then((data1) => {
      const storedUser = data1[0];
      return fetch('https://random-word-api.herokuapp.com/word')
        .then((response) => response.json())
        .then((data2) => {
          const userPassword = data2[0];
          populateTable(storedUser, userPassword);
    });
  })
}

function populateTable(username, suggestion) {
  const tableBody = document.getElementById('tableBody');

    const row = document.createElement('tr');
    
    const usernameCell = document.createElement('td');
    usernameCell.textContent = username;
    row.appendChild(usernameCell);
    
    const suggestionCell = document.createElement('td');
    suggestionCell.textContent = suggestion;
    row.appendChild(suggestionCell);
    
    const votesCell = document.createElement('td');
    votesCell.textContent = "0";
    row.appendChild(votesCell);
    
    const submitCell = document.createElement('td');
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Vote';

    submitCell.appendChild(submitButton);
    row.appendChild(submitCell);
    
    tableBody.appendChild(row);
}

displayDeviceName();
displayThirdName();



