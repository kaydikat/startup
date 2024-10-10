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
- section:hover {background-color: yellow;}

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