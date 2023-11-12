// let parsedUser = JSON.parse(localStorage.getItem("user"));
//parsedUser.name;
//document.getElementById("deviceInfo").innerHTML = parsedUser.name;
  
  function displayRandomDevice() {
    fetch('https://random-word-api.herokuapp.com/word')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.getElementById("deviceInfo");
        containerEl.textContent = data[0];
      });
  }
  
  displayRandomDevice();
