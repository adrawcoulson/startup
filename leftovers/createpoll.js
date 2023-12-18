const GameEndEvent = 'gameEnd';
const GameStartEvent = 'gameStart';
class Poll {
    deviceName;
    passWordLength;
    capitalize;
    specialChar;
    includeNumb;
    existingGrp;
    newGrp;
    socket;
  
    constructor() {
      this.deviceName = '';
      this.passWordLength = 0;
      this.capitalize = true;
      this.specialChar = true;
      this.includeNumb = true;
      this.existingGrp = [];
      this.newGrp = [];
      this.configureWebSocket();
    }

    setDeviceUserName() {
        const inputElement = document.getElementById("devicename");
        if (inputElement) {
          this.deviceName = inputElement.value;
          localStorage.setItem("devicename", this.deviceName);
        } else {
          console.error("No device name provided");
        }
      }

    setPassLength() {
        const inputElement = document.getElementById("length");
        if(inputElement){
            this.passWordLength = inputElement.value;
            localStorage.setItem("passlength", this.passWordLength);

        } else {
            console.error("Password length not provided");
        }
    }
    setCapitalization(){
        const yesCap = document.querySelector('.capitalization .yesCap');
        const noCap = document.querySelector('.capitalization .noCap');
        if(yesCap && noCap){
            yesCap.addEventListener('click', () =>{
                this.capitalize = true;
                yesCap.classList.add('active');
                noCap.classList.remove('active');
            });
            noCap.addEventListener('click', () =>{
                this.capitalize = false;
                yesCap.classList.remove('active');
                noCap.classList.add('active');

            });
        }
    }
    setSpecialChars(){
        const yesChar = document.querySelector('.specialchar .yesChar');
        const noChar = document.querySelector('.specialchar .noChar');
        if(yesChar && noChar){
            yesChar.addEventListener('click', () =>{
                this.specialChar = true;
                yesChar.classList.add('active');
                noChar.classList.remove('active');

            });
            noChar.addEventListener('click', () =>{
                this.specialChar = false;
                yesChar.classList.remove('active');
                noChar.classList.add('active');

            });
        }
    }
    setIncludeNum(){
        const yesNum = document.querySelector('.includenumbers .yesNum');
        const noNum = document.querySelector('.includenumbers .noNum');
        if(yesNum && noNum){
            yesNum.addEventListener('click', () =>{
                this.includeNumb = true;
                yesNum.classList.add('active');
                noNum.classList.remove('active');
            });
            noNum.addEventListener('click', () =>{
                this.includeNumb = false;
                yesNum.classList.remove('active');
                noNum.classList.add('active');
            });
        }
    }

    getPlayerName() {
        return localStorage.getItem('userName') ?? 'Other player';
    }
    
    async submitDevice(){
        const poll = new Poll();
        poll.setDeviceUserName();
        poll.setPassLength();
        this.setCapitalization();
        poll.capitalize = this.capitalize;
        this.setSpecialChars();
        poll.specialChar = this.specialChar;
        this.setIncludeNum();
        poll.includeNumb = this.includeNumb;
        let stringifiedpoll = JSON.stringify(poll);
        localStorage.setItem("poll", stringifiedpoll);
        console.log(stringifiedpoll);

        await this.saveDevice(poll);
        //window.location.href = "vote.html";

    }

    async saveDevice(device) {
        const userName = this.getPlayerName();
        const newDevice = {name: userName, device: device};
        const devicesName = localStorage.getItem("devicename");
    
        try {
            console.log("INSIDE TRY");
          const response = await fetch('/api/device', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(newDevice),
          });

          // Let other players know the game has concluded
        this.broadcastEvent(userName, GameEndEvent, devicesName);
    
          // Store what the service gave us as the high scores
          const devices = await response.json();
          localStorage.setItem('devices', JSON.stringify(devices));
        } catch {
            console.log("Save device threw error");

          // If there was an error then just track scores locally
          this.updateDevicesLocal(newDevice);
        }
      }

      updateDevicesLocal(newDevice) {
        let devices = [];
        const devicesText = localStorage.getItem('devices');
        if (devicesText) {
          devices = JSON.parse(devicesText);
        }
        devices.push(newDevice);
        localStorage.setItem('devices', JSON.stringify(devices));
    }
    

        configureWebSocket() {
            console.log("in configureWebSocket");
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
        this.socket.onopen = (event) => {
        this.displayMsg('system', 'game', 'connected');
        };
        this.socket.onclose = (event) => {
        this.displayMsg('system', 'game', 'disconnected');
        };
        this.socket.onmessage = async (event) => {
        const msg = JSON.parse(await event.data.text());
        if (msg.type === GameEndEvent) {
            this.displayMsg('player', msg.from, `logged a new device: ' ${msg.value}`);
        } else if (msg.type === GameStartEvent) {
            this.displayMsg('player', msg.from, `started a new game`);
        }
        };
    }

    displayMsg(cls, from, msg) {
        const playerName = this.getPlayerName();
        const chatText = document.querySelector('#player-messages');
        chatText.innerHTML =
          `<div class="event"><span class="${playerName}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
      }

    broadcastEvent(from, type, value) {
        const event = {
        from: from,
        type: type,
        value: value,
        };
        this.socket.send(JSON.stringify(event));
    }
}







async function loadPasswords() {
    let passwords = [];
    try {
      const response = await fetch('/api/passwords');
      scores = await response.json();
      localStorage.setItem('passwords', JSON.stringify(passwords));
    } catch (error) {
        console.error("Error in loadPasswords:", error);
        throw error;
    }
}

const createPollObjectInstance = new Poll();
