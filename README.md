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
- **Database:** Store users, suggested passwords, and votes
- **Login:**Register and login users. Credentials securely stored in database. Can't vote unless authenticated.
- **WebSocket:**As each user submits a password or votes, their password/votes are broadcast to all other users. 
- **React:**Application ported to use the React web framework(not actually sure what this is)
##October 28 startup assignment
-created login.js page which is connected to my index.html and stores login information in local storage
-created createpoll.js page which connects setters for Device Name, password length, and several booleans. Capitilization method
has a toggle function which uses .css and javascript to clarify which option is currently selected
-Assignment currently unfinishes, sorry! Will be caught up, although unlikely will this happen before the midtermIn the following code, what does the link element do?
##Midterm Notes
    - In the following code,  what does a div tag do?
  <span style = 'color: red;> - Grouping element, short for divider. </span>
    - In the following code, what is the difference between the #title and .grid selector?
    - In the following code, what is the difference between padding and margin?
    - Given this HTML and this CSS how will the images be displayed using flex?
    - What does the following padding CSS do?
    - What does the following code using arrow syntax function declaration do?
    - What does the following code using map with an array output?
    - What does the following code output using getElementByID and addEventListener?
    - What does the following line of Javascript do using a # selector?
    - Which of the following are true? (mark all that are true about the DOM)
    - By default, the HTML span element has a default CSS display property value of: 
    - How would you use CSS to change all the div elements to have a background color of red?
    - How would you display an image with a hyperlink in HTML?
    - In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
    - Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
    - What will the following code output when executed using a for loop and console.log?
    - How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
    - What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
    - How do you declare the document type to be html?
    - What is valid javascript syntax for if, else, for, while, switch statements?
    - What is the correct syntax for creating a javascript object?
    - Is is possible to add new properties to javascript objects?
    - If you want to include JavaScript on an HTML page, which tag do you use?
    - Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
    - Which of the following correctly describes JSON?
    - What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
    - Which of the following console command creates a remote shell session?
    - Which of the following is true when the -la parameter is specified for the ls console command?
    - Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
    - Is a web certificate is necessary to use HTTPS.
    - Can a DNS A record can point to an IP address or another A record.
    - Port 443, 80, 22 is reserved for which protocol?
    - What will the following code using Promises output when executed?
     

