
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
      this.passwordLength = 0;
      this.capitalize = true;
      this.specialChar = true;
      this.includeNumb = true;
      this.existingGrp = [];
      this.newGrp = [];
    }

    setDeviceName() {
        this.deviceName = document.getElementById("devicename");
        if(this.deviceName){
            console.log("Success: Device Name = " + this.deviceName.value);
        } else {
            console.error("No device name provided");
        }
    }

    setPassLength() {
        this.passWordLength = document.getElementById("length");
        if(this.passWordLength){
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
            });
            noCap.addEventListener('click', () =>{
                this.capitalize = false;
            });
        }
    }
    setSpecialChars(){
        const yesChar = document.querySelector('.specialchar .yesChar');
        const noChar = document.querySelector('.specialchar .noChar');
        if(yesChar && noChar){
            yesChar.addEventListener('click', () =>{
                this.specialChar = true;
            });
            noChar.addEventListener('click', () =>{
                this.specialChar = false;
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
            });
            noNum.addEventListener('click', () =>{
                this.includeNumb = false;
                console.log('Include numbers set to no');
            });
        }
    }
}

const createPollObjectInstance = new Poll();
