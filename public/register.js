class User{
    userName;
    password;

    constructor(){
        this.userName = "";
        this.password = "";
    }

    setUserName() {
        this.userName = document.getElementById("userName");
        if(this.userName){
            console.log("Success: username = " + this.userName.value);
        } else {
            console.error("No username provided");
        }
        localStorage.setItem("userName", this.userName.value);
    }

    setPassword() {
        this.password = document.getElementById("password");
        if(this.password){
            console.log("Success: Password = " + this.password.value);
        } else {
            console.error("No password provided");
        }
        localStorage.setItem("password", this.password.value);
    }

    registerUser(){
        debugger
        const user = new User();
        user.setUserName();
        user.setPassword();
        let stringifiedUser = JSON.stringify(user);
        localStorage.setItem("user", stringifiedUser);
        let parsedUser = JSON.parse(localStorage.getItem("user"));
        console.log(parsedUser);
        // <!--window.location.href = "landing.html";
    }
}
const createUserObjectInstance = new User();
