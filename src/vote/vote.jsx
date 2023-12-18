import React from 'react';
import './vote.css';

export function Vote() {
  const [deviceName, setDeviceName] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);

  React.useEffect(() => {
    displayDeviceName();
    displayThirdName()
  }, []);

  function displayDeviceName() {
    const containerEl = document.getElementById("deviceInfo");
    const storedPoll = localStorage.getItem("poll");
    const cpoll = JSON.parse(storedPoll);
    const deviceName = cpoll?.deviceName || ''; 
    containerEl.textContent = deviceName;
  }

  function setPassword() {
    const inputElement = document.getElementById("password");
    const submitButton = document.getElementById("button");
    const storedPoll = localStorage.getItem("poll");
    const cpoll = JSON.parse(storedPoll);
    const passLength = cpoll && cpoll.passwordLength !== undefined ? cpoll.passwordLength : 0;
    const characters = cpoll && typeof cpoll.specialChars === 'boolean' ? cpoll.specialChars : false;
    const number = cpoll && typeof cpoll.includeNumbers === 'boolean' ? cpoll.includeNumbers : false;
    const capital = cpoll && typeof cpoll.capitalization === 'boolean' ? cpoll.capitalization : false;

    let canSubmit = true;

    if (inputElement) {
      let passValue = inputElement.value;

      if (passValue.length < passLength) {
        alert("Password length must be at least " + passLength + " characters long");
      }
      if (number === true) {
        let hasNum = /\d/.test(passValue);
        if (!hasNum) {
          alert("Password must contain a number");
          canSubmit = false;
        }
      }
      if (characters === true) {
        let hasChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(passValue);
        if (!hasChar) {
          alert("Password must contain a special character");
          canSubmit = false;
        }
      }
      if (capital === true) {
        let hasCap = /[A-Z]/.test(passValue);
        if (!hasCap) {
          alert("Password must contain a capital letter");
          canSubmit = false;
        }
      }
      if (canSubmit) {
        let storedUser = localStorage.getItem("userName");
        const userPassword = inputElement.value;
        populateTable(storedUser, userPassword);
        setIsButtonDisabled(true);
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
      });
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

    submitButton.addEventListener('click', function () {
      if (!submitButton.deactivated) {
        votesCell.textContent = parseInt(votesCell.textContent) + 1;
        submitButton.deactivated = true;

        const submitButtons = document.querySelectorAll('button');
        submitButtons.forEach(button => {
          if (button !== submitButton) {
            button.deactivated = true;
          }
        });
      }
    });

    submitCell.appendChild(submitButton);
    row.appendChild(submitCell);

    tableBody.appendChild(row);
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div>
      <div className="submission">
        <label htmlFor="password">Password Submission</label>
        <input type="text" id="password" />
        <button id="button" disabled={isButtonDisabled} className="btn btn-primary" onClick={setPassword}>
          Submit
        </button>
      </div>
      <div className="device">
        <label htmlFor="deviceInfo">Device:</label> 
        <span id = "deviceInfo"></span> 
      </div>
      <table className="voting">
        <thead>
          <tr>
            <th>Username</th>
            <th>Suggestion</th>
            <th>Votes</th>
            <th>Submit</th>
          </tr>
        </thead>
        <tbody id="tableBody">
        </tbody>
      </table>
    </div>
    </main>
  );
}