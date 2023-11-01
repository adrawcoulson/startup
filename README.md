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
    -
      -
      -
    ###Midterm Notes
    ## In the following code,  what does a div tag do?
    - Grouping element, short for divider.
    ## In the following code, what is the difference between the #title and .grid selector?
    - The # symbol is used to select elements by their ID attribute in HTML. When you use # followed by the ID name, it selects a specific element with that ID.
For example, if you have an HTML element with the id attribute set to "title" like this: <div id="title">Hello, World!</div>, you can select it in CSS using #title to apply styles specifically to that element.The . symbol is used to select elements by their class attribute in HTML. When you use . followed by the class name, it selects all elements that have that class.
For example, if you have multiple HTML elements with the class attribute set to "grid" like this: <div class="grid">Item 1</div>, <div class="grid">Item 2</div>, you can select all of them in CSS using .grid to apply styles to all elements with that class.
Classes can be applied to multiple elements in the same document, and multiple elements can share the same class.
    ## In the following code, what is the difference between padding and margin?
    - Padding is the space between the content of an element and its inner boundary or border.
It is used to control the space between the content and the element's border. Padding creates space within the element.
Padding is useful for adding internal spacing around an element's content, such as text or images.
Padding does not affect the positioning of adjacent elements; it only affects the element itself. Margin is the space outside an element's border and between it and adjacent elements.
It is used to control the space between elements on the page. Margin creates space between elements.
Margin affects the positioning of elements relative to one another. It defines the space between elements in the layout.
    ## Given this HTML and this CSS how will the images be displayed using flex?
  - flex-direction: This property determines the direction in which the flex items are laid out. It can be set to values like row, column, row-reverse, or column-reverse to arrange the images horizontally or vertically.
justify-content: This property controls how the images are spaced along the main axis of the flex container. You can use values like center, flex-start, flex-end, space-between, or space-around.
align-items: This property controls how the images are aligned along the cross axis of the flex container. You can use values like center, flex-start, flex-end, baseline, or stretch.
align-self: This property allows you to control the alignment of individual flex items within the container, overriding the align-items property.
flex: You can use the flex property to control how flex items grow and shrink within the available space.
    ## What does the following padding CSS do?
    - One Value: If you provide one value, it applies to all sides of the element.
css
Copy code
padding: 10px;
In this example, there will be 10 pixels of padding on all sides (top, right, bottom, and left) of the element.
Two Values: If you provide two values, the first value applies to the top and bottom padding, and the second value applies to the left and right padding.
css
Copy code
padding: 10px 20px;
In this case, there will be 10 pixels of padding on the top and bottom and 20 pixels of padding on the left and right of the element.
Four Values: You can provide values for each side individually, in the order of top, right, bottom, and left.
css
Copy code
padding: 10px 20px 15px 30px;
Here, there will be 10 pixels of padding on the top, 20 pixels on the right, 15 pixels on the bottom, and 30 pixels on the left of the element.
Three Values: If you provide three values, the first value applies to the top, the second value applies to the left and right, and the third value applies to the bottom.
css
Copy code
padding: 10px 20px 15px;
In this case, there will be 10 pixels of padding on the top, 20 pixels on the left and right, and 15 pixels on the bottom.
    ## What does the following code using arrow syntax function declaration do?
    - The arrow function syntax in JavaScript is a concise way to declare and define functions. It provides a more compact and often more readable way of writing functions compared to traditional function expressions. Arrow functions were introduced in ECMAScript 6 (ES6).

Here's the basic structure of an arrow function:

javascript
Copy code
const myFunction = (parameters) => {
    // Function body
    return result;
};
    ## What does the following code using map with an array output?
    - In JavaScript, the map() method is used with arrays to create a new array by applying a provided function to each element in the original array. The map() method does not modify the original array; instead, it returns a new array containing the results of applying the function to each element. Here's how map() works:

javascript
Copy code
const originalArray = [1, 2, 3, 4, 5];

const newArray = originalArray.map((element) => {
    // Your function logic here
    return /* some transformation or operation on 'element' */;
});

// 'newArray' now contains the results of applying the function to each element in 'originalArray'
The provided function (the callback function) is executed for each element in the array, and its return value becomes the corresponding element in the new array. You can use map() to transform each element in the array, perform calculations, filter elements, or perform any operation you want on each element. Here are a few common use cases:

Doubling the Values:
javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
// doubledNumbers is now [2, 4, 6, 8, 10]
Squaring the Values:
javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => number ** 2);
// squaredNumbers is now [1, 4, 9, 16, 25]
Extracting Properties from Objects:
javascript
Copy code
const persons = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

const names = persons.map((person) => person.name);
// names is now ["Alice", "Bob", "Charlie"]
Complex Transformations:
javascript
Copy code
const temperaturesInCelsius = [0, 20, 30, 15, 10];
const temperaturesInFahrenheit = temperaturesInCelsius.map((celsius) => (celsius * 9/5) + 32);
// temperaturesInFahrenheit is now [32, 68, 86, 59, 50]
map() is a powerful and versatile array method that is commonly used for data transformation and manipulation. It allows you to process each element of an array and generate a new array based on the results of the provided function.

    ## What does the following code output using getElementByID and addEventListener?
    - 
    ## What does the following line of Javascript do using a # selector?
    ## Which of the following are true? (mark all that are true about the DOM)
    ## By default, the HTML span element has a default CSS display property value of: 
    ## How would you use CSS to change all the div elements to have a background color of red?
    ## How would you display an image with a hyperlink in HTML?
    ## In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
    ## Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
    ## What will the following code output when executed using a for loop and console.log?
    ## How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
    ## What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
    ## How do you declare the document type to be html?
    ## What is valid javascript syntax for if, else, for, while, switch statements?
    ## What is the correct syntax for creating a javascript object?
    ## Is is possible to add new properties to javascript objects?
    ## If you want to include JavaScript on an HTML page, which tag do you use?
    ## Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
    ## Which of the following correctly describes JSON?
    ## What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
    ## Which of the following console command creates a remote shell session?
    ## Which of the following is true when the -la parameter is specified for the ls console command?
    ## Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
    ## Is a web certificate is necessary to use HTTPS.
    ## Can a DNS A record can point to an IP address or another A record.
    ## Port 443, 80, 22 is reserved for which protocol?
    ## What will the following code using Promises output when executed?
     

