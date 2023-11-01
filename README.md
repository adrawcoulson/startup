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

 - Here's the basic structure of an arrow function:

   - javascript
    Copy code
    const myFunction = (parameters) => {
        // Function body
        return result;
    };
    ## What does the following code using map with an array output?
    - In JavaScript, the map() method is used with arrays to create a new array by applying a provided function to each element in the original array. The map() method does not modify the original array; instead, it returns a new array containing the results of applying the function to each element. Here's how map() works:

    - javascript
    Copy code
    const originalArray = [1, 2, 3, 4, 5];
    
    const newArray = originalArray.map((element) => {
        // Your function logic here
        return /* some transformation or operation on 'element' */;
    });

    - // 'newArray' now contains the results of applying the function to each element in 'originalArray'
    The provided function (the callback function) is executed for each element in the array, and its return value becomes the corresponding element in the new array. You can use map() to transform each element in the array, perform calculations, filter elements, or perform any operation you want on each element. Here are a few common use cases:

    - Doubling the Values:
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

    - const names = persons.map((person) => person.name);
    // names is now ["Alice", "Bob", "Charlie"]
    Complex Transformations:
    javascript
    Copy code
    const temperaturesInCelsius = [0, 20, 30, 15, 10];
    const temperaturesInFahrenheit = temperaturesInCelsius.map((celsius) => (celsius * 9/5) + 32);
    // temperaturesInFahrenheit is now [32, 68, 86, 59, 50]
    map() is a powerful and versatile array method that is commonly used for data transformation and manipulation. It allows you to process each element of an array and generate a new array based on the results of the provided function.

    ## What does the following code output using getElementByID and addEventListener?
   - getElementById and addEventListener are two commonly used methods in JavaScript for working with the Document Object Model (DOM) to manipulate and interact with web page elements. Let's look at each of them individually:
    - getElementById:
    - getElementById is a method used to select an HTML element from the DOM by its unique id attribute.
    It returns a reference to the element with the specified id.
    You can then use this reference to manipulate the element, such as changing its content, style, or      adding event listeners.
    - Example usage:
    - // HTML: <div id="myElement">This is a div.</div>
    
    // JavaScript
    const element = document.getElementById("myElement");
    element.textContent = "Updated content"; // Change the text content of the element
    element.style.color = "red"; // Change the text color

    - addEventListener:
    - addEventListener is a method used to attach event handlers to HTML elements. Event handlers are functions that respond to specific events, such as clicks, mouseovers, key presses, and more.
    It takes two arguments: the type of event you want to listen for (e.g., "click," "mouseover," "keydown") and the function that should be executed when the event occurs.
    Multiple event listeners can be attached to the same element.
    - // HTML: <button id="myButton">Click me</button>

    - // JavaScript
    const button = document.getElementById("myButton");
    button.addEventListener("click", function() {
        alert("Button was clicked!");
    });
    ## What does the following line of Javascript do using a # selector?
    - In CSS, the # symbol is used to select elements by their unique id attributes. This is commonly referred to as an "ID selector." When you use # followed by an id name, it selects a specific HTML element with that ID. 
    - <div id="myElement">This is a specific element with an ID.</div>
    - #myElement {
    color: blue;}
    ## Which of the following are true? (mark all that are true about the DOM)
   - In the context of computer science and web development, "DOM" stands for Document Object Model. The Document Object Model is a programming interface and representation of structured documents, typically used for HTML and XML documents. It provides a structured way to interact with and manipulate the content and structure of web pages or XML documents. The DOM represents these documents as a tree-like structure, with each element in the document as a node in the tree.

    - Tree Structure: The DOM represents the document's structure as a tree, where each element, attribute, and piece of text is a node in the tree. The root of the tree is the "document" node.
    - Hierarchical: The tree structure reflects the hierarchical relationships between elements in the document. For example, an HTML document consists of nested elements, and the DOM represents this nesting in the tree.
    - Programmatic Access: Web developers can use programming languages like JavaScript to access and manipulate the DOM. This allows for dynamic web content and interactive web applications.
    - HTML and XML: While the DOM is commonly associated with HTML documents, it's also used with XML documents. Both HTML and XML documents can be parsed and represented as a DOM.
    - Element Properties and Methods: Each node in the DOM tree represents an element, and these elements have properties and methods that can be accessed and modified through JavaScript. For example, you can change the content of an HTML element or update its attributes using the DOM.
    - Event Handling: The DOM allows developers to attach event listeners to elements, so they can respond to user interactions (e.g., clicks, mouse movements, keyboard inputs).
    - Cross-Browser Compatibility: Browsers provide implementations of the DOM, and there are standards (e.g., the W3C DOM specifications) to ensure compatibility across different browsers.
    - https://github.com/webprogramming260/.github/blob/main/profile/javascript/dom/dom.jpg?raw=true![image](https://github.com/adrawcoulson/startup/assets/108026507/d3a715e4-8ce6-43a5-ae06-dc08361c27e8)

    ## By default, the HTML span element has a default CSS display property value of:
   - inline
    ## How would you use CSS to change all the div elements to have a background color of red?
   - div {
    background-color: red;}
    ## How would you display an image with a hyperlink in HTML?
   - To display an image with a hyperlink in HTML, you can use the <a> (anchor) element to create the hyperlink and the <img> element to display the image. Here's how you can do it:
   - <a href="https://www.example.com">
    <img src="image.jpg" alt="Description of the image"></a>
    ## In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
   - Content Area:
This is the innermost layer and represents the actual content of the element, such as text, images, or other media. It is defined by the width and height properties of the element.
    - Padding:
    The padding is the space between the content area and the element's border. Padding provides an internal spacing within the element's box.
    - Border:
    The border is the line that surrounds the padding and content area. It separates the content from the margin. Borders can have various styles, colors, and widths.
    - Margin:
    The margin is the outermost layer and represents the space between the element's border and any adjacent elements. It controls the spacing between elements on the page.
    ## Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
   - <p>This is double<span class="green-text">troubl</span>.</p>
    - .green-text {
    color: green;}
    ## What will the following code output when executed using a for loop and console.log?
   - for (let i = 1; i <= 5; i++) {
    console.log("Iteration " + i);}
    - Iteration 1 Iteration 2 Iteration 3 Iteration 4 Iteration 5
    ## How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
   - <div id="byu">This is the element with the id "byu."</div>
   - // Select the element with id "byu"
    const byuElement = document.getElementById("byu");
    
    // Change the text color to green
    byuElement.style.color = "green";
    ## What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
   - ">p< This is a paragraph"
   - ">ol<>li<Item 1> ordered list." 
   - ">ul<>li<Item 1 unordered list."
   - ">h2<This is a second-level heading"
   - ">h1<This is the first-level heading"
   - ">h3<This is a third-level heading"
    ## How do you declare the document type to be html?
   - To declare the document type as HTML in an HTML document, you need to include a Document Type Declaration (DTD) at the beginning of your HTML file. The most common DTD for modern HTML documents is the HTML5 document type declaration, which is as follows:
   - <!DOCTYPE html>
    ## What is valid javascript syntax for if, else, for, while, switch statements?
   - if(condition){}else}
   - for (let i = 0; i < 5; i++) {
    - console.log(i);}
    - let count = 0;
    - while (count < 5) {
    - console.log(count);
    - count++;}
    - const day = "Monday";
    - switch (day) {
       -  case "Monday":
            - console.log("It's the start of the week.");
            - break;
       - case "Friday":
           - console.log("It's almost the weekend.");
           - break;
       - default:
           - console.log("It's an ordinary day.");}
    ## What is the correct syntax for creating a javascript object?
   - const javaObj = {};
    ## Is is possible to add new properties to javascript objects?
   - Yes, it is absolutely possible to add new properties to JavaScript objects, even after the object has been created. JavaScript objects are dynamic, meaning you can add, modify, or remove properties at any time. Here's how you can add new properties to an object:
    - Dot Notation: const obj = {}; obj.property = value;
    - Bracket Notation: {}; obj["isStudent"] = false;
    - Object Literals: { age: 30,};
    - Object Methods:
    - Computed Property Names: const property = "age", const obj ={[property]: 30, };
    ## If you want to include JavaScript on an HTML page, which tag do you use?
   - <head>
   - <script src="your-script.js"></script>
   - </head>
    ## Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
   - <p id="myText">This is an animal and a fish.</p>

    - <script>
  - // Select the element with id "myText"
 -  const element = document.getElementById("myText");

  - // Replace the text content
 - element.textContent = element.textContent.replace("animal", "crow");
 - </script>
    ## Which of the following correctly describes JSON?
    - JSON (JavaScript Object Notation) is a lightweight, text-based data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used for data exchange between a server and a web application or between different parts of an application. Here are key characteristics and features of JSON:
    ## What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
    ## Which of the following console command creates a remote shell session?
    ## Which of the following is true when the -la parameter is specified for the ls console command?
    ## Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
    ## Is a web certificate is necessary to use HTTPS.
    ## Can a DNS A record can point to an IP address or another A record.
    ## Port 443, 80, 22 is reserved for which protocol?
    ## What will the following code using Promises output when executed?
     

