
class Group{
    users;
    passwords;
    groupName;

    constructor(){
        this.users = [];
        this.passwords = [];
        this.groupName = '';
    }
}

class Poll {
    deviceName;
    passWordLength;
    capitalize;
    specialChar;
    includeNumb;
    existingGrp;
    newGrp;
  
    constructor() {
      this.deviceName = '';
      this.passWordLength = 0;
      this.capitalize = true;
      this.specialChar = true;
      this.includeNumb = true;
      this.existingGrp = [];
      this.newGrp = [];
    }

    setDeviceUserName() {
        const inputElement = document.getElementById("devicename");
        if (inputElement) {
          this.deviceName = inputElement.value;
          console.log("Success: Device Name = " + this.deviceName);
          localStorage.setItem("devicename", this.deviceName);
        } else {
          console.error("No device name provided");
        }
      }

    setPassLength() {
        const inputElement = document.getElementById("length");
        if(inputElement){
            this.passWordLength = inputElement.value;
            console.log("Success: Password Length = " + this.passWordLength.value);
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
                console.log("Include Capitalization");
                yesCap.classList.add('active');
                noCap.classList.remove('active');
            });
            noCap.addEventListener('click', () =>{
                this.capitalize = false;
                console.log("Capitalization Unecassary");
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
                console.log("Include Special Characters");
                yesChar.classList.add('active');
                noChar.classList.remove('active');

            });
            noChar.addEventListener('click', () =>{
                this.specialChar = false;
                console.log("Special Characters Unecassary");
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
                console.log('Include numbers set to yes');
                yesNum.classList.add('active');
                noNum.classList.remove('active');
            });
            noNum.addEventListener('click', () =>{
                this.includeNumb = false;
                console.log('Include numbers set to no');
                yesNum.classList.remove('active');
                noNum.classList.add('active');
            });
        }
    }
    
    submitDevice(){
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
        let parsedpoll = JSON.parse(localStorage.getItem("poll"));
        console.log(parsedpoll);
        // window.location.href = "vote.html";


        parsedpoll.deviceName;
    }
}

const createPollObjectInstance = new Poll();
