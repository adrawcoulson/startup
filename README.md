# Family Pass
## **Elevator pitch**
The first lesson I was taught as a child was how to share. This valuable lesson followed me into adulthood where I'm still sharing with my family! We share wifi, televisions, online subscriptions, and musical libraries. But _sharing is caring_ loses its ring when you can't log into Netflix because your older brother changed the password to his fantasy football league name. Dont you wish there was a way to generate memorible passwords the entire family could access? Good, because that's where I come in.

## **Design**

![Family_Pass](https://github.com/adrawcoulson/startup/assets/108026507/11ad797f-e938-4042-8faf-3b5c5ecc6c53)

## **Key Features**
- Secure login over HTTPS
- Ablility to select/display Family Device
- Ability to take in password option
- Generates password to suggest based off of password requirements
- Allows user to suggest password to voting board
- Suggested passwords displayed in realtime
- Voting results displayed in realtime
- Ability for user to lock in vote for top choice

## Technologies
I am going to use the required technologies in the following ways:
- **HTML:** Uses correct HTML structure for application. Three HTML pages. One for login, one for generating passwords, and one for voting.
- **CSS:** Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast.
- **JavaScript:** Provides login, Family Device display, displaying other users votes/suggestions
- **Service:** Backend service with endpoints for:
    - login
    - retrieving suggested passwords
    - submitting votes
    - retrieving vote status
 
- **Service:** Backend service with endpoints for:
- **Database:** Store users, suggested passwords, and votes
- **Login:** Register and login users. Credentials securely stored in database. Can't vote unless authenticated.
- **WebSocket:** As each user submits a password or votes, their password/votes are broadcast to all other users. 
- **React:** Application ported to use the React web framework(not actually sure what this is)
- ## October 28 startup assignment
-created login.js page which is connected to my index.html and stores login information in local storage
-created createpoll.js page which connects setters for Device Name, password length, and several booleans. Capitilization method
has a toggle function which uses .css and javascript to clarify which option is currently selected
-Assignment currently unfinishes, sorry! Will be caught up, although unlikely will this happen before the midtermIn the following code, what does the link element do?
- # November 11 service assignment
- connected Node.js and Exceed to port 4000
- index.js has api/device and api/devices
- Vote.js calls third party endpoint. Random words are generated and populate the voting table to create a random voting option whenever the page reloads
- POST service endpoints exist within createpoll.js. On the create poll page, once you hit the submit button after filling out device information, the device calls a post api method and stores the device in an array on the server
- GET service endpoint exists within prevpass.js. Once the page loads, any devices you created on the createpoll page will automatically have the device name appear. Passwords column contains a placeholder.
- # November 18 Startup DB
- used database.js, and deployDB.json to create a Mongo database for my startup
- index.js calls database.js get and post for devices. 
- once you press 'submit' on the createpoll page, the device is stored on Mongo. All devices instantly appear on Previous Password, even if you refresh the page
- # November 18 Startup Login
- Implemented login logic for creating new users and logging in with previous username/passwords
- generates cookies for users that are logged in to restrict users ability to access the previous devices made in create poll on the "Previous Passwords" page. If you are not logged in, you cannot see these devices
- user and devices are seen within my MongoDB
- Login page structure changes whether you are logged in or not. If you are logged in, the Home page will give the the option to logout
