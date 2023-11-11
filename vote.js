let parsedUser = JSON.parse(localStorage.getItem("user"));
parsedUser.name;
document.getElementById("deviceInfo").innerHTML = parsedUser.name;
