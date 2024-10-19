# Understanding how to write in md 
super script3<sup>2
subscript 3<sub>2
> quoting code
use back ticks to call out code `git status`
```
hi
```
## demonstration
# git
The .git directory is where all of the versions get stored. 
- to begin tracking version you need to add it `git add .`
-don't need to add again if you use git commit -am
-git checkout beginning has changes it to head
- to get back to top use `git checkout master`
- git diff HEAD HEAD~1 - numerical distanec away from head
-use git branch as and start working on it with git checkout A
- combine by checking out master and executing git merge A
- every time you commit you store a copy of that file 
- git init or create repository in github
- git push pushes changse up
- git pull commits down
- git fetch tells you the latest info about changes on Github
- git status tells you the differences between the clones

# Forks
- fork clones to github instead of ide
- gets you a copy of open source code you want to experiment
- pull request; you change it up and tell the originator if they want your changes

## Startup Application
- **Specification**	Elevator pitch and basic design for your startup
- **HTML**	Basic structural and organizational elements
- **CSS**	Styling and animating
- **JavaScript** Interactivity
- **React** Reactivity, components, and routing using React
- **Web service**	Remote functions that your application calls on your, and someone else's, web server (e.g. saveScores, getWeather, chatWithFriend)
- **Authentication**	Creating accounts and logging in
- **WebSocket**	Support for pushing data from the server. This can be peer to peer communication (e.g. chatting with friends through the browser), or realtime data from the server (e.g. stock prices or the current game leader).

## Technology stack
- techonology stack - the set of technologies that you will use to build your application.
     - top
        - webframework 
        - Angulat, REact, Vue, or Svelte
    - middle
        - web server
        - Node, Express, Django, Rails, or Spring
        - provides authentication, business, data, and persistent storage
    - bottom
        - database, cache, logging, or monitoring
        - MySQL, PostgreSQL, MongoDB, or SQLite
        - stores data for the application
- key with a tech stack is there is no one techonology that is best for all applications
- Dependability, support, scalability, performance, and security are all important factors. You also want to consider development productivity factors such as documentation, ease of use, common acceptance, community support, build times, and testing integration.

## EC2
- IP address - 98.81.134.149
- ssh -i ~/Downloads/production.pem ubuntu@98.81.134.149
- Elastic IP address - 54.225.166.177
- NS and SOA type records make sure that it's you
- http//:templeguesser.click

## Caddy
- Caddy is a web server that automatically generates and renews certificates
    - easily supports https
    - serves up static files
- gateway/ reverse proxy - allows you to expose multiple web services as a single external web service
    - routes requests
- configuration file - ~/Caddyfile
- HTML files - ~/public_html
- a request for http://templeguesser/index.html will look for a file named index.html in the public_html directory


## Console
- pwd - print working directory
- ls - list files -la - list all files in long format
The other primary purpose of the console is to execute commands. You already did this in the previous section when you executed commands for working with the file system. However, console commands can perform many different operations. Here are some basic commands that you show experiment with.

echo - Output the parameters of the command
cd - Change directory
mkdir - Make directory
rmdir - Remove directory
rm - Remove file(s)
mv - Move file(s)
cp - Copy files
ls - List files
curl - Command line client URL browser
grep - Regular expression search
find - Find files
top - View running processes with CPU and memory usage
df - View disk statistics
cat - Output the contents of a file
less - Interactively output the contents of a file
wc - Count the words in a file
ps - View the currently running processes
kill - Kill a currently running process
sudo - Execute a command as a super user (admin)
ssh - Create a secure shell on a remote computer
scp - Securely copy files to a remote computer
history - Show the history of commands
ping - Check if a website is up
tracert - Trace the connections to a website
dig - Show the DNS information for a domain
man - Look up a command in the manual
You can also chain the input and output of commands using special characters

- | - Take the output from the command on the left and pipe, or pass, it to the command on the right
- > - Redirect output to a file. Overwrites the file if it exists
- >> - Redirect output to a file. Appends if the file exists
For example, you can list the files in a directory, pipe it into grep to search for files created in Nov, and then pipe that into wc to count the number of files found with a date of Nov.

-ls -l | grep ' Nov ' | wc -l
-There are also keystrokes that have special meaning in the console.

-CTRL-R - Use type ahead to find previous commands
-CTRL-C - Kill the currently running command

## IDE
- live server extension - go live - opens up a browser and shows the page, automatically updated
- VIM - text editor - `vim filename` - `i` to insert - `esc` to exit insert mode - `:wq` to save and exit
- CodePen - online code editor - HTML, CSS, and JavaScript
    - serves as a portfolio

## HTTPS
- HTTPS - secure version of HTTP
- name - Hypertext Transfer Protocol Secure
- encrypts data between the browser and the server through a process called SSL/TLS
- core piece of handshake - exchange of a web certificqte that identifies the domain name of the server creating the connection
- browser will compare the certificate to the domain name of the server and if they match, the browser will trust the certificate
- web certificates are generated by certificate authorities using puvlic/private key pairs
- Let's Encrpyt lets you generate a free certificate
- Caddy - web server that automatically generates and renews certificates
-Caddy asks Let's Encrypt to verify that the domain for the requested certificate is actually owned by the requester. Let's Encrypt does that by telling the requester to return a specific digitally signed response for a temporary URL when an HTTP request to the domain is made. Let's Encrypt then makes the HTTP request, and if successful, issues the certificate to the requester.

## HTML
- text is valid
- elements are enclosed with tahgs
    - <p>Hello</p>
    - <html> - top level
    - <head> - metadata
    - <body> - content
    - <main> - 
- attributes - provide additional information about an element
    - <p id="hello" class="greeting">Hello world</p>
- hyperlinks - take you to another page
    - <a href="https://byu.edu">Go to the Y</a>
- comments - <!-- -->
- good idea to name main html file index.html
# common html elements
- <h1> - <h6> - headings
- <p> - paragraph
- <a> - hyperlink
- <img> - image
- <ul> - unordered list
- <ol> - ordered list
- <li> - list item
- <table> - table
- <tr> - table row
- <td> - table data
- <th> - table header
- <form> - form
- <input> - input field
- <button> - button
- <label> - label
- <select> - select list
- <option> - option in a select list
- <textarea> - text area
- <video> - video
- <audio> - audio
- <iframe> - inline frame
- <canvas> - canvas for drawing
- <svg> - scalable vector graphics
- <div> - division
- <span> - span
- <nav> - navigation
- <header> - header
- <footer> - footer
- <aside> - aside
- <section> - section
- <article> - article
- <figure> - figure
- <figcaption> - caption
- <main> - main
- <address> - address
- <time> - time
- <abbr> - abbreviation
- <cite> - citation
- <q> - quote
- <blockquote> - block quote
- <code> - code
- <pre> - preformatted
- <em> - emphasized
- <strong> - strong
- <small> - small
- <sub> - subscript
- <sup> - superscript
- <del> - deleted
- <ins> - inserted
- <u> - underline
- <s> - strikethrough
- <mark> - mark
- <bdi> - bidirectional isolation
- <bdo> - bidirectional override
- <ruby> - ruby
- <rt> - ruby text
- <rp> - ruby parenthesis
- <wbr> - word break opportunity
- <br> - break
- <hr> - horizontal rule
- <meta> - metadata
- <title> - title
- <base> - base
- <link> - link
    - <link rel="stylesheet" href="styles.css">
- <style> - style

- body has three children: header, main, and footer
- headr contatins a paragraph with a span, and a navigavtion contating multiple division of sub-content
- main - contains a section with an list or table; also aside
- make an image by url
    - <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google logo">
- create a hyperlink by url
    - <a href="https://www.google.com">Google</a>

## HTML Input
- <input> - text, password, email, number, date, time, color, range, checkbox, radio, file, submit, reset, button
    - <input type="text" placeholder="Enter your name">
- elements
    - <input> - text, password, email, number, date, time, color, range, checkbox, radio, file, submit, reset, button
    - <textarea> - text area
    - <select> - select list
        - <option> - option in a select list
    - <button> - button
    - <label> - label
        - <label for="checkbox1">Check me</label> <input type="checkbox" name="varCheckbox" value="checkbox1" checked />
    - <form> - submite values of the inpus it contains
        -`<form action="submit.html" method="post">`
    - optgroup - group options in a select list
        - <select>
            - <optgroup label="Fruits">
                - <option value="apple">Apple</option>
                - <option value="orange">Orange</option>
            - </optgroup>
            - <optgroup label="Vegetables">
                - <option value="carrot">Carrot</option>
                - <option value="pepper">Pepper</option>
            - </optgroup>
        - </select>
      </li>
      <li>
        <label for="color">Color: </label>
        <input type="color" name="varColor" id="color" />
      </li>
      // change default folor to red
        <li>
            <label for="color">Color: </label>
            <input type="color" name="varColor" id="color" value="#ff0000" />
## types of input elements
- text
- password - hides the text
- email - validates the email
- tel - validates the phone number
- url - validates the url
- number
- checkbox
- radio
- range
- date
- datetime-local
- month
- week
- color
- file
- submit

- attributes of input elements  
    - name - name of the input
    - value - value of the input
    - disabled - disables the input
    - required - makes the input required

- example
```
<body>
  <h1>Example Form</h1>
  <form action="formSubmit.html" method="post">
    <ul>
      <li>
        <!-- Includes validation-->
        <label for="text">Text: </label>
        <input type="text" id="text" name="varText" placeholder="text here" required pattern="[Aa].*" />
      </li>
      <li>
        <label for="password">Password: </label>
        <input type="password" id="password" name="varPassword" />
      </li>
      <li>
        <label for="email">Email: </label>
        <input type="email" id="email" name="varEmail" />
      </li>
      <li>
        <label for="textarea">TextArea: </label>
        <textarea id="textarea" name="varTextarea"></textarea>
      </li>
      <li>
        <label for="select">Select: </label>
        <select id="select" name="varSelect">
          <option>option1</option>
          <option selected>option2</option>
          <option>option3</option>
        </select>
      </li>
      <li>
        <label for="optgroup">OptGroup: </label>
        <select id="optgroup" name="varOptGroup">
          <optgroup label="group1">
            <option>option1</option>
            <option selected>option2</option>
          </optgroup>
          <optgroup label="group2">
            <option>option3</option>
            <option>option4</option>
          </optgroup>
        </select>
      </li>
      <li>
        <fieldset>
          <legend>checkbox</legend>
          <label for="checkbox1">checkbox1</label>
          <input type="checkbox" id="checkbox1" name="varCheckbox" value="checkbox1" checked />
          <label for="checkbox2">checkbox2</label>
          <input type="checkbox" id="checkbox2" name="varCheckbox" value="checkbox2" />
          <label for="checkbox3">checkbox3</label>
          <input type="checkbox" id="checkbox3" name="varCheckbox" value="checkbox3" />
        </fieldset>
      </li>
      <li>
        <fieldset>
          <legend>radio</legend>
          <label for="radio1">radio1</label>
          <input type="radio" id="radio1" name="varRadio" value="radio1" checked />
          <label for="radio2">radio2</label>
          <input type="radio" id="radio2" name="varRadio" value="radio2" />
          <label for="radio3">radio3</label>
          <input type="radio" id="radio3" name="varRadio" value="radio3" />
        </fieldset>
      </li>
      <li>
        <!-- Submit form with POST method and enctype="multipart/form-data" to send file contents. -->
        <label for="file">File: </label>
        <input type="file" id="file" name="varFile" accept="image/*" multiple />
      </li>
      <li>
        <label for="search">Search: </label>
        <input type="search" id="search" name="varSearch" />
      </li>
      <li>
        <label for="tel">Tel: </label>
        <input type="tel" id="tel" name="varTel" placeholder="###-####" pattern="\d{3}-\d{4}" />
      </li>
      <li>
        <label for="url">URL: </label>
        <input type="url" id="url" name="varUrl" />
      </li>
      <li>
        <label for="number">Number: </label>
        <input type="number" name="varNumber" id="number" min="1" max="10" step="1" />
      </li>
      <li>
        <label for="range">Range: </label>
        <input type="range" name="varRange" id="range" min="0" max="100" step="1" value="0" />
        <output id="rangeOutput" for="range">0</output>
        <!-- Range requires some JavaScript in order to make it work. Ignore this for now. -->
        <script>
          const range = document.querySelector('#range');
          const rangeOutput = document.querySelector('#rangeOutput');
          range.addEventListener('input', function() {
            rangeOutput.textContent = range.value;
          });
        </script>
      </li>
      <li>
        <label for="progress">Progress: </label>
        <progress id="progress" max="100" value="75"></progress>
      </li>
      <li>
        <label for="meter">Meter: </label>
        <meter id="meter" min="0" max="100" value="50" low="33" high="66" optimum="50"></meter>
      </li>
      <li>
        <label for="datetime">DateTime: </label>
        <input type="datetime-local" name="varDatetime" id="datetime" />
      </li>
      <li>
        <label for="time">Time: </label>
        <input type="time" name="varTime" id="time" />
      </li>
      <li>
        <label for="month">Month: </label>
        <input type="month" name="varMonth" id="month" />
      </li>
      <li>
        <label for="week">Week: </label>
        <input type="week" name="varWeek" id="week" />
      </li>
      <li>
        <label for="color">Color: </label>
        <input type="color" name="varColor" id="color" />
      </li>
      <!-- This doesn't show up to the user, but allows the form to send associated data. -->
      <input type="hidden" id="secretData" name="varSecretData" value="1989 - the web was born" />
    </ul>

    <button type="submit">Submit</button>
  </form>
</body>
```
## Media Html elements
- all media tags take in URK
- images
    - <img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />
- audio
    - <audio controls src="testAudio.mp3"></audio>
- video
    - <video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
</video>
    - <h2>Video</h2>
<video controls width="300"> <source src="https://youtu.be/JPDyWioYptY?list=LL" />
- svg - scalable vector graphics
```
    <svg width="100" height="100">
  circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" >

</svg>
```
- canvas - drawing
    - <canvas id="canvas" width="200" height="100"></canvas>
    
## CSS
- CSS - Cascading Style Sheets
- rule - selector and declaration block
    - selector - element you want to style
    - declaration block - property and value
- link - <link rel="stylesheet" href="styles.css">
- descendent combinator - style all elements that are descendants of another element
    - <div>
        - <p>hello</p>
    - </div>
    - div p {color: red;}
- class selector - style all elements with a specific class
    - <p class="greeting">Hello</p>
    - .greeting {color: red;}
- id selector - style a single element with a specific id
    - <p id="hello">Hello</p>
    - #hello {color: red;}
- attribute selector - style all elements with a specific attribute
    - <p data-greeting="hello">Hello</p>
    - [data-greeting] {color: red;}
    - p[class = 'summary'] {color: red;}
- pseudo-class selector - style an element based on its state
    - section:hover {background-color: yellow;}
- style - how html uses css
- innermost box - holds the content 
- padding - space between the content and the border, has background color
    - padding: 10px; - 10 pixels on all sides
    - padding: 10px 20px; - 10 pixels on top and bottom, 20 pixels on left and right
    - padding: 10px 20px 30px; - 10 pixels on top, 20 pixels on left and right, 30 pixels on bottom
    - padding: 10px 20px 30px 40px; - 10 pixels on top, 20 pixels on right, 30 pixels on bottom, 40 pixels on left
- border - line that goes around the padding
    - border: 1px solid black; - 1 pixel solid black border
- margin - space between the border and the next element, only represents whitespce
    - margin: 10px; - 10 pixels on all sides
- change box-sizing by using border-box
    - * {box-sizing: border-box;}
- combinators
    - descendenta - any section that is a descendnt of a body
    - child - any section that is a direct child of a section - section > p
    - general sibling - any section that is a sibling of a dic - div ~ p
    - adjacent sibling - any section that is an adjacent div sibling - div + p
- selectos 


## Responsive desin - ability to reconfigure interface based on screen size
- The float css property moves an element to the left or right of its container element and allows inline elements to wrap around it
- media
@media (orientation: portrait) {
  aside {
    display: none;
  }
}

## CSS Frameeworks  
- tailwind - smaller definitions thata re applied to individual html elements
    - <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="profile.png" />
  <p class="text-lg font-medium">“Tailwind CSS”</p>
</div>

- bootstrap - most popular
    !DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
  </body>
</html>
- this gives links to the bootstrap css file

## CSS Debugging
- acces developer tools by using inspect option 

## JavaScript
### functions
- function - first class objects
    - can be assigned name, passed as a paramete,r returned as a result, and referenced from an object or array just like any other variable
```
    function hello(who) {
    return 'hello ' + who;
    }

    console.log(hello('world'));
    // OUTPUT: hello world
```

- side effects - changes that a function makes to the outside world
- can define defalut values for parameters
```
    function hello(who = 'world') {
    return 'hello ' + who;
    }

    console.log(hello());
    // OUTPUT: hello world
```

- anonymous functions - functions that are not named
```
    const hello = function(who) {
    return 'hello ' + who;
    };

    console.log(hello('world'));
    // OUTPUT: hello world
```
- inner functions - functions that are defined inside of other functions
```
    function hello(who) {
    function capitalize(who) {
        return who.charAt(0).toUpperCase() + who.slice(1);
    }

    return 'hello ' + capitalize(who);
    }

    console.log(hello('world'));
    // OUTPUT: hello World
```
- console - object that provides access to the browser's debugging console
    - console.count - logs the number of times that count has been called
    - console.error - logs an error message
    - console.group - groups messages together
    - console.log - logs a message

- how to add javascript to html
```
<head>
  <script src="javascript.js"></script>
</head>
<body>
  <button onclick="sayHello()">Say Hello</button>
  <button onclick="sayGoodbye()">Say Goodbye</button>
  <script>
    function sayGoodbye() {
      alert('Goodbye');
    }
  </script>
</body>
```

- declaring variables
    -  let x = 1 - can be reassigned
    - const x = 1 - cannot be reassigned
- primitives
    - number, string, boolean, null, undefined, symbol
- objects
    - object - collection of key-value pairs
        - let person = {name: 'John', age: 30};
    - function - object that can be called
        - function hello(who) {}
    - date - object that represents a date and time
        - let date = new Date();
    - array - object that stores a list of values
        - let fruits = ['apple', 'banana', 'cherry'];
    - Map - object that stores key-value pairs
        - let fruits = new Map([['apple', 1], ['banana', 2], ['cherry', 3]]);
    - JSON - object that stores data in a text format
        - let person = '{"name": "John", "age": 30}';
- operators
    - arithmetic - +, -, *, /, %, ++, --
    - assignment - =, +=, -=, *=, /=, %=
    - comparison - ==, ===, !=, !==, >, <, >=, <=
    - logical - &&, ||, !
    - bitwise - &, |, ^, ~, <<, >>
    - string - +, +=, ``
    - conditional - ?:
    - comma - ,
    - unary - +, -, ++, --, typeof, delete, void
    - relational - in, instanceof
- strict equality - === - compares both value and type

- conditionals
    -  if, else, and if else
- loops
    - for, while, do while, for of, for in, switch
    - for
        - for (let i = 0; i < 10; i++) {
            console.log(i);
        }
    - do while
        - let i = 0;
        do {
            console.log(i);
            i++;
        } while (i < 10);
    - while
        - let i = 0;
        while (i < 10) {
            console.log(i);
            i++;
        }
    - for in - iterates over the properties of an object
        - let person = {name: 'John', age: 30};
        for (let key in person) {
            console.log(key, person[key]);
        }
    - for of - iterates over the values of an iterable object
        - let fruits = ['apple', 'banana', 'cherry'];
        for (let fruit of fruits) {
            console.log(fruit);
        }
        - output - apple, banana, cherry
    - break and continue
        - let i = 0;
        while (true) {
        console.log(i);
        if (i === 0) {
            i++;
            continue;
        } else {
            break;
        }
        }
        // OUTPUT: 0 1

- strings
    - ' and " can be used to define strings
    - ` can be used to define template literals
```
    'quoted text'; // " also works

    const l = 'literal';
    console.log(`string ${l + (1 + 1)} text`);
    // OUTPUT: string literal2 text
```
- string functions
    - length - returns the length of a string
    - toUpperCase() - converts a string to uppercase
    - toLowerCase() - converts a string to lowercase
    - indexOf() - returns the index of the first occurrence of a specified value in a string
    - split() - splits a string into an array of substrings
    - startsWith() - checks if a string starts with a specified value
```
    const s = 'Example:조선글';
    
    console.log(s.length);
    // OUTPUT: 11
    console.log(s.indexOf('조선글'));
    // OUTPUT: 8
    console.log(s.split(':'));
    // OUTPUT: ['Example', '조선글']
    console.log(s.startsWith('Ex'));
    // OUTPUT: true
    console.log(s.endsWith('조선글'));
    // OUTPUT: true
    console.log(s.toLowerCase());
    // OUTPUT: example:조선글
```

- arrows
    - a.sort((v1, v2) => v1 - v2);
```
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```

## JSON
- JSON - JavaScript Object Notation
- data interchange format
- data is in name/value pairs
- date types 
    - string, number, object, array, true, false, null
- objects - contain zero or more key value pairs, key is always a string and the value must be a valid json data type
    - ezample - {"name": "John", "age": 30}
- can convert json to and from javascript using json.parse and josn.stringify
```
    const person = '{"name": "John", "age": 30}';
    const obj = JSON.parse(person);
    console.log(obj.name);
    // OUTPUT: John

    const person = {name: 'John', age: 30};
    const str = JSON.stringify(person);
    console.log(str);
    // OUTPUT: {"name":"John","age":30}
```
## DOM
- DOM Element interface: provides the means for accessing and modifying the properties of an element
``` function displayElement(el) {
    console.log(el.tagName);
    for (const child of el.children) {
        displayElement(child);
    }
    displayElement(document.body);
}
- query selectall - returns a list of all elements that match a specified CSS selector
``` const elements = document.querySelectorAll('p');
for (const element of elements) {
    console.log(element.textContent);
}
```
- you can insert, modify, and delete elements
- you can add event listeners to elements
    - element.addEventListener('click', () => console.log('clicked'));
    - this will log clicked when the element is clicked

## javascript objects 
- object - collection of key-value pairs
    - let person = {name: 'John', age: 30};
- property - key-value pair
    - person.name
- Objects also have common object-oriented functionality such as constructors, a this pointer, static properties and functions, and inheritance.
```
    const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}`
```
- object funtions
    - entries - returns an array of key-value pairs
    - keys - returns an array of keys
    - values - returns an array of valuex
-  constructor - function that creates an object
```
    function Person(name, age) {
    this.name = name;
    this.age = age;
    }

    const john = new Person('John', 30);
    console.log(john);
    // OUTPUT: Person {name: 'John', age: 30}
```
    - you can create methods on the object as part of its encapsulation
- this - refers to a point to the obect

- classes
    - you can use classe to define objects. Declare intent to create reuable component rather than a none-off ojbect.
    - make properties and function private with #
    - class Person {
        constructor(name, age) {
            this.#name = name;
            this.#age = age;
        }
- inheritance - classes can be extended by using the exends keyword
    - super - calls the parent class constructor
```
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```
## Regular Expressions
- const objRegex = new RegExp('ab*', 'i');
- const objRegex = /ab*/i;
- string class has several functions
    - match - returns an array of matches
        - text.match(objRegex);
    - replace - replaces matches with a string
        - text.replace(objRegex, 'c');
    - search - returns the index of the first match
        - text.search(objRegex);
    - split - splits a string into an array of substrings
        - text.split(objRegex);
## Rest and spread
- rest - allows you to represent an indefinite number of arguments as an array
    - function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    }
    - contains the "rest" of the parameters
- spread - allows you to expand an array into individual elements
    - const arr = [1, 2, 3];
    - console.log(...arr);
    - can be used to combine arrays
        - const arr1 = [1, 2, 3];
        - const arr2 = [4, 5, 6];
        - const arr3 = [...arr1, ...arr2];
- Java Script exceptions
    -generate exception using throw
    - catch block catches the exception
    - do this by wrapping code block with try
    - finally block always executes
    ```
    try {
    throw 'error';
    } catch (e) {
    console.log(e);
    } finally {
    console.log('finally');
    }
    - fallbacks - with fallback you can always return something
    ``` 
    function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}
    }
    ```
## Destructuring
- destructuring - process of pulling individual items out of an existing one, or removing structe
- helpful when you only care about a few items in the original structure
```
const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a, b);
// OUTPUT: 1 2
```
rest sytax
``` 
const [b,c, ...rest] = arr;
console.log(b,c, rest);
// OUTPUT: 1 2 [3]
```
- can also destructure objects

## Scope
- scope - where variables are accessible
1. global - accessible everywhere
2. module - accessible within a module
3. function - accessible within a function
4. block - accessible within a block

- var ignores block scope

- this - variablss that points to an object that contatins the context within the scope
    - global - window
    - function - object that contains the function
    - object - object
- closure - a function and its surrounding state
    - function outer() {
        const x = 1;
        function inner() {
            console.log(x);
        }
        return inner;
    }
    const f = outer();
    f();
    - whatever variables are accessible in the outer function are accessible in the inner function
    - arrow function is different and it will point to gobal not outer fuctnio

## Javascript modules
- module - a file that contains code
- node.js - introduced modules to support importing of packages 
    - commonJS - require and module.exports
    - ES - import and export

- need to explcitiy export objects from on efile and and import then i to another
- import into html by using script tag with type module
    - <script type="module" src="main.js"></script>

## LocalStorage
- local storage - allows you to store data in the browser
- four maind function
    - setItem(name, value) - sets a value
    - getItem(name) - gets a value
    - removeItem(name) - removes a value
    - clear() - removes all values

## Promises
- promise - allows the main rendering thread ro continue while some action is executed in the background
- promise has three states
    - pending - initial state
    - fulfilled - action completed successfully
    - rejected - action failed
    - example
    ```
    const delay = (msg, wait) => {
  setTimeout(() => {
    console.log(msg, wait);
  }, 1000 * wait);
};

new Promise((resolve, reject) => {
  // Code executing in the promise
  for (let i = 0; i < 3; i++) {
    delay('In promise', i);
  }
});

// Code executing after the promise
for (let i = 0; i < 3; i++) {
  delay('After promise', i);
}

// OUTPUT:
//   In promise 0
//   After promise 0
//   In promise 1
//   After promise 1
//   In promise 2
//   After promise 2
```
- resolve - sets to fufilled state
- reject - sets to rejected state
``` 
const coinToss = new Promise((resolve, reject) => {
  const value = Math.random();
  if (value > 0.5) {
    resolve('heads');
  } else {
    reject('tails');
  }
});
- then - executes when the promise is resolved
- catch - executes when the promise is rejected
- finally - executes when the promise is completed
```
coinToss
  .then((result) => console.log(result))
  .catch((result) => console.log(result))
  .finally(() => console.log('done'));
```

## Async and Await
- JavaScript Promise objects are great for asynchronous execution, but as developers began to build large systems with promises they started wanting a more concise representation. This was provided with the introduction of the async/await syntax. The await keyword wraps the execution of a promise and removed the need to chain functions. The await expression will block until the promise state moves to fulfilled, or throws an exception if the state moves to rejected. For example, if we have a function that returns a coin toss promise.
```
const coinToss = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve(Math.random() > 0.5 ? 'heads' : 'tails');
      } else {
        reject('fell off table');
      }
    }, 1000);
  });
};
```
```
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```

- async - function that returns a promise
    - async function tossCoin() {
        return await coinToss();
    }
- await - cannot call unles it is at the tope level of JS or in a async function
    - wraps a call to the async function
    - blocks execution until the promise is resolved
    - return the reulst of the promise
- can use this to resovle two pormises at the same time
    - const [result1, result2] = await Promise.all([coinToss(), coinToss()]);