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
- ssh -i ~/Downloads/production.pem ubuntu@54.225.166.177
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
```
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
```

- body has three children: header, main, and footer
- headr contatins a paragraph with a span, and a navigavtion contating multiple division of sub-content
- main - contains a section with an list or table; also aside
- make an image by url
```    - <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google logo">
```
- create a hyperlink by url
 ```
    - <a href="https://www.google.com">Google</a>
```
## HTML Input
- <input> - text, password, email, number, date, time, color, range, checkbox, radio, file, submit, reset, button
    - <input type="text" placeholder="Enter your name">
- elements
```
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
```
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
```
    - <img alt="mountain landscape" src="https://images.pexels.com/photos/164170/pexels-photo-164170.jpeg" />
```
- audio
```
    - <audio controls src="testAudio.mp3"></audio>
```
- video
```
    - <video controls width="300" crossorigin="anonymous">
  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
    </video>
    - <h2>Video</h2>
    <video controls width="300"> <source src="https://youtu.be/JPDyWioYptY?list=LL" />
```
- svg - scalable vector graphics
```
    <svg width="100" height="100">
  circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" >
</svg>
```
- canvas - drawing
```
    - <canvas id="canvas" width="200" height="100"></canvas>
```

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

## CSS declarations
CSS rule declarations specify a property and value to assign when the rule selector matches one or more elements. There are legions of possible properties defined for modifying the style of an HTML document. For our purposes we will discuss just a few of the more commonly used ones so that you can get a feel for wide variety of functionality they represent.

Property	Value	Example	Discussion
background-color	color	red	Fill the background color
border	color width style	#fad solid medium	Sets the border using shorthand where any or all of the values may be provided
border-radius	unit	50%	The size of the border radius
box-shadow	x-offset y-offset blu-radius color	2px 2px 2px gray	Creates a shadow
columns	number	3	Number of textual columns
column-rule	color width style	solid thin black	Sets the border used between columns using border shorthand
color	color	rgb(128, 0, 0)	Sets the text color
cursor	type	grab	Sets the cursor to display when hovering over the element
display	type	none	Defines how to display the element and its children
filter	filter-function	grayscale(30%)	Applies a visual filter
float	direction	right	Places the element to the left or right in the flow
flex			Flex layout. Used for responsive design
font	family size style	Arial 1.2em bold	Defines the text font using shorthand
grid			Grid layout. Used for responsive design
height	unit	.25em	Sets the height of the box
margin	unit	5px 5px 0 0	Sets the margin spacing
max-[width/height]	unit	20%	Restricts the width or height to no more than the unit
min-[width/height]	unit	10vh	Restricts the width or height to no less than the unit
opacity	number	.9	Sets how opaque the element is
overflow	[visible/hidden/scroll/auto]	scroll	Defines what happens when the content does not fix in its box
position	[static/relative/absolute/sticky]	absolute	Defines how the element is positioned in the document
padding	unit	1em 2em	Sets the padding spacing
left	unit	10rem	The horizontal value of a positioned element
text-align	[start/end/center/justify]	end	Defines how the text is aligned in the element
top	unit	50px	The vertical value of a positioned element
transform	transform-function	rotate(0.5turn)	Applies a transformation to the element
width	unit	25vmin	Sets the width of the box
z-index	number	100	Controls the positioning of the element on the z axis
Units
📖 Deeper dive reading: MDN Values and units

You can use a variety of units when defining the size of a CSS property. For example, the width of an element can be defined using absolute units such as the number of pixels (px) or inches (in). You can also use relative units such as a percentage of the parent element (50%), a percentage of a minimum viewport dimension (25vmin), or a multiplier of the size of the letter m (1.5rem) as defined by the root element.

p {
  width: 25%;
  height: 30vh;
}
Here is a list of the most commonly used units. All of the units are prefixed with a number when used as a property value.

Unit	Description
px	The number of pixels
pt	The number of points (1/72 of an inch)
in	The number of inches
cm	The number of centimeters
%	A percentage of the parent element
em	A multiplier of the width of the letter m in the parent's font
rem	A multiplier of the width of the letter m in the root's font
ex	A multiplier of the height of the element's font
vw	A percentage of the viewport's width
vh	A percentage of the viewport's height
vmin	A percentage of the viewport's smaller dimension
vmax	A percentage of the viewport's larger dimension
Color
📖 Deeper dive reading: MDN Applying color

CSS defines multiple ways to describe color, ranging from representations familiar to programmers and ones familiar to layout designers and artists.

Method	Example	Description
keyword	red	A set of predefined colors (e.g. white, cornflowerblue, darkslateblue)
RGB hex	#00FFAA22 or #0FA2	Red, green, and blue as a hexadecimal number, with an optional alpha opacity
RGB function	rgb(128, 255, 128, 0.5)	Red, green, and blue as a percentage or number between 0 and 255, with an optional alpha opacity percentage
HSL	hsl(180, 30%, 90%, 0.5)	Hue, saturation, and light, with an optional opacity percentage. Hue is the position on the 365 degree color wheel (red is 0 and 255). Saturation is how gray the color is, and light is how bright the color is.
```
body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

p {
  color: #3f3f76;
  columns: 3;
  column-rule: solid thin black;
  background: hsl(180, 0%, 90%);
  box-shadow: 5px 5px 5px gray;
  font: 1.1em sans-serif;
  margin: 10px 0;
  max-width: 7in;
  padding: 1em 1em;
  text-align: justify;
}

div {
  background: linear-gradient(to bottom, gray, hsl(225deg 100% 50%));
  width: 2in;
  height: 2in;
  border-radius: 50%;
  opacity: 30%;
  position: absolute;
  top: 1in;
  left: 25vw;
  z-index: 1000;
  transform: rotate(0.15turn);
}

img {
  filter: grayscale(50%);
  cursor: grab;
  width: 4in;
}
```

## CSS Fonts
- font-family - font name
    - four major families
        - serif - extra strokes
        - sans-serif - no extra strokes
        - fixed - all the same size
        - symbol - symbosl

## CSS Animation
```
p {
  text-align: center;
  font-size: 20vh;

  animation-name: demo;
  animation-duration: 3s;
}

@keyframes demo {
  from {
    font-size: 0vh;
  }

  95% {
    font-size: 21vh;
  }

  to {
    font-size: 20vh;
  }
}
```

## Responsive design
- none	Don't display this element. The element still exists, but the browser will not render it.
- block	Display this element with a width that fills its parent element. A p or div element has block display by default.
- inline	Display this element with a width that is only as big as its content. A b or span element has inline display by default.
- flex	Display this element's children in a flexible orientation.
- grid	Display this element's children in a grid orientation.

```
.none {
  display: none;
}

.block {
  display: block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
  flex-direction: row;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```
- viewport meta tag - tells the browser to not scale the page
```
<meta name="viewport" content="width=device-width,initial-scale=1" />
```
- float - allows inline elements to wrap aroun it and move it to left or right
```
aside {
  float: right;
  padding: 3em;
  margin: 0.5em;
  border: black solid thin;
}
```     
- media queries - allows you to apply css based on the screen size
    - tells us which side of the screen is the longest
```
@media (orientation: portrait) {
  aside {
    display: none;
  }
}
```
## CSS Grid
- gird useful when you want to display a grid of elements
- We turn this into a responsive grid by including a CSS display property with the value of grid on the container element. 
- This tells the browser that all of the children of this element are to be displayed in a grid flow. 
- The grid-template-columns property specifies the layout of the grid columns. 
- We set this to repeatedly define each column to auto-fill the parent element's width 
- with children that are resized to a minimum of 300 pixels and a maximum of one equal fractional unit (1fr) of the parents total width. 
- A fractional unit is dynamically computed by splitting up the parent element's width into equal parts. 
- Next, we fix the height of the rows to be exactly 300 pixels by specifying the grid-auto-rows property. 
- Finally, we finish off the grid configuration by setting the grid-gap property to have a gap of at least 1 em between each grid item.
```
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```
## CSS Flex
The flex display layout is useful when you want to partition your application into areas that responsively move around as the window resizes or the orientation changes. In order to demonstrate the power of flex we will build an application that has a header, footer, and a main content area that is split into two sections, with controls on the left and content on the right.

So we can visualize our design by quickly sketching it out.

Now we can use Flexbox to make it all come alive. We make the body element into a responsive flexbox by including the CSS display property with the value of flex. This tells the browser that all of the children of this element are to be displayed in a flex flow. We want our top level flexbox children to be column oriented and so we add the flex-direction property with a value of column. We then add some simple other declarations to zero out the margin and fill the entire viewport with our application frame.

```
body {
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 100vh;
}
```

To get the division of space for the flexbox children correct we add the following flex properties to each of the children.

- header - flex: 0 80px - Zero means it will not grow and 80px means it has a starting basis height of 80 pixels. This creates a fixed size box.
- footer - flex: 0 30px - Like the header it will not grow and has a height of 30 pixels.
- main - flex: 1 - One means it will get one fractional unit of growth, and since it is the only child with a non-zero growth value, it will get all the remaining space. Main also gets some additional properties because we want it to also be a flexbox container for the controls and content area. So we set its display to be flex and specify the flex-direction to be row so that the children are oriented side by side.

```
header {
  flex: 0 80px;
  background: hsl(223, 57%, 38%);
}

footer {
  flex: 0 30px;
  background: hsl(180, 10%, 10%);
}

main {
  flex: 1;
  display: flex;
  flex-direction: row;
}
```

Now we just need to add CSS to the control and content areas represented by the two child section elements. We want the controls to have 25% of the space and the content to have the remaining. So we set the flex property value to 1 and 3 respectively. That means that the controls get one unit of space and the content gets three units of space. No matter how we resize things this ratio will responsively remain.
```
section:nth-child(1) {
  flex: 1;
  background-color: hsl(180, 10%, 80%);
}
section:nth-child(2) {
  flex: 3;
  background-color: white;
}
```
That completes our original design, but we also want to handle small screen sizes. To do this, we add some media queries that drop the header and footer if the viewport gets too short, and orient the main sections as rows if it gets too narrow.

To support the narrow screen (portrait mode), we include a media query that detects when we are in portrait orientation and sets the flex-direction of the main element to be column instead of row. This causes the children to be stacked on top of each other instead of side by side.

To handle making our header and footer disappear when the screen is to short to display them, we use a media query that triggers when our viewport height has a maximum value of 700 pixels. When that is true we change the display property for both the header and the footer to none so that they will be hidden. When that happens the main element becomes the only child and since it has a flex value of 1, it takes over everything.
```
@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}
```
## CSS Debugging
- acces developer tools by using inspect option 

## CSS Frameworks
- Tailwind - uses smaller definitions that are applied specifically to individual html elements
- Bootstrap - most popular
```
<div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <h1>Bootstrap</h1>
 <div class="card" style="width: 18rem;">
        <svg class="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" role="img" preserveAspectRatio="xMidYMid slice">
```

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

## JavaScript 
Officially known as ECMAScript, JavaScript is a weakly typed language based upon concepts found in C, Java, and Scheme. It is by far the most used programming language in the world. It runs on every web browser, and it is commonly used as a web server language and for creating serverless functions. In this instruction we will cover the basic parts of the language necessary to create a reasonable website. There are many features of the language that will not be discussed, and you should take time to dig into the corners of the language as time allows. The more effectively you understand JavaScript, the better web programmer you will be.

Typically JavaScript is executed using an interpreter at runtime instead of compiling it into a machine specific binary at build time. This has the advantage of making JavaScript very portable, but also allows for many errors, such as using an undefined variable. These types of errors commonly only get discovered when the program crashes during execution.

JavaScript Versions
The following table describes the version history of JavaScript. You don't need to worry too much about versions right now, but this is important to be aware of since browser compatibility is always an issue when developing a web application. When considering the use of a JavaScript feature you should consult websites like MDN or CanIUse to see how well the feature is supported.

Year	Version	Features
1997	ES1	types, functions
1999	ES3	regex, exceptions, switch
2009	ES5	json, array iteration
2015	ES6	let/const, default params, classes, template literals, destructuring, generators, promises, modules, internationalization
2016	ES2016	array.includes
2017	ES2017	async/await
2018	ES2018	rest/spread, promise.finally
2019	ES2019	string.trim
2020	ES2020	?? operator
Getting started
Let's start with a basic example. The following JavaScript will concatenate three strings together and then throw away the result. Not very useful, but JavaScript doesn't complain much.

'Hello' + ' ' + 'world';
Only slightly more complex is to call a function with the result of our concatenated string. In this case we call the JavaScript runtime's built in function console.log to output the string to the debugger console.

console.log('Hello' + ' ' + 'world');
// OUTPUT: Hello world
You can also write your own functions.

function join(a, b) {
  return a + ' ' + b;
}

console.log(join('Hello', 'world'));
// OUTPUT: Hello world
Comments
You can comment your JavaScript with either line or block comments.

// Line comment

/*
Block comment
*/
Code delimiters
While not technically required in most cases, it is considered good form to end JavaScript statements with a semicolon (;). Code blocks, and their resulting scope, are defined with curly braces ({ }).

The JavaScript console object provides interaction with the JavaScript runtime's debugger console. This usage of console should not be confused with your operating system's console (AKA terminal or command line). The console object provides functionality for outputting the value of text and objects, running timers, and counting iterations. These are useful debugging tools when you can actually execute your code in an interactive debugger (such as VS Code).

Log
The basic usage of the console object is to output a log message.

console.log('hello');
// OUTPUT: hello
You can create formatted messages in the log parameter.

console.log('hello %s', 'world');
// OUTPUT: hello world
You can even specify CSS declarations in order to style the log output.

console.log('%c JavaScript Demo', 'font-size:1.5em; color:green;');
// OUTPUT: JavaScript Demo //in large green text
Timers
If you are trying to see how long a piece of code is running you can wrap it with time and timeEnd calls and it will output the duration between the time and timeEnd calls.

console.time('demo time');
// ... some code that takes a long time.
console.timeEnd('demo time');
// OUTPUT: demo time: 9762.74 ms
Count
To see how many times a block of code is called you can use the count function.

console.count('a');
// OUTPUT: a: 1
console.count('a');
// OUTPUT: a: 2
console.count('b');

You can insert JavaScript into HTML either by directly including it in the HTML within the content of a <script> element, or by using the src attribute of the script element to reference an external JavaScript file.

index.js

function sayHello() {
  console.log('hello');
}
index.html
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
Notice that we call the sayHello and sayGoodbye JavaScript functions from the HTML in the onclick attribute of the button element. Special attributes like onclick automatically create event listeners for different DOM events that call the code contained in the attribute's value. The code specified by the attribute value can be a simple call to a function or any JavaScript code.

<button onclick="let i=1;i++;console.log(i)">press me</button>
<!-- OUTPUT: 2 -->
```

### Types and Constructors 
Declaring variables
Variables are declared using either the let or const keyword. let allows you to change the value of the variable while const will cause an error if you attempt to change it.

let x = 1;

const y = 2;
⚠ Originally JavaScript used the keyword var to define variables. This has been deprecated because it causes hard-to-detect errors in code related to the scope of the variable. You should avoid var and always declare your variables either with let or const.

Type
JavaScript defines several primitive types.

Type	Meaning
Null	The type of a variable that has not been assigned a value.
Undefined	The type of a variable that has not been defined.
Boolean	true or false.
Number	A 64-bit signed number.
BigInt	A number of arbitrary magnitude.
String	A textual sequence of characters.
Symbol	A unique value.
Of these types Boolean, Number, and String are the types commonly thought of when creating variables. However, variables may refer to the Null or Undefined primitive. Because JavaScript does not enforce the declaration of a variable before you use it, it is entirely possible for a variable to have the type of Undefined.

In addition to the above primitives, JavaScript defines several object types. Some of the more commonly used objects include the following:

Type	Use	Example
Object	A collection of properties represented by name-value pairs. Values can be of any type.	{a:3, b:'fish'}
Function	An object that has the ability to be called.	function a() {}
Date	Calendar dates and times.	new Date('1995-12-17')
Array	An ordered sequence of any type.	[3, 'fish']
Map	A collection of key-value pairs that support efficient lookups.	new Map()
JSON	A lightweight data-interchange format used to share information across programs.	{"a":3, "b":"fish"}
Common operators
When dealing with a number variable, JavaScript supports standard mathematical operators like + (add), - (subtract), * (multiply), / (divide), and === (equality). For string variables, JavaScript supports + (concatenation) and === (equality).

Type conversions
JavaScript is a weakly typed language. That means that a variable always has a type, but the variable can change type when it is assigned a new value, or that types can be automatically converted based upon the context that they are used in. Sometimes the results of automatic conversions can be unexpected from programmers who are used to strongly typed languages. Consider the following examples.

2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN
Getting unexpected results is especially common when dealing with the equality operator.

1 == '1';
// OUTPUT: true
null == undefined;
// OUTPUT: true
'' == false;
// OUTPUT: true
⚠ The unexpected results happen in JavaScript because it uses complex rules for defining equality that depend upon the conversion of a type to a boolean value. You will sometimes hear this referred to as falsy and truthy evaluations. To remove this confusion, JavaScript introduced the strict equality (===) and inequality (!==) operators. The strict operators skip the type conversion when computing equality. This results in the following.

1 === '1';
// OUTPUT: false
null === undefined;
// OUTPUT: false
'' === false;
// OUTPUT: false
Because strict equality is considered more intuitive, it is almost always preferred and should be used in your code.

Here is a fun example of JavaScript's type conversion. Execute the following in the browser's debugger console.

('b' + 'a' + +'a' + 'a').toLowerCase();
Conditionals
JavaScript supports many common programming language conditional constructs. This includes if, else, and if else. Here are some examples.

if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
You can also use the ternary operator. This provides a compact if else representation.

a === 1 ? console.log(1) : console.log('not 1');
You can use boolean operations in the expression to create complex predicates. Common boolean operators include && (and), || (or), and ! (not).

if (true && (!false || true)) {
  //...
}
Loops
JavaScript supports many common programming language looping constructs. This includes for, for in, for of, while, do while, and switch. Here are some examples.

for
Note the introduction of the common post increment operation (i++) for adding one to a number.

for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
do while
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
while
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
for in
The for in statement iterates over an object's property names.

const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b
For arrays the object's name is the array index.

const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
for of
The for of statement iterates over an iterable's (Array, Map, Set, ...) property values.

const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
Break and continue
All of the looping constructs demonstrated above allow for either a break or continue statement to abort or advance the loop.

let i = 0;
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

### strings
Strings are a primitive type in JavaScript. A string variable is specified by surrounding a sequence of characters with single quotes ('), double quotes ("), or backticks (`). The meaning of single or double quotes are equivalent, but the backtick defines a string literal that may contain JavaScript that is evaluated in place and concatenated into the string. A string literal replacement specifier is declared with a dollar sign followed by a curly brace pair. Anything inside the curly braces is evaluated as JavaScript. You can also use backticks to create multiline strings without having to explicitly escape the newline characters using \n.

'quoted text'; // " also works

const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
Unicode support
JavaScript supports Unicode by defining a string as a sequence of 16-bit unsigned integers that represent UTF-16-encoded characters. Unicode support allows JavaScript to represent most languages spoken on the planet. This includes those that are read from right to left.

حجر

أقول لهذا الحجر: أنا أنت. فيقول: لستَ مرناً الى هذا الحدّ. أقول: قلبي مثلك؟ فيقول:

However, there are several important steps you must take in order to make your web application fully internationalized. This includes handling of currency, time, dates, iconography, units of measure, keyboard layouts, and respecting local customs. Read this article on the W3C website to learn more about internationalization.

String functions
The string object has several interesting functions associated with it. Here are some of the commonly used ones.

Function	Meaning
length	The number of characters in the string
indexOf()	The starting index of a given substring
split()	Split the string into an array on the given delimiter string
startsWith()	True if the string has a given prefix
endsWith()	True if the string has a given suffix
toLowerCase()	Converts all characters to lowercase
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

# Functions

📖 **Deeper dive reading**: [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)

In JavaScript functions are first class objects. That means that they can be assigned a name, passed as a parameter, returned as a result, and referenced from an object or array just like any other variable.

The basic syntax of a function begins with the `function` keyword followed by zero or more parameters and a body that may contain zero or more return statements. The return statement may return a single value. Note that there are no type declarations, as the type is always inferred by the assignment of the value to the parameter.

```js
function hello(who) {
  return 'hello ' + who;
}

console.log(hello('world'));
// OUTPUT: hello world
```

A function without a return value usually exists to produce some side effect like modifying a parameter or interacting with an external program. In the following example the side effect of the function is to output text to the debugger console.

```js
function hello(who) {
  who.count++;
  console.log('hello ' + who.name);
}

hello({ name: 'world', count: 0 });
// OUTPUT: hello world
```

## Function parameters

When a function is called, the caller may choose what parameters to provide. If a parameter is not provided then the value of the parameter is `undefined` when the function executes.

In addition to explicitly passing the value of a parameter to a function, the function can define a default value. This is done by assigning a value to the parameter in the function declaration.

```js
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
```

## Anonymous functions

Functions in JavaScript are commonly assigned to a variable so that they can be passed as a parameter to some other function or stored as an object property. To easily support this common use you can define a function anonymously and assign it to a variable.

```js
// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2
```

## Creating, passing, and returning functions

Here are examples of assigning functions to variables, as well as using functions as parameters and return values.

```js
// Anonymous declaration of the function that is later assigned to a variable
const add = function (a, b) {
  return a + b;
};

// Function that logs as a side effect of its execution
function labeler(label, value) {
  console.log(label + '=' + value);
}

// Function that takes a function as a parameter and then executes the function as a side effect
function addAndLabel(labeler, label, adder, a, b) {
  labeler(label, adder(a, b));
}

// Passing a function to a function
addAndLabel(labeler, 'a+b', add, 1, 3);
// OUTPUT: a+b=4

// Function that returns a function
function labelMaker(label) {
  return function (value) {
    console.log(label + '=' + value);
  };
}

// Assign a function from the return value of the function
const nameLabeler = labelMaker('name');

// Calling the returned function
nameLabeler('value');
// OUTPUT: name=value
```

## Inner functions

Functions can also be declared inside other functions. This allows you to modularize your code without always exposing private details.

```
function labeler(value) {
  function stringLabeler(value) {
    console.log('string=' + value);
  }
  function numberLabeler(value) {
    console.log('number=' + value);
  }

  if (typeof value == 'string') {
    stringLabeler(value);
  } else if (typeof value == 'number') {
    numberLabeler(value);
  }
}

labeler(5);
// OUTPUT: number=5

labeler('fish');
// OUTPUT: string=fish
```

# JavaScript arrow function

Because functions are first order objects in JavaScript they can be declared anywhere and passed as parameters. This results in code with lots of anonymous functions cluttering things up. To make the code more compact the `arrow` syntax was created. This syntax replaces the need for the `function` keyword with the symbols `=>` placed after the parameter declaration. The enclosing curly braces are also optional.

This is a function in arrow syntax that takes no parameters and always returns 3.

```js
() => 3;
```

The following two invocations of sort are equivalent.

```js
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```

Besides being compact, the `arrow` function syntax has some important semantic differences from the standard function syntax. This includes restrictions that arrow functions cannot be used for constructors or iterator generators.

## Return values

Arrow functions also have special rules for the `return` keyword. The return keyword is optional if no curly braces are provided for the function and it contains a single expression. In that case the result of the expression is automatically returned. If curly braces are provided then the arrow function behaves just like a standard function.

```js
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

## This pointer

Next, arrow functions inherit the `this` pointer from the scope in which they are created. This makes what is known as a `closure`. A closure allows a function to continue referencing its creation scope, even after it has passed out of that scope. This can be tricky to wrap your head around, and we discuss it in detail when we later talk about JavaScript `scope`. For now consider the following example.

The function `makeClosure` returns an anonymous function using the arrow syntax. Notice that the `a` parameter is overridden, a new `b` variable is created, and both `a` and `b` are referenced in the arrow function. Because of that reference, they are both part of the closure for the returned function.

```js
function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b];
}
```

Next, we declare the variables `a` and `b` at the top level scope, and call `makeClosure` with `a`.

```js
const a = 'a';
const b = 'b';

const closure = makeClosure(a);
```

Now, when we call the `closure` function, it will output the values contained in the scope in which it was created, instead of the current values of the variables.

```js
console.log(closure());
// OUTPUT: ['a2', 'b2']

console.log(a, b);
// OUTPUT: 'a' 'b'
```

Closures provide a valuable property when we do things like execute JavaScript within the scope of an HTML page, because it can remember the values of variables when the function was created instead of what they are when they are executed.

## Putting it all together

Now that you know how functions work in JavaScript, let's look at an example that demonstrates the use of functions, arrow functions, parameters, a function as a parameter (callback), closures, and browser event listeners. This is done by implementing a `debounce` function.

The point of a debounce function is to only execute a specified function once within a given time window. Any requests to execute the debounce function more frequently than this will case the time window to reset. This is important in cases where a user can trigger expensive events thousands of times per second. Without a debounce the performance of your application can greatly suffer.

The following code calls the browser's `window.addEventListener` function to add a callback function that is invoked whenever the user scrolls the browser's web page. The first parameter to `addEventListener` specifies that it wants to listen for `scroll` events. The second parameter provides the function to call when a scroll event happens. In this case we call a function named `debounce`.

The debounce function takes two parameters, the time window for executing the window function, and the window function to call within that limit. In this case we will execute the arrow function at most every 500 milliseconds.

```js
window.addEventListener(
  'scroll',
  debounce(500, () => {
    console.log('Executed an expensive calculation');
  })
);
```

The debounce function implements the execution of windowFunc within the restricted time window by creating a closure that contains the current timeout and returning a function that will reset the timeout every time it is called. The returned function is what the scroll event will actually call when the user scrolls the page. However, instead of directly executing the `windowFunc` it sets a timer based on the value of `windowMs`. If the debounce function is called again before the window times out then it resets the timeout.

```js
function debounce(windowMs, windowFunc) {
  let timeout;
  return function () {
    console.log('scroll event');
    clearTimeout(timeout);
    timeout = setTimeout(() => windowFunc(), windowMs);
  };
}
```
# JavaScript array

📖 **Deeper dive reading**: [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

JavaScript array objects represent a sequence of other objects and primitives. You can reference the members of the array using a zero based index. You can create an array with the Array constructor or using the array literal notation shown below.

```js
const a = [1, 2, 3];
console.log(a[1]);
// OUTPUT: 2

console.log(a.length);
// OUTPUT: 3
```

## Object functions

The Array object has several interesting static functions associated with it. Here are some of the interesting ones.

| Function | Meaning                                                   | Example                       |
| -------- | --------------------------------------------------------- | ----------------------------- |
| push     | Add an item to the end of the array                       | `a.push(4)`                   |
| pop      | Remove an item from the end of the array                  | `x = a.pop()`                 |
| slice    | Return a sub-array                                        | `a.slice(1,-1)`               |
| sort     | Run a function to sort an array in place                  | `a.sort((a,b) => b-a)`        |
| values   | Creates an iterator for use with a `for of` loop          | `for (i of a.values()) {...}` |
| find     | Find the first item satisfied by a test function          | `a.find(i => i < 2)`          |
| forEach  | Run a function on each array item                         | `a.forEach(console.log)`      |
| reduce   | Run a function to reduce each array item to a single item | `a.reduce((a, c) => a + c)`   |
| map      | Run a function to map an array to a new array             | `a.map(i => i+i)`             |
| filter   | Run a function to remove items                            | `a.filter(i => i%2)`          |
| every    | Run a function to test if all items match                 | `a.every(i => i < 3)`         |
| some     | Run a function to test if any items match                 | `a.some(i => i < 1)`          |

```js
const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((v1, v2) => v1 + v2));
// OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4
```

## ☑ Assignment

Create a CodePen that defines a function named `testAll` that takes two parameters. The first parameter is an input array. The second parameter is a tester function that checks all the values of the input array. If the tester function returns true for each value in the input array, then `testAll` returns true.

Call `testAll` with an array of strings as the first parameter and an arrow function that returns true if the input has a length greater than 3.

Output the result of the call to `testAll` with the `console.log` function.

Here is a template for you to start with.

```js
function testAll(input, tester) {
  const result = // Your code here
  return result
}

const result = testAll(/* Your parameters here */);

console.log(result);
```

Once you are done coding, submit your CodePen URL to the Canvas assignment.

Don't forget to update your GitHub startup repository notes.md with all of the things you learned and want to remember.
```
function testAll(input, tester) {
  return input.every(tester);
}

const result = testAll(["abc", "bbbbb"], (i) => i.length > 3);

console.log(result);
```
## JSON

📖 **Deeper dive reading**:

- [MDN JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
- [Douglas Crockford: The JSON Saga](https://www.youtube.com/watch?v=-C-JoyNuQJs)

JavaScript Object Notation (JSON) was conceived by Douglas Crockford in 2001 while working at Yahoo! JSON, pronounced like the name Jason, received official standardization in 2013 and 2017 (ECMA-404, [RFC 8259](https://datatracker.ietf.org/doc/html/rfc8259)).

JSON provides a simple, and yet effective way, to share and store data. By design JSON is easily convertible to, and from, JavaScript objects. This makes it a very convenient data format when working with web technologies. Because of its simplicity, standardization, and compatibility with JavaScript, JSON has become one of the world's most popular data formats.

### Format

A JSON document contains one of the following data types:

| Type    | Example                 |
| ------- | ----------------------- |
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | [null,42,"crockford"]   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |

Most commonly, a JSON document contains an object. Objects contain zero or more key value pairs. The key is always a string, and the value must be one of the valid JSON data types. Key value pairs are delimited with commas. Curly braces delimit an object, square brackets and commas delimit arrays, and strings are always delimited with double quotes.

Here is an example of a JSON document.

```json
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```

JSON is always encoded with [UTF-8](https://en.wikipedia.org/wiki/UTF-8). This allows for the representation of global data.

### Converting to JavaScript

You can convert JSON to, and from, JavaScript using the `JSON.parse` and `JSON.stringify` functions.

```js
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```

Note that in this example, JSON cannot represent the JavaScript `undefined` object and so it gets dropped when converting from JavaScript to JSON.

# JavaScript object and classes

📖 **Deeper dive reading**: [MDN Classes in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)

A JavaScript object represents a collection of name value pairs referred to as properties. The property name must be of type String or Symbol, but the value can be of any type. Objects also have common object-oriented functionality such as constructors, a `this` pointer, static properties and functions, and inheritance.

Objects can be created with the new operator. This causes the object's constructor to be called. Once declared you can add properties to the object by simply referencing the property name in an assignment. Any type of variable can be assigned to a property. This includes a sub-object, array, or function. The properties of an object can be referenced either with dot (`obj.prop`) or bracket notation (`obj['prop']`).

```js
const obj = new Object({ a: 3 });
obj['b'] = 'fish';
obj.c = [1, 2, 3];
obj.hello = function () {
  console.log('hello');
};

console.log(obj);
// OUTPUT: {a: 3, b: 'fish', c: [1,2,3], hello: func}
```

The ability to dynamically modify an object is incredibly useful when manipulating data with an indeterminate structure.

⚠ Note the different uses of the term `object`. Object can refer to the standard JavaScript objects (e.g. `Promise, Map, Object, Function, Date, ...`), or it can refer specifically to the JavaScript Object object (i.e. `new Object()`), or it can refer to any JavaScript object you create (e.g. `{a:'a', b:2}` ). This overloaded usage can be a bit confusing.

## Object-literals

You can also declare a variable of object type with the `object-literal` syntax. This syntax allows you to provide the initial composition of the object.

```js
const obj = {
  a: 3,
  b: 'fish',
};
```

## Object functions

Object has several interesting static functions associated with it. Here are some of the commonly used ones.

| Function | Meaning                             |
| -------- | ----------------------------------- |
| entries  | Returns an array of key value pairs |
| keys     | Returns an array of keys            |
| values   | Returns an array of values          |

```js
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```

## Constructor

Any function that returns an object is considered a `constructor` and can be invoked with the `new` operator.

```js
function Person(name) {
  return {
    name: name,
  };
}

const p = new Person('Eich');
console.log(p);
// OUTPUT: {name: 'Eich'}
```

Because objects can have any type of property value you can create methods on the object as part of its encapsulation.

```js
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

## This pointer

Notice in the last example the use of the keyword `this` when we referred to the name property (`this.name`). The meaning of `this` depends upon the scope of where it is used, but in the context of an object it refers to a pointer to the object. We will talk more about the `this` pointer in the instruction on scope.

## Classes

You can use classes to define objects. Using a class clarifies the intent to create a reusable component rather than a one-off object. Class declarations look similar to declaring an object, but classes have an explicit constructor and assumed function declarations. The person object from above would look like the following when converted to a class.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```

You can make properties and functions of classes private by prefixing them with a `#`.

```js
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
```

## Inheritance

Classes can be extended by using the `extends` keyword to define inheritance. Parameters that need to be passed to the parent class are delivered using the `super` function. Any functions defined on the child that have the same name as the parent override the parent's implementation. A parent's function can be explicitly accessed using the `super` keyword.

```js
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

# JavaScript regular expressions

📖 **Deeper dive reading**: [MDN Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

Regular expression support is built right into JavaScript. If you are not familiar with regular expressions, you can think of them as textual pattern matchers. You use a regular expression to find text in a string so that you can replace it, or simply to know that it exists.

You can create a regular expression using the class constructor or a regular expression literal.

```js
const objRegex = new RegExp('ab*', 'i');
const literalRegex = /ab*/i;
```

The `string` class has several functions that accept regular expressions. This includes `match`, `replace`, `search`, and `split`. For a quick test to see if there is a match you can use the regular expression object's `test` function.

```js
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```

# JavaScript rest and spread

📖 **Deeper dive reading**:

- [MDN Rest](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [MDN Spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

## Rest

Sometimes you want a function to take an unknown number of parameters. For example, if you wanted to write a function that checks to see if some number in a list is equal to a given number, you could write this using an array.

```js
function hasNumber(test, numbers) {
  return numbers.some((i) => i === test);
}

const a = [1, 2, 3];
hasNumber(2, a);
// RETURNS: true
```

However sometimes you don't have an array to work with. In this case you could create one on the fly.

```js
function hasTwo(a, b, c) {
  return hasNumber(2, [a, b, c]);
}
```

But JavaScript provides the `rest` syntax to make this easier. Think of it as a parameter that contains the `rest` of the parameters. To turn the last parameter of any function into a `rest` parameter you prefix it with three periods. You can then call it with any number of parameters and they are all automatically combined into an array.

```js
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```

Note that you can only make the last parameter a `rest` parameter. Otherwise JavaScript would not know which parameters to combine into the array.

Technically speaking, `rest` allows JavaScript to provide what is called variadic functions.

## Spread

Spread does the opposite of rest. It take an object that is iterable (e.g. array or string) and expands it into a function's parameters. Consider the following.

```js
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```

# Scope

📖 **Deeper dive reading**:

- [MDN Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [MDN this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

Understanding JavaScript scope is essential for making your programs run as you expect. Scope is defined as the variables that are visible in the current context of execution. JavaScript has four different types of scope:

1. **Global** - Visible to all code
1. **Module** - Visible to all code running in a module
1. **Function** - Visible within a function
1. **Block** - Visible within a block of code delimited by curly braces

## Var

Initially JavaScript used the keyword `var` to declare a variable. The problem with var, unlike `const` or `let`, is that it ignores block scope. Variables declared with `var` are always logically hoisted to the top of the function. For example, the following code shows the same variable name being used within different enclosing scopes. However, because var ignores block scope the for loop is simply assigning a new value to `x` rather than declaring a new variable that has the same name.

```js
var x = 10;
console.log('start', x);

for (var x = 0; x < 1; x++) {
  console.log('middle', x);
}

console.log('end', x);

// OUTPUT: start 10
//         middle 0
//         end 1
```

⚠ There are few cases where it makes sense to use `var`. It is strongly suggested that you only use `const` and `let` unless you fully understand why you are using `var`.

## This

The keyword `this` represents a variable that points to an object that contains the context within the scope of the currently executing line of code. The `this` variable is automatically declared and you can reference `this` anywhere in a JavaScript program. Because the value of `this` depends upon the context in which it is referenced, there are three different contexts to which this can refer:

1. **Global** - When `this` is referenced outside a function or object it refers to the `globalThis` object. The globalThis object represents the context for runtime environment. For example, when running in a browser, globalThis refers to the browser's window object.
1. **Function** - When `this` is referenced in a function it refers to the object that owns the function. That is either an object you defined or globalThis if the function is defined outside of an object. Note that when running in JavaScript strict mode, a global function's this variable is undefined instead of globalThis.
1. **Object** - When `this` is referenced in an object it refers to the object.

```js
'use strict';

// global scope
console.log('global:', this);
console.log('globalThis:', globalThis);

// function scope for a global function
function globalFunc() {
  console.log('globalFunctionThis:', this);
}
globalFunc();

// object scope
class ScopeTest {
  constructor() {
    console.log('objectThis:', this);
  }

  // function scope for an object function
  objectFunc() {
    console.log('objectFunctionThis:', this);
  }
}

new ScopeTest().objectFunc();
```

Running the above code in a browser results in the following.

```
global: Window
globalThis: Window
globalFunctionThis: undefined
objectThis: ScopeTest
objectFunctionThis: ScopeTest
```

Note that if we were not using JavaScript strict mode then globalFunctionThis would refer to Window.

## Closure

A closure is defined as a function and its surrounding state. That means whatever variables are accessible when a function is created are available inside that function. This holds true even if you pass the function outside of the scope of its original creation.

Here is an example of a function that is created as part of an object. That means that function has access to the object's `this` pointer.

```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: function () {
    console.log(this.x);
  },
};

obj.f();
// OUTPUT: object
```

Arrow functions are a bit different because they inherit the `this` pointer of their creation context. So if we change our previous example to return an arrow function, then the `this` pointer at the time of creation will be globalThis.

```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  f: () => console.log(this.x),
};

obj.f();
// OUTPUT: global
```

However, if we make function in our object that **returns** an arrow function, then the `this` pointer will be the object's `this` pointer since that was the active context at the time the arrow function was created.

```js
globalThis.x = 'global';

const obj = {
  x: 'object',
  make: function () {
    return () => console.log(this.x);
  },
};

const f = obj.make();
f();
// OUTPUT: object
```

# JavaScript modules

📖 **Deeper dive reading**: [MDN JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

JavaScript modules allow for the partitioning and sharing of code. Initially JavaScript had no support for modules. Node.js, a server side JavaScript execution application, introduced the concept of modules in order to support the importing of packages of JavaScript from third party providers.

JavaScript got full module support with ES6, and they have become the standard module representation as [browser support](https://caniuse.com/es6-module-dynamic-import) for ES modules is now almost universal.

In order to differentiate between the two implementations, Node.js modules are called CommonJS modules, and JavaScript modules are called ES modules. For this discussion, we will focus only on ES modules.

Because modules create a file-based scope for the code they represent, you must explicitly `export` the objects from one file and then `import` them into another file. For example, here is a simple module that exports a function that displays an alert.

**alert.js**

```js
export function alertDisplay(msg) {
  alert(msg);
}
```

You can import the module's exported function into another module using the `import` keyword.

**main.js**

```js
import { alertDisplay } from './alert.js';

alertDisplay('called from main.js');
```

## ES Modules in the browser

When you use ES modules in the browser via HTML script references, things get a little complicated. The key thing to understand is that modules can only be called from other modules. You cannot access JavaScript contained in a module from the global scope that your non-module JavaScript is executing in.

From your HTML, you can specify that you are using an ES module by including a `type` attribute with the value of `module` in the `script` element. You can then import and use other modules. This is shown in the example below.

**index.html**

```html
<script type="module">
  import { alertDisplay } from './alert.js';
  alertDisplay('module loaded');
</script>
```

If we want to use a module in the global scope that our HTML or other non-module JavaScript is executing in, then we must leak it into the global scope. We do this by either attaching an event handler or explicitly adding a function to the global window object. In the example below, we expose the `alertDisplay` imported module function by attaching it to the global JavaScript `window` object so that it can then be called from the button `onclick` handler. We also expose the module function by attaching a `keypress` event.

**index.html**

```html
<html>
  <body>
    <script type="module">
      import { alertDisplay } from './alert.js';
      window.btnClick = alertDisplay;

      document.body.addEventListener('keypress', function (event) {
        alertDisplay('Key pressed');
      });
    </script>
    <button onclick="btnClick('button clicked')">Press me</button>
  </body>
</html>
```

Now, if the button is pushed or a key is pressed our ES module function will be called.

## Modules with web frameworks

Fortunately, when you use a web framework bundler, discussed in later instruction, to generate your web application distribution code, you usually don't have to worry about differentiating between global scope and ES module scope. The bundler will inject all the necessary syntax to connect your HTML to your modules. Historically, this was done by removing the modules and placing all of the JavaScript in a namespaced global partition. Now that ES Modules are supported on most browsers, the bundler will expose the ES module directly.

Because of the complex history of modules they can be a confusing topic, but it is well worth the time to understand how they work as they are a core piece of a web programmer's toolkit.

# Document Object Model

📖 **Deeper dive reading**:

- [MDN Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [W3C DOM specification](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html) - This official specification is only for reference

The Document Object Model (DOM) is an object representation of the HTML elements that the browser uses to render the display. The browser also exposes the DOM to external code so that you can write programs that dynamically manipulate the HTML.

The browser provides access to the DOM through a global variable name `document` that points to the root element of the DOM. If you open the browser's debugger console window and type the variable name `document` you will see the DOM for the document the browser is currently rendering.

```html
> document

<html lang="en">
  <body>
    <p>text1 <span>text2</span></p>
    <p>text3</p>
  </body>
</html>
```

```css
p {
  color: red;
}
```

For everything in an HTML document there is a node in the DOM. This includes elements, attributes, text, comments, and whitespace. All of these nodes form a big tree, with the document node at the top.

![dom](dom.jpg)

## Accessing the DOM

Every element in an HTML document implements the DOM Element interface, which is derived from the DOM Node interface. The [DOM Element Interface](https://developer.mozilla.org/en-US/docs/Web/API/Element) provides the means for iterating child elements, accessing the parent element, and manipulating the element's attributes. From your JavaScript code, you can start with the `document` variable and walk through every element in the tree.

```js
function displayElement(el) {
  console.log(el.tagName);
  for (const child of el.children) {
    displayElement(child);
  }
}

displayElement(document);
```

You can provide a CSS selector to the `querySelectorAll` function in order to select elements from the document. The `textContent` property contains all of the element's text. You can even access a textual representation of an element's HTML content with the `innerHTML` property.

```js
const listElements = document.querySelectorAll('p');
for (const el of listElements) {
  console.log(el.textContent);
}
```

## Modifying the DOM

The DOM supports the ability to insert, modify, or delete the elements in the DOM. To create a new element you first create the element on the DOM document. You then insert the new element into the DOM tree by appending it to an existing element in the tree.

```js
function insertChild(parentSelector, text) {
  const newChild = document.createElement('div');
  newChild.textContent = text;

  const parentElement = document.querySelector(parentSelector);
  parentElement.appendChild(newChild);
}

insertChild('#courses', 'new course');
```

To delete elements call the `removeChild` function on the parent element.

```js
function deleteElement(elementSelector) {
  const el = document.querySelector(elementSelector);
  el.parentElement.removeChild(el);
}

deleteElement('#courses div');
```

## Injecting HTML

The DOM also allows you to inject entire blocks of HTML into an element. The following code finds the first `div` element in the DOM and replaces all the HTML it contains.

```js
const el = document.querySelector('div');
el.innerHTML = '<div class="injected"><b>Hello</b>!</div>';
```

However, directly injecting HTML as a block of text is a common attack vector for hackers. If an untrusted party can inject JavaScript anywhere in your application then that JavaScript can represent itself as the current user of the application. The attacker can then make requests for sensitive data, monitor activity, and steal credentials. The example below shows how the img element can be used to launch an attack as soon as the page is loaded.

```html
<img src="bogus.png" onerror="console.log('All your base are belong to us')" />
```

If you are injecting HTML, make sure that it cannot be manipulated by a user. Common injection paths include HTML input controls, URL parameters, and HTTP headers. Either sanitize any HTML that contains variables, or simply use DOM manipulation functions instead of using `innerHTML`.

## Event Listeners

All DOM elements support the ability to attach a function that gets called when an event occurs on the element. These functions are called [event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener). Here is an example of an event listener that gets called when an element gets clicked.

```js
const submitDataEl = document.querySelector('#submitData');
submitDataEl.addEventListener('click', function (event) {
  console.log(event.type);
});
```

There are lots of possible events that you can add a listener to. This includes things like mouse, keyboard, scrolling, animation, video, audio, WebSocket, and clipboard events. You can see the full list on [MDN](https://developer.mozilla.org/en-US/docs/Web/Events). Here are a few of the more commonly used events.

| Event Category | Description           |
| -------------- | --------------------- |
| Clipboard      | Cut, copied, pasted   |
| Focus          | An element gets focus |
| Keyboard       | Keys are pressed      |
| Mouse          | Click events          |
| Text selection | When text is selected |

You can also add event listeners directly in the HTML. For example, here is a `onclick` handler that is attached to a button.

```html
<button onclick='alert("clicked")'>click me</button>
```

## ☑ Assignment

This [CodePen](https://codepen.io/leesjensen/pen/RwJJZBb) dynamically manipulates the DOM using JavaScript. Create a fork of the pen and take some time to experiment with it. Then complete the following:

1. Add a new table that represents the seven peaks of Utah County.

   - name: "Timpanogos", height: 11750, quality: 4.8
   - name: "Santaquin", height: 10687, quality: 3.8
   - name: "Lone Peak", height: 11253, quality: 5
   - name: "Provo Peak", height: 11068, quality: 4.1
   - name: "Cascade", height: 10908, quality: 3.2
   - name: "Nebo", height: 11928, quality: 4.8
   - name: "Spanish Fork", height: 10192, quality: 3.4

1. Sort the table when a header is clicked on
```
"use strict";

const SevenSummits = [
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Aconcagua", height: 6961, place: "Argentina" },
  { name: "Denali", height: 6194, place: "United States" },
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Elbrus", height: 5642, place: "Russia" },
  { name: "Vinson", height: 4892, place: "Antarctica" },
  { name: "Puncak Jaya", height: 4884, place: "Indonesia" }
];

const UtahCountySevenPeaks = [
  { name: "Timpanogos", height: 11750, quality: 4.8 },
  { name: "Santaquin", height: 10687, quality: 3.8 },
  { name: "Lone Peak", height: 11253, quality: 5 },
  { name: "Provo Peak", height: 11068, quality: 4.1 },
  { name: "Cascade", height: 10908, quality: 3.2 },
  { name: "Nebo", height: 11928, quality: 4.8 },
  { name: "Spanish Fork", height: 10192, quality: 3.4 }
];

const JazzMusic = [
  { title: "Take Five", artist: "Dave Brubeck", stars: 4.8 },
  { title: "So What", artist: "Miles Davis", stars: 3.8 },
  { title: "Take The A Train", artist: "Duke Ellington", stars: 4.2 },
  { title: "Round Midnight", artist: "Thelonious Monk", stars: 3.1 },
  { title: "My Favorite Things", artist: "John Coltrane", stars: 3.0 }
];

let currentData = SevenSummits;
let sortDirection = 1;

function table(data = SevenSummits) {
  if (!!data && data.length > 1) {
    currentData = data;
    const headers = parseHeader(data);
    const tableElement = generateTable(headers, data);

    const output = document.getElementById("output");

    removeAllChildNodes(output);
    output.appendChild(tableElement);
  } else {
    outputData("invalid input", data);
  }
}

function parseHeader(data) {
  let headers = [];
  for (const [key, value] of Object.entries(data[0])) {
    headers.push({ name: key, type: typeof value });
  }
  return headers;
}

function generateTable(headers, data) {
  const tableElement = document.createElement("table");
  tableElement.classList.add("a");

  addTableStyles(headers);

  generateHeader(headers, tableElement);
  generateRows(data, tableElement);

  return tableElement;
}

function generateHeader(headers, tableElement) {
  const rowElement = document.createElement("tr");
  tableElement.appendChild(rowElement);

  headers.forEach((header) => {
    const cellElement = document.createElement("th");
    rowElement.appendChild(cellElement);
    cellElement.setAttribute("onclick", `sortColumn(this)`);
    const textNode = document.createTextNode(header.name);
    cellElement.appendChild(textNode);
  });
}

function generateRows(data, tableElement) {
  data.forEach((dataRow) => {
    const rowElement = document.createElement("tr");
    tableElement.appendChild(rowElement);
    for (const [, value] of Object.entries(dataRow)) {
      const cellElement = document.createElement("td");
      rowElement.appendChild(cellElement);
      const textNode = document.createTextNode(value);
      cellElement.appendChild(textNode);
    }
  });
}

function addTableStyles(headers) {
  insertRule("#output table {border-collapse: collapse;}");
  insertRule("#output th,td {border: solid white thin;padding:.25em;}");
  insertRule(".selected {background: white; color:black;}");
  headers.forEach((header, index) => {
    if (header.type === "number") {
      insertRule(`#output tr td:nth-child(${index + 1}) {text-align:right;}`);
    }
  });
}

function insertRule(rule) {
  var sheet = window.document.styleSheets[0];
  sheet.insertRule(rule, sheet.cssRules.length);
}

function sortColumn(column) {
  sortDirection *= -1;
  const sortBy = column.innerText;
  const sortedData = currentData.sort(
    (a, b) => sortDirection * (a[sortBy] > b[sortBy] ? 1 : -1)
  );
  table(sortedData);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function outputData(title, data) {
  const output = document.getElementById("output");
  output.innerHTML = `<h3>${title}</h3><pre>${JSON.stringify(
    data,
    null,
    2
  )}</pre>`;
}
```

# Local storage

📖 **Deeper dive reading**: [MDN LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

The browser's `localStorage` API provides the ability to persistently store and retrieve data (i.e. scores, usernames, etc.,) on a user's browser across user sessions and HTML page renderings. For example, your frontend JavaScript code could store a user's name on one HTML page, and then retrieve the name later when a different HTML page is loaded. The user's name will also be available in local storage the next time the same browser is used to access the same website.

In addition to persisting application data between page renderings, `localStorage` is also used as a cache for when data cannot be obtained from the server. For example, your frontend JavaScript could store the last high scores obtained from the service, and then display those scores in the future if the service is not available.

## How to use LocalStorage

There are four main functions that can be used with localStorage.

| Function             | Meaning                                      |
| -------------------- | -------------------------------------------- |
| setItem(name, value) | Sets a named item's value into local storage |
| getItem(name)        | Gets a named item's value from local storage |
| removeItem(name)     | Removes a named item from local storage      |
| clear()              | Clears all items in local storage            |

A local storage value must be of type `string`, `number`, or `boolean`. If you want to store a JavaScript object or array, then you must first convert it to a JSON string with `JSON.stringify()` on insertion, and parse it back to JavaScript with `JSON.parse()` when retrieved.

## Example

Open your startup website and run the following code in the browser's dev tools console window.

```js
let user = 'Alice';

let myObject = {
  name: 'Bob',
  info: {
    favoriteClass: 'CS 260',
    likesCS: true,
  },
};

let myArray = [1, 'One', true];

localStorage.setItem('user', user);
localStorage.setItem('object', JSON.stringify(myObject));
localStorage.setItem('array', JSON.stringify(myArray));

console.log(localStorage.getItem('user'));
console.log(JSON.parse(localStorage.getItem('object')));
console.log(JSON.parse(localStorage.getItem('array')));
```

**Output**

```sh
Alice
{name: 'Bob', info: {favoriteClass: 'CS 260', likesCS: true}
[1, 'One', true]
```

# Promises

📖 **Deeper dive reading**:

- [MDN Using Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [MDN Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

The rendering process of your HTML executes on a single thread. That means that you cannot take a long time processing JavaScript on the main rendering thread. Long running, or blocking tasks, should be executed with the use of a JavaScript `Promise`. The execution of a promise allows the main rendering thread to continue while some action is executed in the background.
You create a promise by calling the Promise object constructor and passing it an executor function that runs the asynchronous operation. Executing asynchronously means that promise constructor may return before the promise executor function runs. The state of the promise execution is always in one of three possible states.

1. **pending** - Currently running asynchronously
1. **fulfilled** - Completed successfully
1. **rejected** - Failed to complete

We can demonstrate asynchronous execution by using the standard JavaScript `setTimeout` function to create a delay in the execution of the code. The setTimeout function takes the number of milliseconds to wait and a function to call after that amount of time has expired. We call the delay function in a for loop in the promise executor and also in a for loop outside the promise so that both code blocks are running in parallel.

```js
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

## Resolving and rejecting

Now that we know how to use a promise to execute asynchronously, we need to be able to set the state to `fulfilled` when things complete correctly, or to `rejected` when an error happens. The promise executor function takes two functions as parameters, `resolve` and `reject`. Calling `resolve` sets the promise to the `fulfilled` state, and calling `reject` sets the promise to the `rejected` state.

Consider the following "coin toss" promise that waits ten seconds and then has a fifty percent chance of resolving or rejecting.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('success');
    } else {
      reject('error');
    }
  }, 10000);
});
```

If you log the coinToss promise object to the console immediately after calling the constructor, it will display that it is in the `pending` state.

```js
console.log(coinToss);
// OUTPUT: Promise {<pending>}
```

If you wait ten seconds and then log the coinToss promise object again, the state will either show as `fulfilled` or `rejected` depending upon the way the coin landed.

```js
console.log(coinToss);
// OUTPUT: Promise {<fulfilled>}
```

## Then, catch, finally

With the ability to asynchronously execute and set the resulting state, we now need a way to generically do something with the result of a promise after it resolves. This is done with functionality similar to exception handling. The promise object has three functions: `then`, `catch`, and `finally`. The `then` function is called if the promise is fulfilled, `catch` is called if the promise is `rejected`, and `finally` is always called after all the processing is completed.

We can rework our coinToss example and make it so 10 percent of the time the coin falls off the table and resolves to the rejected state. Otherwise the promise resolves to fulfilled with a result of either `heads` or `tails`.

```js
const coinToss = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.1) {
      resolve(Math.random() > 0.5 ? 'heads' : 'tails');
    } else {
      reject('fell off table');
    }
  }, 10000);
});
```

We then chain the `then`, `catch` and `finally` functions to the coinToss object in order to handle each of the possible results.

```js
coinToss
  .then((result) => console.log(`Coin toss result: ${result}`))
  .catch((err) => console.log(`Error: ${err}`))
  .finally(() => console.log('Toss completed'));

// OUTPUT:
//    Coin toss result: tails
//    Toss completed
```
```
async function pickupPizza() {
  const order = createOrder();

  try {
    await placeOrder(order); before it was .then placeOrder(order)
    serveOrder(order);
  } catch (order) {
    orderFailure(order);
  }
}

function createOrder() {
  // Make the order and associate it with a new HTML element
  const id = Math.floor(Math.random() * 10000);
  const orderElement = document.createElement("li");
  const order = { element: orderElement, id: id };

  // Insert the order into the HTML list
  orderElement.innerHTML = `<span>[${order.id}] 😋 <i>Waiting</i> ...</span>`;
  const orders = document.getElementById("orders");
  orders.appendChild(orderElement);

  return order;
}

async function placeOrder(order) {
  return new Promise((resolve, reject) => {
    doWork(order, 1000, 3000, resolve, reject, `cashier too busy`);
  });
}

# JavaScript exceptions

📖 **Deeper dive reading**: [MDN try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

JavaScript supports exception handling using the `try catch` and `throw` syntax. An exception can be triggered whenever your code generates an exception using the `throw` keyword, or whenever an exception is generated by the JavaScript runtime, for example, when an undefined variable is used.

To catch a thrown exception, you wrap a code block with the `try` keyword, and follow the try block with a `catch` block. If within the try block, including any functions that block calls, an exception is thrown, then all of the code after the throw is ignored, the call stack is unwound, and the catch block is called.

In addition to a catch block, you can specify a `finally` block that is always called whenever the `try` block is exited regardless if an exception was ever thrown.

The basic syntax looks like the following.

```js
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```

For example:

```js
function connectDatabase() {
  throw new Error('connection error');
}

try {
  connectDatabase();
  console.log('never executed');
} catch (err) {
  console.log(err);
} finally {
  console.log('always executed');
}

// OUTPUT: Error: connection error
//         always executed
```

⚠ When first using exception handling it is tempting to use it as way to handle normal flows of execution. For example, throwing a `file not found` exception when it is common for users to request nonexistent files. Throwing exceptions should only happen when something truly exceptional occurs. For example, a `file not found` exception when the file is required for your code to run, such as a required configuration file. Your code will be easier to debug, and your logs more meaningful if you restrict exceptions to truly exceptional situations.

## Fallbacks

The fallback pattern is commonly implemented using exception handling. To implement the fallback pattern you put the normal feature path in a try block and then provide a fallback implementation in the catch block. For example, normally you would get the high scores for a game by making a network request, but if the network is not available then a locally cached version of the last available scores is used. By providing a fallback, you can always return something, even if the desired feature is temporarily unavailable.

```js
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
```

# JavaScript destructuring

📖 **Deeper dive reading**: [MDN Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

Destructuring, not to be confused with destructing, is the process of pulling individual items out of an existing one, or removing structure. You can do this with either arrays or objects. This is helpful when you only care about a few items in the original structure.

An example of destructuring arrays looks like the following.

```js
const a = [1, 2, 4, 5];

// destructure the first two items from a, into the new variables b and c
const [b, c] = a;

console.log(b, c);
// OUTPUT: 1, 2
```

Note that even though it looks like you are declaring an array with the syntax on the left side of the expression, it is only specifying that you want to destructure those values out of the array.

You can also combine multiple items from the original object using rest syntax.

```js
const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```

This works in a similar manner for objects, except with arrays, the assignment of the associated value was assumed by the positions in the two arrays. When destructuring objects, you explicitly specify the properties you want to pull from the source object.

```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a, c } = o;

console.log(a, c);
// OUTPUT 1, ['fish', 'cats']
```

You can also map the names to new variables instead of just using the original property names.

```js
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
```

Default values may also be provided for missing ones.

```js
const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
```

Note that all of the above examples created new constant variables, but you can also use destructuring to reassign existing variables.

```js
let a = 22;

[a] = [1, 2, 3];

console.log(a);
// OUTPUT: 1
```

# JavaScript Async/await

📖 **Deeper dive reading**: [MDN async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

JavaScript Promise objects are great for asynchronous execution, but as developers began to build large systems with promises they started wanting a more concise representation. This was provided with the introduction of the `async/await` syntax. The `await` keyword wraps the execution of a promise and removed the need to chain functions. The `await` expression will block until the promise state moves to `fulfilled`, or throws an exception if the state moves to `rejected`. For example, if we have a function that returns a coin toss promise.

```js
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

We can create equivalent executions with either a promise `then/catch` chain, or an `await` with a `try/catch` block.

**then/catch chain version**

```js
coinToss()
  .then((result) => console.log(`Toss result ${result}`))
  .catch((err) => console.error(`Error: ${err}`))
  .finally(() => console.log(`Toss completed`));
```

**async, try/catch version**

```js
try {
  const result = await coinToss();
  console.log(`Toss result ${result}`);
} catch (err) {
  console.error(`Error: ${err}`);
} finally {
  console.log(`Toss completed`);
}
```

## async

One important restriction for working with `await` is that you cannot call await unless it is called at the top level of the JavaScript, or is in a function that is defined with the `async` keyword. Applying the `async` keyword transforms the function so that it returns a promise that will resolve to the value that was previously returned by the function. Basically this turns any function into an asynchronous function, so that it can in turn make asynchronous requests.

This can be demonstrated with a function that makes animal noises. Notice that the return value is a simple string.

```js
function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: moo
```

If we designate the function to be asynchronous then the return value becomes a promise that is immediately resolved and has a value that is the return value of the function.

```js
async function cow() {
  return 'moo';
}
console.log(cow());
// OUTPUT: Promise {<fulfilled>: 'moo'}
```

We then change the cow function to explicitly create a promise instead of the automatically generated promise that the await keyword generates.

```js
async function cow() {
  return new Promise((resolve) => {
    resolve('moo');
  });
}
console.log(cow());
// OUTPUT: Promise {<pending>}
```

You can see that the promise is in the pending state because the promise's execution function has not yet resolved.

## await

The `async` keyword declares that a function returns a promise. The `await` keyword wraps a call to the `async` function, blocks execution until the promise has resolved, and then returns the result of the promise.

We can demonstrate `await` in action with the cow promise from above. If we log the output from invoking `cow` then we see that the return value is a promise. However, if we prefix the call to the function with the await keyword, execution will stop until the promise has resolved, at which point the result of the promise is returned instead of the actual promise object.

```js
console.log(cow());
// OUTPUT: Promise {<pending>}

console.log(await cow());
// OUTPUT: moo
```

By combining `async`, to define functions that return promises, with `await`, to wait on the promise, you can create code that is asynchronous, but still maintains the flow of the code without explicitly using callbacks.

## Putting it all together

You can see the benefit for `async`/`await` clearly by considering a case where multiple promises are required. For example, when calling the `fetch` web API on an endpoint that returns JSON, you would need to resolve two promises. One for the network call, and one for converting the result to JSON. A promise implementation would look like the following.

```js
const httpPromise = fetch('https://simon.cs260.click/api/user/me');
const jsonPromise = httpPromise.then((r) => r.json());
jsonPromise.then((j) => console.log(j));
console.log('done');

// OUTPUT: done
// OUTPUT: {email: 'bud@mail.com', authenticated: true}
```

With async/await, you can clarify the code intent by hiding the promise syntax, and also make the execution block until the promise is resolved.

```js
const httpResponse = await fetch('https://simon.cs260.click/api/user/me');
const jsonResponse = await httpResponse.json();
console.log(jsonResponse);
console.log('done');

// OUTPUT: {email: 'bud@mail.com', authenticated: true}
// OUTPUT: done
```

# Midterm Review
What does the link element do?

The <link> element in HTML is used to link external resources like stylesheets to a document. For example, it is commonly used to connect a webpage to a CSS file.
What does a div tag do?

The <div> element is a block-level container used to group elements for styling or layout purposes. It doesn't add any specific styling on its own but allows for CSS or JavaScript manipulation.
What is the difference between the #title and .grid selector?

#title targets an element with the id of title. IDs are unique and only apply to one element per page.
.grid targets elements with the class grid. Classes can be used on multiple elements.
What is the difference between padding and margin?

Padding is the space between the content and the element's border.
Margin is the space outside the element's border, between the element and its surroundings.
Given this HTML and this CSS, how will the images be displayed using flex?

Flexbox layout is used for arranging elements in rows or columns. Depending on the exact CSS provided, images will likely be aligned in a flexible, responsive row or column format.
What does the following padding CSS do?

Padding in CSS creates space between an element's content and its border. For example, padding: 10px 20px; would add 10px on top and bottom, and 20px on left and right.
What does the following code using arrow syntax function declaration do?

Arrow functions are a shorthand for regular function declarations in JavaScript. The arrow syntax const fn = () => {...} is often used for more concise functions.
What does the following code using map with an array output?

The map() method in JavaScript creates a new array by applying a function to each element of the original array. The output will depend on the transformation done inside the map callback.
What does the following code output using getElementByID and addEventListener?

This code adds an event listener to a DOM element (identified by its ID), which will trigger an action when the event occurs (e.g., a button click).
What does the following line of JavaScript do using a # selector?

The # selector in JavaScript typically refers to document.querySelector('#id'), which selects an element by its id.
Which of the following are true? (mark all that are true about the DOM)

The DOM is a tree-like structure that represents HTML elements as objects. It's essential for interacting with HTML via JavaScript.
By default, the HTML span element has a default CSS display property value of:

The span element has a default display property of inline.
How would you use CSS to change all the div elements to have a background color of red?

You can use the selector div { background-color: red; }.
How would you display an image with a hyperlink in HTML?

Use an anchor tag (<a>) wrapping an image tag (<img>): <a href="link"><img src="image.jpg"></a>.
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

The order is: content, padding, border, margin.
Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?

You could wrap "trouble" in a span and use span { color: green; }.
What will the following code output when executed using a for loop and console.log?

Without seeing the code, it’s likely to log values iterated over by the loop, depending on the loop structure.
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

document.getElementById("byu").style.color = "green";
What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

Paragraph: <p>
Ordered list: <ol>
Unordered list: <ul>
Second level heading: <h2>
First level heading: <h1>
Third level heading: <h3>
How do you declare the document type to be HTML?

<!DOCTYPE html>
What is valid JavaScript syntax for if, else, for, while, switch statements?

Example:
javascript
Copy code
if (condition) { ... } 
else { ... } 
for (let i = 0; i < n; i++) { ... } 
while (condition) { ... } 
switch (value) { case x: ... break; }
What is the correct syntax for creating a JavaScript object?

Example: const obj = { key1: "value1", key2: "value2" };
Is it possible to add new properties to JavaScript objects?

Yes, you can dynamically add new properties to objects: obj.newKey = "newValue";
If you want to include JavaScript on an HTML page, which tag do you use?

Use the <script> tag.
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

Use document.getElementById("animal").textContent = "crow";
Which of the following correctly describes JSON?

JSON (JavaScript Object Notation) is a lightweight format for data exchange, using key-value pairs and arrays.
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?

chmod: Changes file permissions
pwd: Prints current directory
cd: Changes directory
ls: Lists files
vim: Opens Vim text editor
nano: Opens Nano text editor
mkdir: Creates a directory
mv: Moves or renames files
rm: Removes files or directories
man: Opens manual pages for commands
ssh: Connects to a remote server via SSH
ps: Displays process statuses
wget: Downloads files from the web
sudo: Runs commands with superuser privileges
Which console command creates a remote shell session?

ssh
What is true when the -la parameter is specified for the ls console command?

It lists all files, including hidden ones (-a), with detailed information (-l).
For the domain name banana.fruit.bozo.click, which is the top-level domain, subdomain, and root domain?

Top-level domain: .click
Subdomain: banana
Root domain: bozo.click
Is a web certificate necessary to use HTTPS?

Yes, HTTPS requires a valid SSL/TLS certificate.
Can a DNS A record point to an IP address or another A record?

A DNS A record points to an IP address, not another A record.
Port 443, 80, 22 is reserved for which protocol?

443: HTTPS
80: HTTP
22: SSH
What will the following code using Promises output when executed?

Without seeing the code, promises usually resolve or reject asynchronously, logging the corresponding result based on resolution or rejection.

## kahoot
```
const f = y => ++y;
console.log(f(3))
```
- outpus 4

- flex column revers will make the first line say world and the second say hello
- import css fonts from google using @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
```
let a = ['cow', 'rat', 'fish'];
leb b = a.filter(v => v.match(/A|f/i));
console.log(b);
```
- /A/f/i - looks for a or f and makes it case insensitice
- filter - makes so it contains only the elemennts of a that with these
- outputs ['rat', 'fish']

- document.querySelector('p').addEventListener('mouseover', console.log); 
    - adds a mouseover event listerner to a p elements
- valid javascrpit in html
    - <script>1</script>
    - <div onclick>
- {n:1} is valid js object
- `<a href="https://>s</a>` is valid hyperlink while <link> is not

- not valid JSON  
    - {'x':3}
    - {"x":undefined}
    - {x:3}
- valid JSON - {"X":3}
- chmod +x deploy.sh - makes script exectuable

```
const p = new Promise((resolve, reject) => {
    setTimeout(() = > {
        console.log('taco');
        resolve(true);
    }, 1000);
});
console.log('burgue');

p
.then((result) => console.log('shake'))
.cathc((e) => console.log('salad'))
.finally(() => console.log('noodles'))

console.log('fries');
```
- output is burgue, fries, taco, shake, noodles
- Deploy to your production environment using the deployFiles.sh script found in the example class application. Take some time to understand how the script works. The script does three things. Deletes any previous deployment for simon, copies up all of the files found in the project directory, and makes sure Caddy is hosting the files under the simon subdomain of your domain (e.g. simon.yourdomain.click).
- /deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon

## Regex Cheat Sheet
- `.` - any character except newline
- `\d` - digit (0-9)
- `\D` - not a digit
- `\w` - word character (a-z, A-Z, 0-9, _)
- `\W` - not a word character
- `\s` - whitespace (space, tab, newline)
- `\S` - not whitespace
- `\b` - word boundary
- `\B` - not a word boundary
- `^` - beginning of a string
- `$` - end of a string
- `[]` - matches characters in brackets
- `[^ ]` - matches characters not in brackets
- `|` - either or
- `()` - group
- `*` - 0 or more
- `+` - 1 or more
- `?` - 0 or 1
- `{3}` - exact number
- `{3,4}` - range of numbers (minimum, maximum)

- Install and configure Vite
- Reorganize the code
- Convert to React Bootstrap
- Enable React
- Create app component
- Create view components
- Create the router
- Convert HTML to React components
- Replace deployment script

# Deployment and production
- ./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon
- The -k parameter provides the credential file necessary to access your production environment. 
- The -h parameter is the domain name of your production environment. - The -s parameter represents the name of the application you are deploying (either simon or startup).

# Startup login
Add code for connecting to the database
Provide endpoints for adding, updating, and deleting your application data in the database
Persist data in MongoDB.
Display the user data in the frontend by manipulating the DOM.
Allow new users to create accounts by providing credentials
Store encrypted credentials in your database
Allow existing users to provide credentials
Allow existing users to logout
Authenticate users by comparing provided credentials against those stored in the database
- Restrict access to parts of the application that require authorization
- Debug your application using VS Code's Node debugger and the browser's dev tools, in your development environment to verify it is working correctly.
- Periodically commit and push your code to GitHub.
- Periodically update your startup repository's notes.md file to reflect what you have learned and want to remember.
- Push your final version of your project to GitHub.
- Deploy your startup application to your production environment (your server).
- Make sure your application is available from your production environment.
- Upload the URL to your startup application to the Canvas assignment.

# Web frameworks

📖 **Deeper dive reading**: [MDN Introduction to client-side frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)

Web frameworks seek to make the job of writing web applications easier by providing tools for completing common application tasks. This includes things like modularizing code, creating single page applications, simplifying reactivity, and supporting diverse hardware devices.

Some frameworks take things beyond the standard web technologies (HTML, CSS, JavaScript) and create new hybrid file formats that combine things like HTML and JavaScript into a single file. Examples of this include React JSX, Vue SFC, and Svelte files. Abstracting away the core web file formats puts the focus on functional components rather than files.

There are lots of web frameworks to choose from and they evolve all the time. You can view the latest popularity poll at [StateOfJS](https://stateofjs.com).

![web frameworks](stateofjs-webframeworks.jpg)

\- **Source**: _StateOfJS web framework poll_

Each framework has advantages and disadvantages. Some are very prescriptive (opinionated) about how to do things, some have major institutional backing, and others have a strong open source community. Other factors you want to consider include how easy it is to learn, how it impacts productivity, how performant it is, how long it takes to build, and how actively the framework is evolving.

## Hello world examples

For our classwork we will use the web framework React. However, before we dig into React let's look at how the major frameworks would render a simple hello world application.

### Vue

[Vue](https://vuejs.org/) combines HTML, CSS, and JavaScript into a single file. HTML is represented by a `template` element that can be aggregated into other templates.

**SFC**

```html
<script>
  export default {
    data() {
      return {
        name: 'world',
      };
    },
  };
</script>

<style>
  p {
    color: green;
  }
</style>

<template>
  <p>Hello {{ name }}!</p>
</template>
```

### Svelte

Like Vue, [Svelte](https://svelte.dev/) combines HTML, CSS, and JavaScript into a single file. The difference here is that Svelte requires a transpiler to generate browser-ready code, instead of a runtime virtual DOM.

**Svelte file**

```html
<script>
  let name = 'world';
</script>

<style>
  p {
    color: green;
  }
</style>

<p>Hello {name}!</p>
```

### React

React combines JavaScript and HTML into its component format. CSS must be declared outside of the JSX file. The component itself leverages the functionality of JavaScript and can be represented as a function or class.

**JSX**

```jsx
import 'hello.css';

const Hello = () => {
  let name = 'world';

  return <p>Hello {name}</p>;
};
```

**CSS**

```css
p {
  color: green;
}
```

### Angular component

An Angular component defines what JavaScript, HTML, and CSS are combined together. This keeps a fairly strong separation of files that are usually grouped together in a directory rather than using the single file representation.

**JS**

```js
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  name: string;
  constructor() {
    this.name = 'world';
  }
}
```

**HTML**

```html
<p>hello {{name}}</p>
```

**CSS**

```css
p {
  color: green;
}
```

# React

![React Logo](reactLogo.png)

🎥 **Instruction video**: [React introduction](https://youtu.be/R2I89JGr2TM)

📖 **Recommended reading**:

- [MDN React Introduction Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- [React Quick Start](https://react.dev/learn#components)

React, and its associated projects, provide a powerful web programming framework. The name React comes from its focus on making reactive web page components that automatically update based on user interactions or changes in the underlying data.

![Jordan Walke](jordanWalke.jpg)

> “The best drug is getting little things done that have been weighing on you. Instant high.”
>
> — Jordan Walke (_Source_: [Twitter](https://twitter.com/jordwalke/status/1554625863089418243?cxt=HHwWhsCjgYv_kZMrAAAA))

React was created by Jordan Walke for use at Facebook in 2011. It was first used with Facebook's news feed and then as the main framework for Instagram. Shortly thereafter, Facebook open sourced the framework and it was quickly adopted by many popular web applications.

React abstracts HTML into a JavaScript variant called [JSX](https://reactjs.org/docs/introducing-jsx.html). JSX is converted into valid HTML and JavaScript using a preprocessor called [Babel](https://babeljs.io/). For example, the following is a JSX file. Notice that it mixes both HTML and JavaScript into a single representation.

```jsx
const i = 3;
const list = (
  <ol class='big'>
    <li>Item {i}</li>
    <li>Item {3 + i}</li>
  </ol>
);
```

Babel will convert that into valid JavaScript:

```js
const i = 3;
const list = React.createElement(
  'ol',
  { class: 'big' },
  React.createElement('li', null, 'Item ', i),
  React.createElement('li', null, 'Item ', 3 + i)
);
```

The `React.createElement` function will then generate DOM elements and monitor the data they represent for changes. When a change is discovered, React will trigger dependent changes.

# Components

📖 **Recommended reading**: [React.dev - Your First Component](https://react.dev/learn/your-first-component)

React components allow you to modularize the functionality of your application. This allows the underlying code to directly represent the components that a user interacts with. It also enables code reuse as common application components often show up repeatedly.

## The render function

One of the primary purposes of a component is to generate the user interface. This is done with the component's `render` function. Whatever is returned from the `render` function is inserted into the component HTML element.

As a simple example, a JSX file containing a React component element named `Demo` would cause React to load the `Demo` component, call the `render` function, and insert the result into the place of the `Demo` element.

**JSX**

```jsx
<div>
  Component: <Demo />
</div>
```

Notice that `Demo` is not a valid HTML element. The transpiler will replace this tag with the resulting rendered HTML.

**React component**

```js
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}
```

**Resulting HTML**

```html
<div>Component: <b>Hello world</b></div>
```

## Properties

React components also allow you to pass information to them in the form of element properties. The component receives the properties in its constructor and then can display them when it renders.

**JSX**

```jsx
<div>Component: <Demo who="Walke" /><div>
```

**React component**

```jsx
function Demo(props) {
  return <b>Hello {props.who}</b>;
}
```

**Resulting HTML**

```html
<div>Component: <b>Hello Walke</b></div>
```

## State

In addition to properties, a component can have internal state. Component state is created by calling the `React.useState` hook function. The `useState` function returns a variable that contains the current state and a function to update the state. The following example creates a state variable called `clicked` and toggles the click state in the `updateClicked` function that gets called when the paragraph text is clicked.

```jsx
const Clicker = () => {
  const [clicked, updateClicked] = React.useState(false);

  const onClicked = (e) => {
    updateClicked(!clicked);
  };

  return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```

You should note that you can use JSX even without a function. A simple variable representing JSX will work anyplace you would otherwise provide a component.

```jsx
const hello = <div>Hello</div>;

ReactDOM.render(hello, document.getElementById('root'));
```

## Class style components

In addition to the preferred `function style` components demonstrated above, React also supports `class style` components. However, you should note that the React team is moving away from the class style representation, and for that reason you should probably not use it. With that said, you are likely to see class style components and so you should be aware of the syntax. Below is the equivalent class style component for the `Clicker` component that we created above.

The major difference is that properties are loaded on the constructor and state is set using a `setState` function on the component object.

```jsx
class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  onClicked() {
    this.setState({
      clicked: !this.state.clicked,
    });
  }
  render() {
    return <p onClick={(e) => this.onClicked(e)}>clicked: {`${this.state.clicked}`}</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```

## Reactivity

A component's properties and state are used by the React framework to determine the reactivity of the interface. Reactivity controls how a component reacts to actions taken by the user or events that happen within the application. Whenever a component's state or properties change, the `render` function for the component and all of its dependent component `render` functions are called.

## ☑ Assignment

Create a fork of this [CodePen](https://codepen.io/leesjensen/pen/Yzvaver) and experiment.

Try the following:

1. Add a new property to the Demo component that provides the background color for the component.
2. Add another state variable that changes the color on a mouse over event.

When you are done submit your CodePen URL to the Canvas assignment.

### 🧧 Possible solution

If you get stuck here is a possible solution.

```jsx
function App() {
  return (
    <div>
      Function Style Component: <Demo who='function' initialColor='yellow' />
    </div>
  );
}

const Demo = ({ who, initialColor }) => {
  const [color, setColor] = React.useState(initialColor);
  const [outlook, setOutlook] = React.useState('beautiful');

  function changeOutlook() {
    setOutlook(outlook === 'exciting' ? 'beautiful' : 'exciting');
  }

  function changeColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor('#' + randomColor);
  }

  return (
    <div className='component' onMouseOver={changeColor} style={{ background: color }}>
      <p>
        Hello {outlook} {who}
      </p>
      <button onClick={changeOutlook}>change</button>
    </div>
  );
};
```

# React hooks

📖 **Recommended reading**: [Reactjs.org - Hooks Overview](https://reactjs.org/docs/hooks-overview.html)

React hooks allow React function style components to be able to do everything that a class style component can do and more. Additionally, as new features are added to React they are including them as hooks. This makes function style components the preferred way of doing things in React. You have already seen one use of hooks to declare and update state in a function component with the `useState` hook.

```jsx
function Clicker({initialCount}) {
  const [count, updateCount] = React.useState(initialCount);
  return <div onClick={() => updateCount(count + 1)}>Click count: {count}</div>;
}

ReactDOM.render(<Clicker initialCount={3} />, document.getElementById('root'));
```

## useEffect hook

The `useEffect` hook allows you to represent lifecycle events. For example, if you want to run a function every time the component completes rendering, you could do the following.

```jsx
function UseEffectHookDemo() {
  React.useEffect(() => {
    console.log('rendered');
  });

  return <div>useEffectExample</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```

You can also take action when the component cleans up by returning a cleanup function from the function registered with `useEffect`. In the following example, every time the component is clicked the state changes and so the component is rerendered. This causes both the cleanup function to be called in addition to the hook function. If the function was not rerendered then only the cleanup function would be called.

```jsx
function UseEffectHookDemo() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });

  return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```

This is useful when you want to create side effects for things such as tracking when a component is displayed or hidden, or creating and disposing of resources.

## Hook dependencies

You can control what triggers a `useEffect` hook by specifying its dependencies. In the following example we have two state variables, but we only want the `useEffect` hook to be called when the component is initially called and when the first variable is clicked. To accomplish this you pass an array of dependencies as a second parameter to the `useEffect` call.

```jsx
function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```

If you specify an empty array `[]` as the hook dependency then it is only called when the component is first rendered.

Note that hooks can only be used in function style components and must be called at the top scope of the function. That means a hook cannot be called inside of a loop or conditional. This restriction ensures that hooks are always called in the same order when a component is rendered.

# Router

🔑 **Required reading**: [React Router DOM Tutorial](https://blog.webdevsimplified.com/2022-07/react-router/)

A web framework router provides essential functionality for single-page applications. With a multiple-webpage application the headers, footers, navigation, and common components must be either duplicated in each HTML page, or injected before the server sends the page to the browser. With a single page application, the browser only loads one HTML page and then JavaScript is used to manipulate the DOM and give it the appearance of multiple pages. The router defines the routes a user can take through the application, and automatically manipulates the DOM to display the appropriate framework components.

React does not have a standard router package, and there are many that you can choose from. We will use [react-router-dom](https://www.npmjs.com/package/react-router-dom) Version 6. The simplified routing functionality of React-router-dom derives from the project [react-router](https://www.npmjs.com/package/react-router) for its core functionality. Do not confuse the two, or versions of react-router-dom before version 6, when reading tutorials and documentation.

![React Router](routerExample.gif)

A basic implementation of the router consists of a `BrowserRouter` component that encapsulates the entire application and controls the routing action. The `Link`, or `NavLink`, component captures user navigation events and modifies what is rendered by the `Routes` component by matching up the `to` and `path` attributes.

```jsx
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
```

## ☑ Assignment

Create a fork of this [CodePen](https://codepen.io/leesjensen/pen/poKLKaX) and add another component for the path of `/scores`.

When you are done submit your CodePen URL to the Canvas assignment.

Don't forget to update your GitHub startup repository `notes.md` with all of the things you learned and want to remember.

# Reactivity

Making the UI react to changes in user input or data, is one of the architectural foundations of React. React enables reactivity with three major pieces of a React component: `props`, `state`, and `render`.

When a component's JSX is rendered, React parses the JSX and creates a list of any references to the component's `state` or `prop` objects. React then monitors those objects and if it detects that they have changed it will call the component's `render` function so that the impact of the change is visualized.

The following example contains two components: a parent `<Survey/>` component and a child `<Question/>` component. The Survey has a state named `color`. The Question has a property named `answer`. The Survey passes its `color` state to the Question as a property. This means that any change to the Survey's color will also be reflected in the Question's color. This is a powerful means for a parent to control a child's functionality.

Be careful about your assumptions of when state is updated. Just because you called `updateState` does not mean that you can access the updated state on the next line of code. The update happens asynchronously, and therefore you never really know when it is going to happen. You only know that it will eventually happen.

```jsx
const Survey = () => {
  const [color, updateColor] = React.useState('#737AB0');

  // When the color changes update the state
  const onChange = (e) => {
    updateColor(e.target.value);
  };

  return (
    <div>
      <h1>Survey</h1>

      {/* Pass the Survey color  as a parameter to the Question.
          When the color changes the Question parameter will also be updated and rendered. */}
      <Question answer={color} />

      <p>
        <span>Pick a color: </span>
        {/* Set the Survey color state as a the value of the color picker.
            When the color changes, the value will also be updated and rendered. */}
        <input type='color' onChange={(e) => onChange(e)} value={color} />
      </p>
    </div>
  );
};

// The Question component
const Question = ({ answer }) => {
  return (
    <div>
      {/* Answer rerendered whenever the parameter changes */}
      <p>Your answer: {answer}</p>
    </div>
  );
};

ReactDOM.render(<Survey />, document.getElementById('root'));
```

## ☑ Assignment

Create a fork of this [CodePen](https://codepen.io/leesjensen/pen/NWzYzXE) and experiment. Try changing the input from using the color and radio button, to using an edit box that reactively displays the text as you type.

When you are done submit your CodePen URL to the Canvas assignment.

Don't forget to update your GitHub startup repository `notes.md` with all of the things you learned and want to remember.

### 🧧 Possible solution

If you get stuck here is a possible solution.

```jsx
const Survey = () => {
  const [text, updateText] = React.useState('');

  const onChange = (e) => {
    updateText(e.target.value);
  };
  return (
    <div>
      <h1>Survey</h1>
      <Question answer={text} />

      <p>
        <span>Type some text: </span>
        <input
          type='text'
          onChange={(e) => onChange(e)}
          placeholder='type here'
        />
      </p>
    </div>
  );
};

const Question = ({ answer }) => {
  return (
    <div>
      <p>You typed: {answer}</p>
    </div>
  );
};
```


# Toolchains

As web programming becomes more and more complex it became necessary to abstract away some of that complexity with a series of tools. Some common functional pieces in a web application tool chain include:

- **Code repository** - Stores code in a shared, versioned location.
- **Linter** - Removes, or warns of, non-idiomatic code usage.
- **Prettier** - Formats code according to a shared standard.
- **Transpiler** - Compiles code into a different format. For example, from JSX to JavaScript, TypeScript to JavaScript, or SCSS to CSS.
- **Polyfill** - Generates backward compatible code for supporting old browser versions that do not support the latest standards.
- **Bundler** - Packages code into bundles for delivery to the browser. This enables compatibility (for example with ES6 module support), or performance (with lazy loading).
- **Minifier** - Removes whitespace and renames variables in order to make code smaller and more efficient to deploy.
- **Testing** - Automated tests at multiple levels to ensure correctness.
- **Deployment** - Automated packaging and delivery of code from the development environment to the production environment.

The toolchain that we use for our React project consists of [GitHub](https://github.com/) as the code repository, [Vite](https://vitejs.dev/) for JSX, TS, development and debugging support, [ESBuild](https://esbuild.github.io/) for converting to ES6 modules and transpiling (with [Babel](https://babeljs.io/docs/en/) underneath), [Rollup](https://rollupjs.org/) for bundling and tree shaking, [PostCSS]() for CSS transpiling, and finally a simple bash script (deployReact.sh) for deployment.

You don't have to fully understand what each of these pieces in the chain are accomplishing, but the more you know about them the more you can optimize your development efforts.

In the following instruction we will show you how to use Vite to create a simple web application using the tools mentioned above. We will then demonstrate how to convert your startup into a modern web application by converting Simon to use Vite and React.

# Vite

📖 **Deeper dive reading**: [Vite](https://vitejs.dev/guide/)

Now that we have covered the basics of React, we want to extend our usage to include a full web framework toolchain that allows us to use JSX, minification, polyfills, and bundling for our Simon and startup applications. One common way for configuring your project to take advantage of these technologies is to use a Command Line Interface (CLI) to initially set up a web application. Using a CLI saves you the trouble of configuring the toolchain parameters and gets you quickly started with a default application.

For our toolchain we are going to use [Vite](https://vitejs.dev/). Vite bundles your code quickly, has great debugging support, and allows you to easily support JSX, TypeScript, and different CSS flavors. To get started with Vite, let's first build a simple web application. Later we will convert Simon over to React using Vite. This will teach you what you need to know in order to move your startup to React.

To create a new React-based web application using Vite, open your console and run the following commands:

```sh
npm create vite@latest demoVite -- --template react
cd demoVite
npm install
npm run dev
```

This will create a new web application in the `demoVite` directory, download the required 3rd party packages, and start up the application using a local HTTP debugging server. You can tell Vite to open your browser to the URL that is hosting your application by pressing `o`, or press `h` to see all of the Vite CLI options.

![Vite Demo](viteDemo.gif)

Congratulations! You have just created your first React-enabled web application.

Once you have played around with the application in your browser, you can return to your console and stop Vite from hosting the application by pressing `q`.

## Generated project

Now, let's explore the application files that Vite created. From the console, use VS Code (`code .`) to open the project directory and take a look at the files.

| Directory    | File              | Purpose                                                                                                                   |
| ------------ | ----------------- | ------------------------------------------------------------------------------------------------------------------------- |
| ./           |                   |                                                                                                                                |
|              | index.html        | Primary page for the application. This is the starting point to load all of the JSX components beginning with `main.jsx`. |
|              | package.json      | NPM definition for package dependencies and script commands. This is what maps `npm run dev` to actually start up Vite.   |
|              | package-lock.json | Version constraints for included packages (do not edit this).                                                             |
|              | vite.config.js    | Configuration setting for Vite. Specifically this sets up React for development.                                          |
| ./public     |                   |                                                                                                                           |
|              | vite.svg          | Vite logo for use as favicon and for display in the app.                                                                  |
| ./src        |                   |                                                                                                                           |
|              | main.jsx          | Entry point for code execution. This simply loads the App component found in `App.jsx`.                                   |
|              | index.css         | CSS for the entire application.                                                                                           |
|              | App.jsx           | JSX for top level application component. This displays the logs and implements the click counter.                         |
|              | App.css           | CSS for the top level application component.                                                                              |
| ./src/assets |                   |                                                                                                                           |
|              | react.svg         | React logo for display in the app.                                                                                        |

The main files in the application are `index.html`, `main.jsx`, and `App.jsx`. The browser loads `index.html` which provides the HTML element (`#root`) that the React application will be injected into. It also includes the script element to load `main.jsx`.

`main.jsx` creates the React application by associating the `#root` element with the `App` component found in `App.jsx`. This causes all of the component render functions to execute and the generated HTML, CSS, and JavaScript to be executed in `index.html`.

![File relationship](reactFiles.png)

## JSX vs JS

The `Vite` CLI uses the `.jsx` extension for JSX files instead of the JavaScript `.js` extension. The Babel transpiler will work with either one, but some editor tools will work differently based upon the extension. For this reason, you should prefer `.jsx` for files that contain JSX. The developers at AirBNB had an interesting [conversation](https://github.com/airbnb/javascript/pull/985) on this topic that you might browse if you would like to consider the differing opinions on this subject.

## Building a production release

When you execute `npm run dev` you are bundling the code to a temporary directory that the Vite debug HTTP server loads from. When you want to bundle your application so that you can deploy to a production environment you need to run `npm run build`. This executes the `build` script found in your `package.json` and invokes the `Vite` CLI. `vite build` transpiles, minifies, injects the proper JavaScript, and then outputs everything to a deployment-ready version contained in a distribution subdirectory named `dist`.

```sh
➜  npm run build

> demovite@0.0.0 build
> vite build

vite v4.3.7 building for production...
✓ 34 modules transformed.
dist/index.html                   0.45 kB │ gzip:  0.30 kB
dist/assets/react-35ef61ed.svg    4.13 kB │ gzip:  2.14 kB
dist/assets/index-51439b3f.css    1.42 kB │ gzip:  0.74 kB
dist/assets/index-58d24859.js   143.42 kB │ gzip: 46.13 kB
✓ built in 382ms
```

## Deploying a production release

The deployment script for Simon React (`deployReact.sh`) creates a production distribution by calling `npm run build` and then copying the resulting `dist` directory to your production server.

Take some time to build a production release by running `npm run build`. Then examine what Vite actually builds by examining the `dist` directory. For example, if you look at the `dist/assets` directory you will see the bundled and minified JavaScript and CSS files.

## ☑ Assignment

Now that you have reviewed the application in VS Code, take a moment to manipulate the files and see what impact your changes have. If you break the application, and can't figure out how to fix it, just delete the demo directory and start again. The more you play around with this code, the better you will understand how all the pieces of the application fit together.

Make the following modifications:

1. Alter the CSS to change background and text colors to something different.
1. Replace the text in the App component with your name.
1. Change the counter to increment by 10 instead of by one.

After these changes, the application should look similar to this:

![React altered](reactAppAltered.png)

When you are done, submit a screen capture of the altered application to the Canvas assignment.

Don't forget to update your GitHub startup repository `notes.md` with all of the things you learned and want to remember.

# Tic-Tac-Toe
import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

# The internet

📖 **Deeper dive reading**:

- [MDN How does the Internet work?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work)
- [YouTube The Internet in 5 Minutes](https://youtu.be/7_LPdttKXPc)

The internet globally connects independent networks and computing devices. In a simplistic way, you can think of the internet as a massive redundant collection of wires that connect up all the computers in the world. A lot of those wires are wireless (wiFi, satellite, or cell), and not all of computers in the world are connected, but generally that is what the internet is. The deeper your mental model of the internet is, the more effectively you will be able to create web applications.

![Internet connections](internetConnections.jpg)

## Making connections

When one device wants to talk to another it must have an IP address. For example, `128.187.16.184` is BYU's address. Usually, human users prefer a symbolic name over an IP address. The symbolic name is called a domain name. Domain names are converted to IP address by doing a lookup in the Domain Name System (DNS). You can look up the IP address for any domain name using the `dig` console utility.

```sh
➜  dig byu.edu

byu.edu.		5755	IN	A	128.187.16.184
```

![Internet requests](internetRequests.jpg)

Once you have the IP address, you connect to the device it represents by first asking for a connection route to the device. A connection route consists of many hops across the network until the destination is dynamically discovered and the connection established. With the connection the transport and application layers start exchanging data.

### Traceroute

You can determine the hops in a connection using the `traceroute` console utility. In the following example, we trace the route between a home computer and BYU. In the result you see the first address `192.168.1.1`. This is the address of the network router the home computer is connected to. From there it goes through a couple devices that do not identify themselves and then hits the Google Fiber gateway. Google Fiber is the internet service provider, or ISP, for the requesting device. Then we jump through a few more unidentified devices before finally arriving at BYU (`128.187.16.184`).

```sh
➜  traceroute byu.edu

traceroute to byu.edu (128.187.16.184), 64 hops max, 52 byte packets
 1  192.168.1.1 (192.168.1.1)  10.942 ms  4.055 ms  4.694 ms
 2  * * *
 3  * * *
 4  192-119-18-212.mci.googlefiber.net (192.119.18.212)  5.369 ms  5.576 ms  6.456 ms
 5  216.21.171.197 (216.21.171.197)  6.283 ms  6.767 ms  5.532 ms
 6  * * *
 7  * * *
 8  * * *
 9  byu.com (128.187.16.184)  7.544 ms !X *  40.231 ms !X

```

If I run traceroute again I might see a slightly different route since every connection through the internet is dynamically calculated. The ability to discover a route makes the internet resilient when network devices fail or disappear from the network.

## Network internals

The actual sending of data across the internet uses the TCP/IP model. This is a layered architecture that covers everything from the physical wires to the data that a web application sends. At the top of the TCP/IP protocol is the application layer. It represents user functionality, such as the web (HTTP), mail (SMTP), files (FTP), remote shell (SSH), and chat (IRC). Underneath that is the transport layer which breaks the application layer's information into small chunks and sends the data. The actual connection is made using the internet layer. This finds the device you want to talk to and keeps the connection alive. Finally, at the bottom of the model is the link layer which deals with the physical connections and hardware.

### [TCP/IP](https://en.wikipedia.org/wiki/Internet_protocol_suite) layers

| Layer       | Example         | Purpose                               |
| ----------- | --------------- | ------------------------------------- |
| Application | HTTPS           | Functionality like web browsing       |
| Transport   | TCP             | Moving connection information packets |
| Internet    | IP              | Establishing connections              |
| Link        | Fiber, hardware | Physical connections                  |

# Web servers

A web server is a computing device that is hosting a web service that knows how to accept incoming internet connections and speak the HTTP application protocol.

## Monolithic web servers

In the early days of web programming, you would buy a massive, complex, expensive, software program that spoke HTTP and installed on a hardware server. The package of server and software was considered the web server because the web service software was the only thing running on the server.

When Berners-Lee wrote his first web server it only served up static HTML files. This soon advanced so that they allowed dynamic functionality, including the ability to generate all the HTML on demand in response to a users interaction. That facilitated what we now know as modern web applications.

## Combining web and application services

Today, most modern programming languages include libraries that provide the ability to make connections and serve up HTTP. For example, here is a simple Go language program that is a fully functioning web service. Later on in the course we will show how this is done with JavaScript.

```go
package main

import (
	"net/http"
)

func main() {
	// Serve up files found in the public_html directory
	fs := http.FileServer(http.Dir("./public_html"))
	http.Handle("/", fs)

	// Listen for HTTP requests
	http.ListenAndServe(":3000", nil)
}
```

Being able to easily create web services makes it easy to completely drop the monolithic web server concept and just build web services right into your web application. With our simple `go` example we can add a function that responds with the current time, when the `/api/time` resource is requested.

```go
package main

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

func getTime(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, time.Now().String())
}

func main() {
	// Serve up files found in the public_html directory
	fs := http.FileServer(http.Dir("./public_html"))
	http.Handle("/", fs)

	// Dynamically provide data
	http.HandleFunc("/api/time", getTime)

	// Listen for HTTP requests
	fmt.Println(http.ListenAndServe(":3000", nil))
}
```

We can run that web service code, and use the console application `Curl` to make an HTTP request and see the time response.

```sh
➜  curl localhost:3000/api/time

2022-12-03 09:50:37.391983 -0700
```

## Web service gateways

Since it is so easy to build web services it is common to find multiple web services running on the same computing device. The trick is exposing the multiple services in a way that a connection can be made to each of them. Every network device allows for separate network connections by referring to a unique port number. Each service on the device starts up on a different port. In the example above, the `go` web service was using port 80. So you could just have a user access each service by referring to the port it was launched on. However, this makes it difficult for the user of the services to remember what port matches to which service. To resolve this we introduce a service gateway, or sometimes called a reverse proxy, that is itself a simple web service that listens on the common HTTPS port 443. The gateway then looks at the request and maps it to the other services running on a different ports.

![Gateway](webServersGateway.jpg)

Our web server will use the application `Caddy` as the gateway to our services. The details of how Caddy works will be given later.

## Microservices

Web services that provide a single functional purpose are referred to as microservices. By partitioning functionality into small logical chunks, you can develop and manage them independently from other functionality in a larger system. They can also handle large fluctuations in user demand by simply running more and more stateless copies of the microservice from multiple virtual servers hosted in a dynamic cloud environment. For example, one microservice for generating your genealogical family tree might be able to handle 1,000 users concurrently. So in order to support 1 million users, you just deploy 1,000 instances of the service running on scalable virtual hardware.

## Serverless

The idea of microservices naturally evolved into the world of `serverless` functionality where the server is conceptually removed from the architecture and you just write a function that speaks HTTP. That function is loaded through an gateway that maps a web request to the function. The gateway automatically scales the hardware needed to host the serverless function based on demand. This reduces what the web application developer needs to think about down to a single independent function.

# URL

📖 **Deeper dive reading**: [MDN What is a URL](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL)

The Uniform Resource Locator (URL) represents the location of a web resource. A web resource can be anything, such as a web page, font, image, video stream, database record, or JSON object. It can also be completely ephemeral, such as a visitation counter, or gaming session.

Looking at the different parts of a URL is a good way to understand what it represents. Here is an example URL that represents the summary of accepted CS 260 BYU students that is accessible using secure HTTP.

```js
https://byu.edu:443/cs/260/student?filter=accepted#summary
```

The URL syntax uses the following convention. Notice the delimiting punctuation between the parts of the URL. Most parts of the URL are optional. The only ones that are required are the scheme, and the domain name.

```yaml
<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>
```

| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.                     |

Technically you can also provide a user name and password before the domain name. This was used historically to authenticate access, but for security reasons this is deprecated. However, you will still see this convention for URLs that represent database connection strings.

## URL, URN, and URI

You will sometimes hear the use of URN or URI when talking about web resources. A Uniform Resource Name (URN) is a unique resource name that does not specify location information. For example, a book URN might be `urn:isbn:10,0765350386`. A Uniform Resource Identifier (URI) is a general resource identifier that could refer to either a URL or a URN. With web programming you are almost always talking about URLs and therefore you should not use the more general URI.

# Ports

When you connect to a device on the internet you need both an IP address and a numbered port. Port numbers allow a single device to support multiple protocols (e.g. HTTP, HTTPS, FTP, or SSH) as well as different types of services (e.g. search, document, or authentication). The ports may be exposed externally, or they may only be used internally on the device. For example, the HTTPS port (443) might allow the world to connect, the SSH port (22) might only allow computers at your school, and a service defined port (say 3000) may only allow access to processes running on the device.

The internet governing body, IANA, defines the standard usage for port numbers. Ports from 0 to 1023 represent standard protocols. Generally a web service should avoid these ports unless it is providing the protocol represented by the standard. Ports from 1024 to 49151 represent ports that have been assigned to requesting entities. However, it is very common for these ports to be used by services running internally on a device. Ports from 49152 to 65535 are considered dynamic and are used to create dynamic connections to a device. [Here](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml) is the link to IANA's registry.

Here is a list of common port numbers that you might come across.

| Port | Protocol                                                                                           |
| ---- | -------------------------------------------------------------------------------------------------- |
| 20   | File Transfer Protocol (FTP) for data transfer                                                     |
| 22   | Secure Shell (SSH) for connecting to remote devices                                                |
| 25   | Simple Mail Transfer Protocol (SMTP) for sending email                                             |
| 53   | Domain Name System (DNS) for looking up IP addresses                                               |
| 80   | Hypertext Transfer Protocol (HTTP) for web requests                                                |
| 110  | Post Office Protocol (POP3) for retrieving email                                                   |
| 123  | Network Time Protocol (NTP) for managing time                                                      |
| 161  | Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers |
| 194  | Internet Relay Chat (IRC) for chatting                                                             |
| 443  | HTTP Secure (HTTPS) for secure web requests                                                        |

## Your ports

As an example of how ports are used we can look at your web server. When you built your web server you externally exposed port 22 so that you could use SSH to open a remote console on the server, port 443 for secure HTTP communication, and port 80 for unsecure HTTP communication.

![Ports](webServicesPorts.jpg)

Your web service, Caddy, is listening on ports 80 and 443. When Caddy gets a request on port 80, it automatically redirects the request to port 443 so that a secure connection is used. When Caddy gets a request on port 443 it examines the path provided in the HTTP request (as defined by the URL) and if the path matches a static file, it reads the file off disk and returns it. If the HTTP path matches one of the definitions it has for a gateway service, Caddy makes a connection on that service's port (e.g. 3000 or 4000) and passes the request to the service.

Internally on your web server, you can have as many web services running as you would like. However, you must make sure that each one uses a different port to communicate on. You run your Simon service on port 3000 and therefore **cannot** use port 3000 for your startup service. Instead you use port 4000 for your startup service. It does not matter what high range port you use. It only matters that you are consistent and that they are only used by one service.

# HTTP

📖 **Deeper dive reading**: [MDN An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

Hypertext Transfer Protocol (`HTTP`) is how the web talks. When a web browser makes a request to a web server it does it using the HTTP protocol. In previous instruction we discussed how to use HTTP. Now, we will talk about the internals of HTTP. Just like becoming fluent in a foreign language makes a visit to another country more enjoyable, understanding how to speak HTTP helps you communicate effectively when talking on the web.

When a web client (e.g. a web browser) and a web server talk they exchange HTTP requests and responses. The browser will make an HTTP request and the server will generate an HTTP response. You can see the HTTP exchange by using the browser's debugger or by using a console tool like `curl`. For example, in your console you can use `curl` to make the following request.

```sh
curl -v -s http://info.cern.ch/hypertext/WWW/Helping.html
```

### Request

The HTTP request for the above command would look like the following.

```http
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```

An HTTP request has this general syntax.

```yaml
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]
```

The first line of the HTTP request contains the `verb` of the request, followed by the path, parameters, and anchor of the URL, and finally the version of HTTP being used. The following lines are optional headers that are defined by key value pairs. After the headers you have an optional body. The body start is delimited from the headers with two new lines.

In the above example, we are asking to `GET` a resource found at the path `/hypertext/WWW/Helping.html`. The version used by the request is `HTTP/1.1`. This is followed by two headers. The first specifies the requested host (i.e. domain name). The second specifies what type of resources the client will accept. The resource type is always a [MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) as defined by internet governing body IANA. In this case we are asking for HTML.

### Response

The response to the above request looks like this.

```yaml
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
```

An HTTP response has the following syntax.

```yaml
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]
```

You can see that the response syntax is similar to the request syntax. The major difference is that the first line represents the version and the status of the response.

Understanding the meaning of the common HTTP verbs, status codes, and headers is important for you to understand, as you will use them in developing a web application. Take some time to internalize the following common values.

## Verbs

There are several verbs that describe what the HTTP request is asking for. The list below only describes the most common ones.

| Verb    | Meaning                                                                                                                                                                                                                                                  |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET     | Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.                                                                                                                        |
| POST    | Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.                                                                                                             |
| PUT     | Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource. |
| DELETE  | Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.                                                                                                                                              |
| OPTIONS | Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.                                                                                                                                              |

## Status codes

It is important that you use the standard HTTP status codes in your HTTP responses so that the client of a request can know how to interpret the response. The codes are partitioned into five blocks.

- 1xx - Informational.
- 2xx - Success.
- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
- 4xx - Client errors. The request is invalid.
- 5xx - Server errors. The request cannot be satisfied due to an error on the server.

Within those ranges here are some of the more common codes. See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) for a full description of status codes.

| Code | Text                                                                                 | Meaning                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                                                             | The service is working on the request                                                                                             |
| 200  | Success                                                                              | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created                                                                              | The request was successful and a new resource was created.                                                                        |
| 204  | No Content                                                                           | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified                                                                         | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect                                                                   | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect                                                                   | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request                                                                          | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized                                                                         | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden                                                                            | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found                                                                            | An unknown resource was requested.                                                                                                |
| 408  | Request timeout                                                                      | The request takes too long.                                                                                                       |
| 409  | Conflict                                                                             | The provided resource represents an out of date version of the resource.                                                          |
| 418  | [I'm a teapot](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests                                                                    | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error                                                                | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable                                                                  | The server is temporarily down. The client should try again with an exponential back off.                                         |

## Headers

📖 **Deeper dive reading**: [MDN HTTP headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)

HTTP headers specify metadata about a request or response. This includes things like how to handle security, caching, data formats, and cookies. Some common headers that you will use include the following.

| Header                      | Example                              | Meaning                                                                                                                                                                        |
| --------------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authorization               | Bearer bGciOiJIUzI1NiIsI             | A token that authorized the user making the request.                                                                                                                           |
| Accept                      | image/\*                             | The format the client accepts. This may include wildcards.                                                                                                            |
| Content-Type                | text/html; charset=utf-8             | The format of the content being sent. These are described using standard [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) types. |
| Cookie                      | SessionID=39s8cgj34; csrftoken=9dck2 | Key value pairs that are generated by the server and stored on the client.                                                                                                     |
| Host                        | info.cern.ch                         | The domain name of the server. This is required in all requests.                                                                                                               |
| Origin                      | cs260.click                          | Identifies the origin that caused the request. A host may only allow requests from specific origins.                                                                           |
| Access-Control-Allow-Origin | https://cs260.click                  | Server response of what origins can make a request. This may include a wildcard.                                                                                               |
| Content-Length              | 368                                  | The number of bytes contained in the response.                                                                                                                                 |
| Cache-Control               | public, max-age=604800               | Tells the client how it can cache the response.                                                                                                                                |
| User-Agent                  | Mozilla/5.0 (Macintosh)              | The client application making the request.                                                                                                                                     |

## Body

The format of the body of an HTTP request or response is defined by the `Content-Type` header. For example, it may be HTML text (text/html), a binary image format (image/png), JSON (application/json), or JavaScript (text/javascript). A client may specify what formats it accepts using the `accept` header.

## Cookies

![Cookie](webServicesCookie.png)

📖 **Deeper dive reading**: [MDN Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

HTTP itself is stateless. This means that one HTTP request does not know anything about a previous or future request. However, that does not mean that a server or client cannot track state across requests. One common method for tracking state is the `cookie`. Cookies are generated by a server and passed to the client as an HTTP header.

```http
HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
```

The client then caches the cookie and returns it as an HTTP header back to the server on subsequent requests.

```http
HTTP/2 200
Cookie: myAppCookie=tasty
```

This allows the server to remember things like the language preference of the user, or the user's authentication credentials. A server can also use cookies to track, and share, everything that a user does. However, there is nothing inherently evil about cookies; the problem comes from web applications that use them as a means to violate a user's privacy or inappropriately monetize their data.

## HTTP Versions

HTTP continually evolves in order to increase performance and support new types of applications. You can read about the evolution of HTTP on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP).

| Year | Version | Features                                        |
| ---- | ------- | ----------------------------------------------- |
| 1990 | HTTP0.9 | one line, no versions, only get                 |
| 1996 | HTTP1   | get/post, header, status codes, content-type    |
| 1997 | HTTP1.1 | put/patch/delete/options, persistent connection |
| 2015 | HTTP2   | multiplex, server push, binary representation   |
| 2022 | HTTP3   | QUIC for transport protocol, always encrypted   |

# Fetch

🔑 **Recommended reading**: [MDN Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

The ability to make HTTP requests from JavaScript is one of the main technologies that changed the web from static content pages (Web 1.0) to one of web applications (Web 2.0) that fully interact with the user. Microsoft introduced the first API for making HTTP requests from JavaScript with the [XMLHttpRequest API](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

Today, the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) is the preferred way to make HTTP requests. The `fetch` function is built into the browser's JavaScript runtime. This means you can call it from JavaScript code running in a browser.

The basic usage of fetch takes a URL and returns a promise. The promise `then` function takes a callback function that is asynchronously called when the requested URL content is obtained. If the returned content is of type `application/json` you can use the `json` function on the response object to convert it to a JavaScript object.

The following example makes a fetch request to get and display an inspirational quote. If the request method is unspecified, it defaults to GET.

```js
fetch('https://quote.cs260.click')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

**Response**

```js
{
  author: 'Kyle Simpson',
  quote: "There's nothing more permanent than a temporary hack."
}
```

To do a POST request you populate the options parameter with the HTTP method and headers.

```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

## ☑ Assignment

Create a fork of this [CodePen](https://codepen.io/leesjensen/pen/ExRoqPz) and experiment.

Replace the quotable service call with a different one. Here are some suggestions.

- **Random user** - https://randomuser.me/api/
- **Jokes** - https://api.chucknorris.io/jokes/random?category=dev
- **GitHub user** - https://api.github.com/users/octocat
- **Photos** - https://picsum.photos/id/0/info
- **Quote** - https://quote.cs260.click

When you are done submit your CodePen URL to the Canvas assignment.

Don't forget to update your GitHub startup repository notes.md with all of the things you learned and want to remember.

# Node web service

With JavaScript we can write code that listens on a network port (e.g. 80, 443, 3000, or 8080), receives HTTP requests, processes them, and then responds. We can use this to create a simple web service that we then execute using Node.js.

First create your project.

```sh
➜ mkdir webservicetest
➜ cd webservicetest
➜ npm init -y
```

Now, open VS Code and create a file named `index.js`. Paste the following code into the file and save.

```js
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
```

This code uses the Node.js built-in `http` package to create our HTTP server using the `http.createServer` function along with a callback function that takes a request (`req`) and response (`res`) object. That function is called whenever the server receives an HTTP request. In our example, the callback always returns the same HTML snippet, with a status code of 200, and a Content-Type header, no matter what request is made. Basically this is just a simple dynamically generated HTML page. A real web service would examine the HTTP path and return meaningful content based upon the purpose of the endpoint.

The `server.listen` call starts listening on port 8080 and blocks until the program is terminated.

We execute the program by going back to our console window and running Node.js to execute our index.js file. If the service starts up correctly then it should look like the following.

```sh
➜ node index.js
Web service listening on port 8080
```

You can now open your browser and point it to `localhost:8080` and view the result. The interaction between the JavaScript, node, and the browser looks like this.

![Node HTTP](webServicesNodeHttp.jpg)

Use different URL paths in the browser and note that it will echo the HTTP method and path back in the document. You can kill the process by pressing `CTRL-C` in the console.

Note that you can also start up Node and execute the `index.js` code directly in VS Code. To do this open index.js in VS Code and press the 'F5' key. This should ask you what program you want to run. Select `node.js`. This starts up Node.js with the `index.js` file, but also attaches a debugger so that you can set breakpoints in the code and step through each line of code.

⚠ Make sure you complete the above steps. For the rest of the course you will be executing your code using Node.js to run your backend code and serve up your frontend code to the browser. This means you will no longer be using the `VS Code Live Server extension` to serve your frontend code in the browser.

## Debugging a Node.js web service

In order to debug a web service running under Node.js we first need to write our code. Replace the code in your `main.js` file with the following.

```js
const express = require('express');
const app = express();

app.get('/*', (req, res) => {
  res.send({ url: req.originalUrl });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

Switch to your console application and run `npm init -y` and `npm install express` from your code directory so that we can use the Express package to write a simple web service.

Now we are ready to debug again. Set a breakpoint on the getStore endpoint callback (line 5) and the `app.listen` call (line 9). Start debugging by pressing `F5`. The debugger should stop on the `listen` call where you can inspect the `app` variable. Press `F5` again to continue running. Now open up your browser and set the location to `localhost:8080`. This should hit the breakpoint on the endpoint. Take some time to inspect the `req` object. You should be able to see what the HTTP method is, what parameters are provided, and what the path currently is. Press `F5` to continue.

Your browser should display the JSON object, containing the URL, that you returned from your endpoint. Now change the URL in the browser to include a path and some query parameters. Something like `http://localhost:8080/fish/taco?order=2`. Requesting that URL should cause your breakpoint to hit again where you can see the URL changes reflected in the req object.

Now, instead of pressing `F5` to continue, press `F11` to step into the `res.send` function. This will take you out of your code and into the Express code that handles sending a response. Because you installed the Express package using NPM, all of Express's source code is sitting in the `node_modules` directory. You can also set breakpoints there, examine variables, and step into functions. Debugging into popular packages is a great way to learn how to code by seeing how really good programmers do things. Take some time to walk around Holowaychuk's code and see if you can understand what it is doing.

![Debug step in](webServicesDebugStepIn.png)

## Node --watch

Once you start writing complex web applications you will find yourself making changes in the middle of debugging sessions and you would like to have `node` restart automatically and update the browser as the changes are saved. This seems like a simple thing, but over the course of hundreds of changes, every second you can save really starts to add up.

To accomplish this you can start Node with the `watch` option. This causes Node to watch all your source code files and automatically reload itself if anything changes.

You can experiment with this by starting node with the `--watch` parameter

```sh
node --watch main.js
```

With VS Code you can create a launch configuration that specifies the watch parameter when every you debug with VS Code. In VS Code press `CTRL-SHIFT-P` (on Windows) or `⌘-SHIFT-P` (on Mac) and type the command `Debug: Add configuration`. Select the `Node.js` option. This will create a launch configuration named `.vscode/launch.json`. Modify the configuration so that it includes the `--watch` parameter. This should look something like the following.

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "runtimeArgs": ["--watch"],
      "program": "${workspaceFolder}/main.js"
    }
  ]
}
```

Now when you press `F5` to start debugging VS Code will start up `main.js` and automatically restart node each time you modify your code.

# Express

📖 **Deeper dive reading**: [MDN Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)

In the previous instruction you saw how to use Node.js to create a simple web server. This works great for little projects where you are trying to quickly serve up some web content, but to build a production-ready application you need a framework with a bit more functionality for easily implementing a full web service. This is where the Node package `Express` come in. Express provides support for:

1. Routing requests for service endpoints
1. Manipulating HTTP requests with JSON body content
1. Generating HTTP responses
1. Using `middleware` to add functionality

Express was created by TJ Holowaychuk and is currently maintained by the [Open.js Foundation](https://openjsf.org/).

![TJ Holowaychuk](webServicesHolowaychuk.jpg)

> “People tell you to not reinvent things, but I think you should … it will teach you things”
>
> — TJ Holowaychuk

Everything in Express revolves around creating and using HTTP routing and middleware functions.
You create an Express application by using NPM to install the Express package and then calling the `express` constructor to create the Express application and listen for HTTP requests on a desired port.

```sh
➜ npm install express
```

```js
const express = require('express');
const app = express();

app.listen(8080);
```

With the `app` object you can now add HTTP routing and middleware functions to the application.

## Defining routes

HTTP endpoints are implemented in Express by defining routes that call a function based upon an HTTP path. The Express `app` object supports all of the HTTP verbs as functions on the object. For example, if you want to have a route function that handles an HTTP GET request for the URL path `/store/provo` you would call the `get` method on the app.

```js
app.get('/store/provo', (req, res, next) => {
  res.send({name: 'provo'});
});
```

The `get` function takes two parameters, a URL path matching pattern, and a callback function that is invoked when the pattern matches. The path matching parameter is used to match against the URL path of an incoming HTTP request.

The callback function has three parameters that represent the HTTP request object (`req`), the HTTP response object (`res`), and the `next` routing function that Express expects to be called if this routing function wants another function to generate a response.

The Express `app` compares the routing function patterns in the order that they are added to the Express `app` object. So if you have two routing functions with patterns that both match, the first one that was added will be called and given the next matching function in the `next` parameter.

In our example above we hard coded the store name to be `provo`. A real store endpoint would allow any store name to be provided as a parameter in the path. Express supports path parameters by prefixing the parameter name with a colon (`:`). Express creates a map of path parameters and populates it with the matching values found in the URL path. You then reference the parameters using the `req.params` object. Using this pattern you can rewrite our getStore endpoint as follows.

```js
app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});
```

If we run our JavaScript using `node` we can see the result when we make an HTTP request using `curl`.

```sh
➜ curl localhost:8080/store/orem
{"name":"orem"}
```

If you wanted an endpoint that used the POST or DELETE HTTP verb then you just use the `post` or `delete` function on the Express `app` object.

The route path can also include a limited wildcard syntax or even full regular expressions in path pattern. Here are a couple route functions using different pattern syntax.

```js
// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));
```

Notice that in these examples the `next` parameter was omitted. Since we are not calling `next` we do not need to include it as a parameter. However, if you do not call `next` then no following middleware functions will be invoked for the request.

## Using middleware

📖 **Deeper dive reading**: [Express Middleware](https://expressjs.com/en/resources/middleware.html)

The standard [Mediator/Middleware](https://www.patterns.dev/posts/mediator-pattern/) design pattern has two pieces: a mediator and middleware. Middleware represents componentized pieces of functionality. The mediator loads the middleware components and determines their order of execution. When a request comes to the mediator it then passes the request around to the middleware components. Following this pattern, Express is the mediator, and middleware functions are the middleware components.

Express comes with a standard set of middleware functions. These provide functionality like routing, authentication, CORS, sessions, serving static web files, cookies, and logging. Some middleware functions are provided by default, and other ones must be installed using NPM before you can use them. You can also write your own middleware functions and use them with Express.

A middleware function looks very similar to a routing function. That is because routing functions are also middleware functions. The only difference is that routing functions are only called if the associated pattern matches. Middleware functions are always called for every HTTP request unless a preceding middleware function does not call `next`. A middleware function has the following pattern:

```js
function middlewareName(req, res, next)
```

The middleware function parameters represent the HTTP request object (`req`), the HTTP response object (`res`), and the `next` middleware function to pass processing to. You should usually call the `next` function after completing processing so that the next middleware function can execute.

![Middleware](webServicesMiddleware.jpg)

### Creating your own middleware

As an example of writing your own middleware, you can create a function that logs out the URL of the request and then passes on processing to the next middleware function.

```js
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});
```

Remember that the order that you add your middleware to the Express app object controls the order that the middleware functions are called. Any middleware that does not call the `next` function after doing its processing, stops the middleware chain from continuing.

### Builtin middleware

In addition to creating your own middleware functions, you can use a built-in middleware function. Here is an example of using the `static` middleware function. This middleware responds with static files, found in a given directory, that match the request URL.

```js
app.use(express.static('public'));
```

Now if you create a subdirectory in your project directory and name it `public` you can serve up any static content that you would like. For example, you could create an `index.html` file that is the default content for your web service. Then when you call your web service without any path the `index.html` file will be returned.

### Third party middleware

You can also use third party middleware functions by using NPM to install the package and including the package in your JavaScript with the `require` function. The following uses the `cookie-parser` package to simplify the generation and access of cookies.

```sh
➜ npm install cookie-parser
```

```js
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});
```

It is common for middleware functions to add fields and functions to the `req` and `res` objects so that other middleware can access the functionality they provide. You see this happening when the `cookie-parser` middleware adds the `req.cookies` object for reading cookies, and also adds the `res.cookie` function in order to make it easy to add a cookie to a response.

## Error handling middleware

You can also add middleware for handling errors that occur. Error middleware looks similar to other middleware functions, but it takes an additional `err` parameter that contains the error.

```js
function errorMiddlewareName(err, req, res, next)
```

If you wanted to add a simple error handler for anything that might go wrong while processing HTTP requests you could add the following.

```js
app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});
```

We can test that our error middleware is getting used by adding a new endpoint that generates an error.

```js
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});
```

Now if we use `curl` to call our error endpoint we can see that the response comes from the error middleware.

```sh
➜ curl localhost:8080/error
{"type":"Error","message":"Trouble in river city"}
```

## Putting it all together

Here is a full example of our web service built using Express.

```js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third party middleware - Cookies
app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static('public'));

// Routing middleware
app.get('/store/:storeName', (req, res) => {
  res.send({name: req.params.storeName});
});

app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

## ☑ Assignment

Create a web service with Express using the following steps.

1. Open your console.
1. Create a directory named testExpress, and change into that directory

   ```sh
   mkdir testExpress
   cd testExpress
   ```

1. Initialize the directory for use with NPM.

   ```sh
   npm init -y
   ```

1. Install the `express` and `cookie-parser` packages.

   ```sh
   npm install express cookie-parser
   ```

1. Create a file named `index.js` and paste the example code given above.
1. Create a directory named `public` and add an `index.html` file with some basic html to the directory.

   ```sh
   mkdir public
   print '<h1>Hello express</h1>' > public/index.html
   ```

1. Run your web service using `node` (`node index.js`)

   ```sh
   node index.js
   ```

1. Open another console window and use Curl to try out your web service by making requests to the endpoints.

   ```sh
   curl localhost:8080
   curl localhost:8080/error
   curl localhost:8080/store/orem
   curl -X PUT localhost:8080/st/orem
   curl -X DELETE localhost:8080/store/orem
   curl -X POST -c cookies.txt localhost:8080/cookie/express/tj
   curl -b cookies.txt localhost:8080/cookie
   ```

1. Develop a mental model in your head about what these commands are doing and how your service is responding. Perhaps creating a [sequence diagram](https://sequencediagram.org/index.html#initialData=C4S2BsFMAIGVIE4DcQGMYCVIEcCukBnYAgKBIENVgB7BaAYVwXDMeYFoA+eZNSALmgBtAAoBVACoBdaAHois2pAC2JAHbVgMBCADmAC2DRqAMziIU6fuQAONgHQ3cwABQByecABUs-kSUAcuTKkG4ANAA6atAuCDhh0HEEAJTQALyciYT2BJBqACYuUQDe0Lg2+eRagnHYjuQIwQQ5NHFBIdAAvsnJANwkbOAAPEPs7DyWAtDFAETllVoz-DNKyjOdJEA) will help clarify the interaction if it is still unclear.

   ![HTTP request](httpRequestSequenceDiagram.jpg)

When you are done executing the above commands, copy the output from the curl commands and paste it into the Canvas assignment.

# SOP and CORS

📖 **Deeper dive reading**:

- [MDN Same origin policy](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
- [MDN Cross origin resource sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

Security should always be on your mind when you are working with the web. The ability to provide services to a global audience makes the information on the web very valuable, and therefore an attractive target for nefarious parties. When website architecture and browser clients were still in their infancy they allowed JavaScript to make requests from one domain while displaying a website from a different domain. These are called cross-origin requests.

Consider the following example. An attacker sends out an email with a link to a hacker website (`byu.iinstructure.com`) that is similar to the real course website. Notice the additional `i`. If the hacker website could request anything from the real website then it could make itself appear and act just like the real education website. All it would have to do is request images, html, and login endpoints from the course's website and display the results on the hacker website. This would give the hacker access to everything the user did.

To combat this problem the `Same Origin Policy` (SOP) was created. Simply stated SOP only allows JavaScript to make requests to a domain if it is the same domain that the user is currently viewing. A request from `byu.iinstructure.com` for service endpoints that are made to `byu.instructure.com` would fail because the domains do not match. This provides significant security, but it also introduces complications when building web applications. For example, if you want build a service that any web application can use it would also violate the SOP and fail. In order to address this, the concept of Cross Origin Resource Sharing (CORS) was invented.

CORS allows the client (e.g. browser) to specify the origin of a request and then let the server respond with what origins are allowed. The server may say that all origins are allowed, for example if they are a general purpose image provider, or only a specific origin is allowed, for example if they are a bank's authentication service. If the server doesn't specify what origin is allowed then the browser assumes that it must be the same origin.

Going back to our hacker example, the HTTP request from the hacker site (`byu.iinstructure.com`) to the course's authentication service (`byu.instructure.com`) would look like the following.

```http
GET /api/auth/login HTTP/2
Host: byu.instructure.com
Origin: https://byu.iinstructure.com
```

In response the course website would return:

```http
HTTP/2 200 OK
Access-Control-Allow-Origin: https://byu.instructure.com
```

The browser would then see that the actual origin of the request does not match the allowed origin and so the browser blocks the response and generates an error.

Notice that with CORS, it is the browser that is protecting the user from accessing the course website's authentication endpoint from the wrong origin. CORS is only meant to alert the user that something nefarious is being attempted. A hacker can still proxy requests through their own server to the course website and completely ignore the `Access-Control-Allow-Origin` header. Therefore the course website needs to implement its own precautions to stop a hacker from using its services inappropriately.

## Using third party services

When you make requests to your own web services you are always on the same origin and so you will not violate the SOP. However, if you want to make requests to a different domain than the one your web application is hosted on, then you need to make sure that domain allows requests as defined by the `Access-Control-Allow-Origin` header it returns. For example, if I have JavaScript in my web application loaded from `cs260.click` that makes a fetch request for an image from the website `i.picsum.photos` the browser will fail the request with an HTTP status code of 403 and an error message that CORS has blocked the request.

![CORS](webServicesCors.jpg)

That happens because `i.picsum.photos` does not return an `Access-Control-Allow-Origin` header. Without a header the browser assumes that all requests must be made from the same origin.

If your web application instead makes a service request to `icanhazdadjoke.com` to get a joke, that request will succeed because `icanhazdadjoke.com` returns an `Access-Control-Allow-Origin` header with a value of `*` meaning that any origin can make requests to this service.

```http
HTTP/2 200
access-control-allow-origin: *

Did you hear about the bread factory burning down? They say the business is toast.
```

This would have also succeeded if the HTTP header had explicitly listed your web application domain. For example, if you make your request from the origin `cs260.click` the following response would also satisfy CORS.

```http
HTTP/2 200
access-control-allow-origin: https://cs260.click

I’ll tell you something about German sausages, they’re the wurst
```

This all means that you need to test the services you want to use before you include them in your application. Make sure they are responding with `*` or your calling origin. If they do not then you will not be able to use them.

# Service design

Web services provide the interactive functionality of your web application. They commonly authenticate users, track their session state, provide, store, and analyze data, connect peers, and aggregate user information. Making your web service easy to use, performant, and extensible are factors that determine the success of your application. A good design will result in increased productivity, satisfied users, and lower processing costs.

## Model and sequence diagrams

When first considering your service design it is helpful to model the application's primary objects and the interactions of the objects. You should attempt to stay as close to the model that is in your user's mind as possible. Avoid introducing a model that focuses on programming constructs and infrastructure. For example, a chat program should model participants, conversations, and messages. It should not model user devices, network connections, and data blobs.

Once you have defined your primary objects you can create sequence diagrams that show how the objects interact with each other. This will help clarify your model and define the necessary endpoints. You can use a simple tool like [SequenceDiagram.org](https://sequencediagram.org/index.html#initialData=C4S2BsFMAIGEAsCGxqIA5oFCcQY2APYBO0AguCLpDvsdAEIEBG25lkAtAHwDKkRAN34AuPikQDEIcIiZRMjJtz6CRY1JOmz5igDy6OHFUKLC2VDVJlzq5yPsPGRDZpa03Md5fxOjgiIhRcAgA7EwBnZBBQ6AB3MHgXFj0DIx8RWFCIqJiiSABHAFdIcJQQglAAM0ockIVmb1VTUlwqNBQ7aGCw-kjQUPqlXnTTHkQAT2gAIgAJSHBwAinoQjIKKkwnIm47YVn5xeXKogIAWySgA) to create and share diagrams.

![Sequence Diagram](webServicesSequenceDiagram.jpg)

## Leveraging HTTP

Web services are usually provided over HTTP, and so HTTP greatly influences the design of the service. The HTTP verbs such as GET, POST, PUT, and DELETE often mirror the designed actions of a web service. For example, a web service for managing comments might list the comments (GET), create a comment (POST), update a comment (PUT), and delete a comment (DELETE). Likewise, the MIME content types defined by IANA are a natural fit for defining the types of content that you want to provide (e.g. HTML, PNG, MP3, and MP4). The goal is to leverage those technologies as much as possible so that you don't have to recreate the functionality they provide and instead take advantage of the significant networking infrastructure built up around HTTP. This includes caching servers that increase your performance, edge servers that bring your content closer, and replication servers that provide redundant copies of your content and make your application more resilient to network failures.

![HTTP](webServicesHTTPServices.jpg)

## Endpoints

A web service is usually divided up into multiple service endpoints. Each endpoint provides a single functional purpose. All of the criteria that you would apply to creating well designed code functions also applies when exposing service endpoints.

![HTTP](webServicesHTTPEndpoints.jpg)

⚠ Note that service endpoints are often called an Application Programming Interface (API). This is a throwback to old desktop applications and the programming interfaces that they exposed. Sometimes the term API refers to the entire collection of endpoints, and sometimes it is used to refer to a single endpoint.

Here are some things you should consider when designing your service's endpoints.

- **Grammatical** - With HTTP everything is a resource (think noun or object). You act on the resource with an HTTP verb. For example, you might have an order resource that is contained in a store resource. You then create, get, update, and delete order resources on the store resource.
- **Readable** - The resource you are referencing with an HTTP request should be clearly readable in the URL path. For example, an order resource might contain the path to both the order and store where the order resource resides: `/store/provo/order/28502`. This makes it easier to remember how to use the endpoint because it is human readable.
- **Discoverable** - As you expose resources that contain other resources you can provide the endpoints for the aggregated resources. This makes it so someone using your endpoints only needs to remember the top level endpoint and then they can discover everything else. For example, if you have a store endpoint that returns information about a store you can include an endpoint for working with a store in the response.

  ```http
  GET /store/provo  HTTP/2
  ```

  ```json
  {
    "id": "provo",
    "address": "Cougar blvd",
    "orders": "https://cs260.click/store/provo/orders",
    "employees": "https://cs260.click/store/provo/employees"
  }
  ```

- **Compatible** - When you build your endpoints you want to make it so that you can add new functionality without breaking existing clients. Usually this means that the clients of your service endpoints should ignore anything that they don't understand. Consider the two following JSON response versions.

  **Version 1**

  ```js
  {
    "name": "John Taylor"
  }
  ```

  **Version 2**

  ```js
  {
    "name": "John Taylor",
    "givenName": "John",
    "familyName": "Taylor"
  }
  ```

  By adding a new representation of the `name` field, you provide new functionality for clients that know how to use the new fields without harming older clients that ignore the new fields and simply use the old representation. This is all done without officially versioning the endpoint.

  If you are fortunate enough to be able to control all of your client code you can mark the `name` field as depreciated and in a future version remove it once all of the clients have upgraded. Usually you want to keep compatibility with at least one previous version of the endpoint so that there is enough time for all of the clients to migrate before compatibility is removed.

- **Simple** - Keeping your endpoints focused on the primary resources of your application helps to avoid the temptation to add endpoints that duplicate or create parallel access to primary resources. It is very helpful to write some simple class and sequence diagrams that outline your primary resources before you begin coding. These resources should focus on the actual resources of the system you are modeling. They should not focus on the data structure or devices used to host the resources. There should only be one way to act on a resource. Endpoints should only do one thing.

- **Documented** - The [Open API Specification](https://spec.openapis.org/oas/latest.html) is a good example of tooling that helps create, use, and maintain documentation of your service endpoints. It is highly suggested that you make use of such tools in order to provide client libraries for your endpoints and a sandbox for experimentation. Creating an initial draft of your endpoint documentation before you begin coding will help you mentally clarify your design and produce a better final result. Providing access to your endpoint documentation along with your production system helps with client implementations and facilitates easier maintenance of the service. The [Swagger Petstore](https://petstore.swagger.io/) example documentation is a reasonable example to follow.

There are many models for exposing endpoints. We will consider three common ones, RPC, REST, and GraphQL.

## RPC

Remote Procedure Calls (RPC) expose service endpoints as simple function calls. When RPC is used over HTTP it usually just leverages the POST HTTP verb. The actual verb and subject of the function call is represented by the function name. For example, `deleteOrder` or `updateOrder`. The name of the function is either the entire path of the URL or a parameter in the POST body.

```http
POST /updateOrder HTTP/2

{"id": 2197, "date": "20220505"}
```

or

```http
POST /rpc HTTP/2

{"cmd":"updateOrder", "params":{"id": 2197, "date": "20220505"}}
```

One advantage of RPC is that it maps directly to function calls that might exist within the server. This could also be considered a disadvantage as it directly exposes the inner workings of the service, and thus creates a coupling between the endpoints and the implementation.

## REST

Representational State Transfer (REST) attempts to take advantage of the foundational principles of HTTP. This is not surprising considering the principle author of REST, Roy Fielding, was also a contributor to the HTTP specification. REST HTTP verbs always act upon a resource. Operations on a resource impact the state of the resource as it is transferred by a REST endpoint call. This allows for the caching functionality of HTTP to work optimally. For example, GET will always return the same resource until a PUT is executed on the resource. When PUT is used, the cached resource is replaced with the updated resource.

With REST the updateOrder endpoint would look like the following.

```http
PUT /order/2197 HTTP/2

{"date": "20220505"}
```

Where the proper HTTP verb is used and the URL path uniquely identifies the resource. These seem like small differences, but maximizing HTTP pays dividends by making it easy for HTTP infrastructure, such as caching, to work properly.

There are several other pieces of [Fielding's dissertation](https://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm) on REST, such as hypermedia, that are often quoted as being required for a truly "restful" implementation, and these are just as often ignored.

## GraphQL

GraphQL focuses on the manipulation of data instead of a function call (RPC) or a resource (REST). The heart of GraphQL is a query that specifies the desired data and how it should be joined and filtered. GraphQL was developed to address frustration concerning the massive number of REST, or RPC calls, that a web application client needed to make in order to support even a simple UI widget.

Instead of making a call for getting a store, and then a bunch of calls for getting the store's orders and employees, GraphQL would send a single query that would request all of that information in one big JSON response. The server would examine the query, join the desired data, and then filter out anything that was not wanted.

Here is an example GraphQL query.

```graphql
query {
  getOrder(id: "2197") {
    orders(filter: {date: {allofterms: "20220505"}}) {
      store
      description
      orderedBy
    }
  }
}
```

GraphQL helps to remove a lot of the logic for parsing endpoints and mapping requests to specific resources. Basically in GraphQL there is only one endpoint. The query endpoint.

The downside of that flexibility is that the client now has significant power to consume resources on the server. There is no clear boundary on what, how much, or how complicated the aggregation of data is. It also is difficult for the server to implement authorization rights to data as they have to be baked into the data schema. However, there are standards for how to define a complex schema. Common GraphQL packages provide support for schema implementations along with database adaptors for query support.

# Simon Service

![Simon](../simon.png)

This deliverable demonstrates adding a backend web service that serves up the frontend, handles HTTP endpoint requests, and stores information in memory on the server. The web service provides endpoints for getting and updating the scores. The application also uses a couple third party endpoints to display inspirational quotes on the about page and show a random header image.

We will use Node.js and Express to create our HTTP service.

You can view this application running here: [Example Simon Service](https://simon-service.cs260.click)

![Simon Service](simonService.jpg)

## Service endpoint definitions

Here is our design, documented using `curl` commands, for the endpoints that the Simon web service provides. Note that the auth endpoints are using authorization tokens in the HTTP body. During the Login deliverable we will change this over to use HTTP cookies.

**CreateAuth** - Create a new user.

```sh
curl -X POST $host/api/auth/create -H 'Content-Type: application/json' -d '{"email":"s@byu.edu", "password":"byu"}'

# Response 200
{"token":"6b2ab581-05ca-4df0-8897-5671e7febdd8"}
```

**GetAuth** - Login an existing user.

```sh
curl -X POST $host/api/auth/login -H 'Content-Type: application/json' -d '{"email":"s@byu.edu", "password":"byu"}'

# Response 200
{"token":"6b2ab581-05ca-4df0-8897-5671e7febdd8"}
```

**DeleteAuth** - Logout a user

```sh
curl -v -X DELETE $host/api/auth/logout -
H 'Content-Type: application/json' -d '{"token":"6b2ab581-05ca-4df0-8897-5671e7febdd8"}'

# Response 204
```

**GetScores** - Get the latest high scores.

```sh
curl $host/api/scores

# Response
{ "scores":[
  {"name":"Harvey", "score":"337", "date":"2022/11/20"},
  {"name":"도윤 이", "score":"95", "date":"2019/05/20"}
]}
```

**SubmitScore** - Submit a score for consideration in the list of high scores.

```sh
curl -X POST $host/api/score  -H 'Content-Type: application/json' -d '{"name":"Harvey", "score":"337", "date":"2022/11/20"}'

# Response
[
  {"name":"Harvey", "score":"337", "date":"2022/11/20"},
  {"name":"도윤 이", "score":"95", "date":"2019/05/20"}
]
```

## Steps to add the backend service

We create our service with a new directory in the root of the project named `service`. To initialize the service code we open up a command console window and setup the NPM project and install **Express**.

```sh
mkdir service && cd service
npm init -y
npm install express
```

In that directory create a file named `index.js` in the root of the project. This is the entry point that **node.js** will call when you run your web service.

Add the basic Express JavaScript code needed to make a service.

```js
const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.get('*', (_req, res) => {
  res.send({ msg: 'Simon service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

Now we can run the application with `node index.js` and hit the service with Curl.

```sh
node index.js &
curl localhost:3000

{"msg":"Simon service"}

# use fg to foreground and kill the process
```

### Add the endpoints

Now that we have the service up and running, we want to add the Simon backend service endpoints. To support our endpoints we do the following:

1. **Install UUID**. The service represents its tokens with a universally unique ID (UUID) and so we need to import that NPM package using `npm install uuid` and then import it into the code.

   ```js
   const uuid = require('uuid');
   ```

1. **Parse JSON**. All of our endpoints use JSON and so we want Express to automatically parse that for us.

   ```js
   app.use(express.json());
   ```

1. **Create the memory data structures**. Add data structures for both the users and the scores. That means whenever the service is restarted the users and scores will be lost. When we introduce the database in a later deliverable, the data will be persistent there.

   ```js
   let users = {};
   let scores = [];
   ```

1. **Set up a router path for the endpoints**. We want all of our endpoints to have a path prefix of `/api` so that we can distinguish them from requests to load the front end files. This is done with a `express.Router` call.

   ```js
   var apiRouter = express.Router();
   app.use(`/api`, apiRouter);
   ```

1. **Delete the placeholder endpoint**. Delete the placeholder endpoint `app.get('*' ...` that we created to demonstrate that the service was working.

1. **Add the service endpoints**. Add all of the code for the different Simon endpoints.

   ```js
   // CreateAuth a new user
   apiRouter.post('/auth/create', async (req, res) => {
     const user = users[req.body.email];
     if (user) {
       res.status(409).send({ msg: 'Existing user' });
     } else {
       const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
       users[user.email] = user;

       res.send({ token: user.token });
     }
   });

   // GetAuth login an existing user
   apiRouter.post('/auth/login', async (req, res) => {
     const user = users[req.body.email];
     if (user) {
       if (req.body.password === user.password) {
         user.token = uuid.v4();
         res.send({ token: user.token });
         return;
       }
     }
     res.status(401).send({ msg: 'Unauthorized' });
   });

   // DeleteAuth logout a user
   apiRouter.delete('/auth/logout', (req, res) => {
     const user = Object.values(users).find((u) => u.token === req.body.token);
     if (user) {
       delete user.token;
     }
     res.status(204).end();
   });

   // GetScores
   apiRouter.get('/scores', (_req, res) => {
     res.send(scores);
   });

   // SubmitScore
   apiRouter.post('/score', (req, res) => {
     scores = updateScores(req.body, scores);
     res.send(scores);
   });

   // updateScores considers a new score for inclusion in the high scores.
   function updateScores(newScore, scores) {
     let found = false;
     for (const [i, prevScore] of scores.entries()) {
       if (newScore.score > prevScore.score) {
         scores.splice(i, 0, newScore);
         found = true;
         break;
       }
     }

     if (!found) {
       scores.push(newScore);
     }

     if (scores.length > 10) {
       scores.length = 10;
     }

     return scores;
   }
   ```

Now we can start the service up by pressing `F5` inside of VS code and then open a command console window to execute some Curl commands.

```sh
host=http://localhost:3000

curl -X POST $host/api/score  -H 'Content-Type: application/json' -d '{"name":"Harvey", "score":"337", "date":"2022/11/20"}'

curl $host/api/scores
```

### Serving the frontend static file

In addition to serving up endpoints, we also use the Simon service to serve the static files generated when we bundled the React frontend. Our endpoints will be services on the `/api` path and everything else will look in the `public` directory of the service. If it finds a match, for `index.html` for example, then that file is returned.

![Simon service](simonProduction.jpg)

To make this happen, we only need to add the Express middleware to serve static files from the the `public` directory.

```js
app.use(express.static('public'));
```

However, we don't have a `public` directory with the frontend files in it. This will happen when we deploy to our web server in AWS. For now, you can test that it is working by creating a simple index.html file in the `service/public` directory and then requesting it with curl. Once you have done this delete the test `service/public` directory so that we don't leave any cruft around.

### Configuring Vite for debugging

When running in production, the Simon web service running under Node.js on port 3000 serves up the bundled Simon React application code when the browser requests `index.html`. The service pulls those files from the application's static HTML, CSS, and JavaScript files located in the `public` directory as described above.

However, when the application is running in debug mode in your development environment, we actually need two HTTP servers running: one for the Node.js backend HTTP server, and one for the Vite frontend HTTP server. This allows us to develop and debug both our backend and our frontend while viewing the results in the browser.

By default, Vite uses port 5173 when running in development mode. Vite starts up the debugging HTTP server when we run `npm run dev`. That means the browser is going to send network requests to port 5173. We can configure the Vite HTTP server to proxy service HTTP to the Node.js HTTP server by creating a configuration file named `vite.config.js` in the root of the project with the following contents (later, we will modify this file to allow proxying of WebSocket requests as well).

```js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
```

When running in this configuration, the network requests now flow as shown below. Without this you will not be able to debug your React application in your development environment.

![Setting up React ports](simonDevelopmentDebugging.jpg)

With the backend service running, and our files in the place where Vite expects them, we can test that everything still works. You can start Vite in dev mode with the command `npm run dev`, followed by pressing the `o` key to open the application in the browser. When you reach this point with your startup, make sure that you commit your changes.

## Frontend changes

Now that we have the service endpoints all set up we need to call them from the frontend code. This happens when we want to save and retrieve scores, as well as when we want to register or login a user.

### Saving scores

The `play/simonGame.jsx` file is modified to store scores by making a fetch request to the Simon service.

```jsx
async function saveScore(score) {
  const date = new Date().toLocaleDateString();
  const newScore = { name: userName, score: score, date: date };

  await fetch('/api/score', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newScore),
  });

  // Let other players know the game has concluded
  GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
}
```

The scores are loaded in `scores/scores.jxs` where we use a React useEffect hook to reactively display the scores once they are loaded from the service.

```jsx
React.useEffect(() => {
  fetch('/api/scores')
    .then((response) => response.json())
    .then((scores) => {
      setScores(scores);
    });
}, []);
```

Now you can shutdown the frontend and restart it without losing your scoring data.

### Registering and logging in users

We follow a similar process for handling users. This is done by altering `login/unauthenticated.jsx` to contain code that handles register and login requests.

```jsx
async function loginOrCreate(endpoint) {
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  if (response?.status === 200) {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  } else {
    const body = await response.json();
    setDisplayError(`⚠ Error: ${body.msg}`);
  }
}
```

Likewise, `login/authenticated.jsx` is altered to handle the logout event.

```jsx
function logout() {
  fetch(`/api/auth/logout`, {
    method: 'delete',
  })
    .catch(() => {
      // Logout failed. Assuming offline
    })
    .finally(() => {
      localStorage.removeItem('userName');
      props.onLogout();
    });
}
```

### Remove localstorage usage

Since we now persist scores in the service we no longer need to persistent them in local storage. We can remove that code from both `simonGame.jsx` and `scores.jsx`.

## Third party endpoints

The `about.jsx` file contains code for making calls to third party endpoints using `fetch`. The requests are triggered by the React useEffect hook. We make one call to `picsum.photos` to get a random picture and another to `quote.cs260.click` to get a random quote. Once the endpoint asynchronously returns, the React state variables are updated. Here is an example of the quote endpoint call.

```js
React.useEffect(() => {
  const random = Math.floor(Math.random() * 1000);
  fetch(`https://picsum.photos/v2/list?page=${random}&limit=1`)
    .then((response) => response.json())
    .then((data) => {
      const containerEl = document.querySelector('#picture');

      const width = containerEl.offsetWidth;
      const height = containerEl.offsetHeight;
      const apiUrl = `https://picsum.photos/id/${data[0].id}/${width}/${height}?grayscale`;
      setImageUrl(apiUrl);
    })
    .catch();

  fetch('https://quote.cs260.click')
    .then((response) => response.json())
    .then((data) => {
      setQuote(data.quote);
      setQuoteAuthor(data.author);
    })
    .catch();
}, []);
```

## Study this code

Get familiar with what the example code teaches.

- Clone the repository to your development environment.

  ```sh
  git clone https://github.com/webprogramming260/simon-service.git
  ```

- Review the code and get comfortable with everything it represents.
- Debug the backend code by launching it with a VS Code debug session.
- Debug the frontend code by launching it with Vite and using the browser debugger.

  ⚠ You will no longer use the `live server` extension to launch your frontend code in the browser. Instead you will start your backend code with node.js and your frontend code with `npm run dev`. Set breakpoints in your backend code inside of VS Code and inside the browser for your frontend.

- Use the browser's dev tools to set breakpoints in the frontend code and step through it each line.
- Make modifications to the code as desired. Experiment and see what happens.

## Deploy to production

- Deploy to your production environment using the `deployService.sh` script found in the [example class application](https://github.com/webprogramming260/simon-service/blob/main/deployService.sh). This script will bundle your React frontend application as well as build your backend application. Take some time to understand how it works.

  ⚠ **NOTE** - The `deployService.sh` deployment script is different from the previous scripts as it deploys and installs your service on your production server.

  ```sh
  ./deployService.sh -k <yourpemkey> -h <yourdomain> -s simon
  ```

  For example,

  ```sh
  ./deployService.sh -k ~/keys/production.pem -h yourdomain.click -s simon
  ```

  ⚠ **NOTE** - The deployment script for this project is different from previous deployment scripts, since it needs to set up the Node.js service for your backend code, and copy your frontend code to the `public` directory. You also want to make sure that your Node.js HTTP service code for Simon is configured to listen on port 3000. When you deploy your Startup you want to make sure that code is configured to listen on port 4000.

- Update your `startup` repository `notes.md` with what you learned.
- Make sure your project is visible from your production environment (e.g. https://simon.yourdomain.click).

# PM2

When you run a program from the console, the program will automatically terminate when you close the console or if the computer restarts. In order to keep programs running after a shutdown you need to register it as a `daemon`. The term daemon comes from the idea of something that is always there working in the background. Hopefully you only have good daemons running in your background.

We want our web services to continue running as a daemon. We would also like an easy way to start and stop our services. That is what [Process Manager 2](https://pm2.keymetrics.io/docs/usage/quick-start/) (PM2) does.

PM2 is already installed on your production server as part of the AWS AMI that you selected when you launched your server. Additionally, the deployment scripts found with the Simon projects automatically modify PM2 to register and restart your web services. That means you should not need to do anything with PM2. However, if you run into problems such as your services not running, then here are some commands that you might find useful.

You can SSH into your server and see PM2 in action by running the following command.

```sh
pm2 ls
```

This should print out the two services, simon and startup, that are configured to run on your web server.

You can try some of the other commands, but only if you understand what they are doing. Using them incorrectly could cause your web services to stop working.

| Command                                                    | Purpose                                                                          |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------- |
| **pm2 ls**                                                 | List all of the hosted node processes                                            |
| **pm2 monit**                                              | Visual monitor                                                                   |
| **pm2 start index.js -n simon**                            | Add a new process with an explicit name                                          |
| **pm2 start index.js -n startup -- 4000**                  | Add a new process with an explicit name and port parameter                       |
| **pm2 stop simon**                                         | Stop a process                                                                   |
| **pm2 restart simon**                                      | Restart a process                                                                |
| **pm2 delete simon**                                       | Delete a process from being hosted                                               |
| **pm2 delete all**                                         | Delete all processes                                                             |
| **pm2 save**                                               | Save the current processes across reboot                                         |
| **pm2 restart all**                                        | Reload all of the processes                                                      |
| **pm2 restart simon --update-env**                         | Reload process and update the node version to the current environment definition |
| **pm2 update**                                             | Reload pm2                                                                       |
| **pm2 start env.js --watch --ignore-watch="node_modules"** | Automatically reload service when index.js changes                               |
| **pm2 describe simon**                                     | Describe detailed process information                                            |
| **pm2 startup**                                            | Displays the command to run to keep PM2 running after a reboot.                  |
| **pm2 logs simon**                                         | Display process logs                                                             |
| **pm2 env 0**                                              | Display environment variables for process. Use `pm2 ls` to get the process ID    |

## Registering a new web service

If you want to setup another subdomain that accesses a different web service on your web server, you need to follow these steps.

1. Add the rule to the Caddyfile to tell it how to direct requests for the domain.
2. Create a directory and add the files for the web service.
3. Configure PM2 to host the web service.

### Modify Caddyfile

SSH into your server.

Copy the section for the startup subdomain and alter it so that it represents the desired subdomain and give it a different port number that is not currently used on your server. For example:

```sh
tacos.cs260.click {
  reverse_proxy _ localhost:5000
  header Cache-Control none
  header -server
  header Access-Control-Allow-Origin *
}
```

This tells Caddy that when it gets a request for tacos.cs260.click it will act as a proxy for those requests and pass them on to the web service that is listening on the same machine (localhost), on port 5000. The other settings tell Caddy to return headers that disable caching, hide the fact that Caddy is the server (no reason to tell hackers anything about your server), and to allow any other origin server to make endpoint requests to this subdomain (basically disabling CORS). Depending on what your web service does you may want different settings.

Restart Caddy to cause it to load the new settings.

```sh
sudo service caddy restart
```

Now Caddy will attempt to proxy the requests, but there is no web service listening on port 5000 and so you will get an error from Caddy if you make a request to tacos.cs260.click.

### Create the web service

Copy the `~/services/startup` directory to a directory that represents the purpose of your service. For example:

```sh
cp -r ~/services/startup ~/services/tacos
```

If you list the directory you should see an `index.js` file that is the main JavaScript file for your web service. It has the code to listen on the designated network port and respond to requests. The following is the JavaScript that causes the web service to listen on a port that is provided as an argument to the command line.

```js
const port = process.argv.length > 2 ? process.argv[2] : 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
```

There is also a directory named `public` that has static HTML/CSS/JavaScript files that your web service will respond with when requested. The `index.js` file enables this with the following code:

```js
app.use(express.static('public'));
```

You can start up the web service, listening on port 5000, using Node as follows.

```sh
node index.js 5000
```

You can now access your web service through the browser, or `curl`.

```sh
curl https://tacos.cs260.click
```

Caddy will receive the request and map the subdomain name, tacos.cs260.click, to a request for http://localhost:5000. Your web service is listening on port 5000 and so it receives the request and responds.

Stop your web service by pressing CTRL-C in the SSH console that you used to start the service. Now your browser request for your subdomain should return an error again.

### Configure PM2 to host the web service

The problem with running your web service from the console with `node index.js 5000`, is that as soon as you close your SSH session it will terminate all processes you started in that session, including your web service. Instead you need something that is always running in the background to run your web service. This is where daemons come into play. The daemon we use to do this is called PM2.

From your SSH console session run:

```sh
pm2 ls
```

This will list the web services that you already have registered with PM2. To run your newly created web service under PM2, make sure you are in your service directory, and run the command similar to the following, with the service name and port substituted to your desired values:

```sh
cd ~/services/tacos
pm2 start index.js -n tacos -- 5000
pm2 save
```

If you run `pm2 ls` again you should see your web service listed. You can now access your subdomain in the browser and see the proper response. PM2 will keep running your service even after you exit your SSH session.

# Development and production environments

When working on a commercial web application, it is critical to separate where you develop your application, from where the production release of your application is made publicly available. Often times there are more environments than this, such as staging, internal testing, and external testing environments. If your company is seeking third party security certification (such as SOC2 compliance) they will require that these environments are strictly separated from each other. A developer will not have access to the production environment in order to prevent a developer from nefariously manipulating an entire company asset. Instead, automated integration processes, called continuous integration (`CI`) processes, checkout the application code, [lint it](https://www.freecodecamp.org/news/what-is-linting-and-how-can-it-save-you-time/), build it, test it, stage it, test it more, and then finally, if everything checks out, **deploy** the application to the production environment, and notify the different departments in the company of the release.

![Complex deployment](essentialsDeploymentComplex.jpg)

For our work, you will use and manage both your _development environment_ (your personal computer) and your _production environment_ (your AWS server). However, you should never consider your production environment as a place to develop, or experiment with, your application. You may shell into the production environment to configure your server or to debug a production problem, but the deployment of your application should happen using an automated CI process. For our CI process, we will use a very simple console shell script.

![Simple deployment](essentialsDeploymentSimple.jpg)

## Automating your deployment

The advantage of using an automated deployment process is that it is reproducible. You don't accidentally delete a file, or misconfigure something with an stray keystroke. Also, having a automated script encourages you to iterate quickly because it is so much easier to deploy your code. You can add a small feature, deploy it out to production, and get feedback within minutes from your users.

Our deployment scripts change with each new technology that we have to deploy. Initially, they just copy up a directory of HTML files, but soon they include the ability to modify the configuration of your web server, run transpiler tools, and bundle your code into a deployable package.

You run a deployment script from a console window in your development environment with a command like the following.

```sh
./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon
```

The `-k` parameter provides the credential file necessary to access your production environment. The `-h` parameter is the domain name of your production environment. The `-s` parameter represents the name of the application you are deploying (either `simon` or `startup`).

This will make more sense as we gradually build up our technologies but we can discuss our simon-service deployment script as an example of what they will do. You can view the [entire file here](https://github.com/webprogramming260/simon-service/blob/main/deployService.sh), but we will explain each step below. It isn't critical that you deeply understand everything in the script, but the more you do understand the easier it will be for you to track down and fix problems when they arise.

The first part of the script simply parses the command line parameters so that we can pass in the production environment's security key (or PEM key), the hostname of your domain, and the name of the service you are deploying.

```sh
while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployService.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying $service to $hostname with $key\n"
```

Next the script copies all of the applicable source files into a distribution directory (`dist`) in preparation for copying that directory to your production server.

```sh
# Step 1
printf "\n----> Build the distribution package\n"
rm -rf dist
mkdir dist
cp -r application dist
cp *.js dist
cp package* dist
```

The target directory on your production environment is deleted so that the new one can replace it. This is done by executing commands remotely using the secure shell program (`ssh`).

```sh
# Step 2
printf "\n----> Clearing out previous distribution on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
rm -rf services/${service}
mkdir -p services/${service}
ENDSSH
```

The distribution directory is then copied to the production environment using the secure copy program (`scp`).

```sh
# Step 3
printf "\n----> Copy the distribution package to the target\n"
scp -r -i $key dist/* ubuntu@$hostname:services/$service
```

We then use `ssh` again to execute some commands on the production environment. This installs the node packages with `npm install` and restarts the service daemon (`PM2`) that runs our web application in the production environment.

```sh
# Step 4
printf "\n----> Deploy the service on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
cd services/${service}
npm install
pm2 restart ${service}
ENDSSH
```

Finally we clean up our development environment by deleting the distribution package.

```sh
# Step 5
printf "\n----> Removing local copy of the distribution package\n"
rm -rf dist
```

Can you imagine if you had to do all of that by hand every time? You would dread deploying and would most likely make several time consuming mistakes during the process.

A deployment script exists for each of the Simon projects and you can use them, as is, for your startup application as long as you are doing similar types of deployment actions.

If you want to learn more about shell scripting you can [read this tutorial](https://ryanstutorials.net/bash-scripting-tutorial/bash-script.php). Shell scripting is a powerful tool for automating common development tasks and is well worth adding to your bucket of skills.

# Uploading files

Web applications often need to upload one or more files from the frontend application running in the browser to the backend service. We can accomplish this by using the HTML `input` element of type `file` on the frontend, and the `Multer` NPM package on the backend.

![upload flow](uploadFlow.png)

## Frontend Code

The following frontend code registers and event handler for when the selected file changes and only accepts files of type `.png, .jpeg, or .jpg`. We also create an `img` placeholder element that will display the uploaded image once it has been stored on the server.

```html
<html lang="en">
  <body>
    <h1>Upload an image</h1>
    <input
      type="file"
      id="fileInput"
      name="file"
      accept=".png, .jpeg, .jpg"
      onchange="uploadFile(this)"
    />
    <div>
      <img style="padding: 2em 0" id="upload" />
    </div>
    <script defer src="frontend.js"></script>
  </body>
</html>
```

The frontend JavaScript handles the uploading of the file to the server and then uses the filename returned from the server to set the `src` attribute of the image element in the DOM. If an error happens then an alert is displayed to the user.

```js
async function uploadFile(fileInput) {
  const file = fileInput.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      document.querySelector('#upload').src = `/file/${data.file}`;
    } else {
      alert(data.message);
    }
  }
}
```

## Backend code

In order to build storage support into our server, we first install the `Multer` NPM package to our project. There are other NPM packages that we can chose from, but Multer is commonly used. From your project directory, run the following console command.

```sh
npm install multer
```

Multer handles reading the file from the HTTP request, enforcing the size limit of the upload, and storing the file in the `uploads` directory. Additionally our service code does the following:

- Handles requests for static files so that we can serve up our frontend code.
- Handles errors such as when the 64k file limit is violated.
- Provides a `GET` endpoint to serve up a file from the uploads directory.

```js
const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.static('public'));

const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const filetype = file.originalname.split('.').pop();
      const id = Math.round(Math.random() * 1e9);
      const filename = `${id}.${filetype}`;
      cb(null, filename);
    },
  }),
  limits: { fileSize: 64000 },
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.send({
      message: 'Uploaded succeeded',
      file: req.file.filename,
    });
  } else {
    res.status(400).send({ message: 'Upload failed' });
  }
});

app.get('/file/:filename', (req, res) => {
  res.sendFile(__dirname + `/uploads/${req.params.filename}`);
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(413).send({ message: err.message });
  } else {
    res.status(500).send({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

## Where you store your files

You should take serious thought about where you store your files. Putting files on your server is not a very good production level solution for the following reasons.

1. You only have so much available space. Your server only has 8 GB by default. Once you use up all your space then your server will fail to operate correctly and you may need to rebuild your server.
1. In a production system, servers are transient and are often replaced as new versions are released, or capacity requirements change. That means you will lose any state that you store on your server.
1. The server storage is not usually backed up. If the server fails for any reason, you will lose your customer's data.
1. If you have multiple application servers then you can't assume that the server you uploaded the data to is going to be the one you request a download from.

Instead you want to use a dedicated storage service that has durability guarantees, is not tied to your compute capacity, and can be accessed by multiple application servers.

# Storage services

Web applications commonly need to store files associated with the application or the users of the application. This includes files such as images, user uploads, documents, and movies. Files usually have an ID, some metadata, and the bytes representing the file itself. These can be stored using a database service, but usually that is overkill and a simpler solution will be cheaper.

It might be tempting to store files directly on your server. This is usually a bad idea for several reasons.

1. Your server has limited drive space. If you server runs out of drive space your entire application will fail.
1. You should consider your server as being ephemeral, or temporary. It can be thrown away and replaced by a copy at any time. If you start storing files on the server, then your server has state that cannot be easily replaced.
1. You need backup copies of your application and user files. If you only have one copy of your files on your server, then they will disappear when your server disappears, and you must always assume that your server will disappear.

Instead you want to use a storage service that is specifically designed to support production storage and delivery of files.

## AWS S3

There are many such solutions out there, but one of the most popular ones is [AWS S3](https://aws.amazon.com/s3/). S3 provides the following advantages:

1. It has unlimited capacity
1. You only pay for the storage that you use
1. It is optimized for global access
1. It keeps multiple redundant copies of every file
1. You can version the files
1. It is performant
1. It supports metadata tags
1. You can make your files publicly available directly from S3
1. You can keep your files private and only accessible to your application

In this course we will not be using any storage services for the Simon project. If, however, you want to use S3 as the storage service for your Startup application, then you need to learn how to use the AWS SDK. You can find detailed information about using AWS S3 with Node.js on the [AWS website](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-nodejs.html). Generally, the steps you need to take include:

1. Creating a S3 bucket to store your data in.
1. Getting credentials so that your application can access the bucket.
1. [Using](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html) the credentials in your application.
1. Using the [SDK](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/s3-example-creating-buckets.html) to write, list, read, and delete files from the bucket.

⚠ Make sure that you do not include your credentials in your code. If you check your credentials into your GitHub repository they will immediately be stolen and used by hackers to take over your AWS account. This may result in significant monetary damage to you.

# Data services

Web applications commonly need to store application and user data persistently. The data can be many things, but it is usually a representation of complex interrelated objects. This includes things like a user profile, organizational structure, game play information, usage history, billing information, peer relationship, library catalog, and so forth.

![Data service](dataService.jpg)

Historically, SQL databases have served as the general purpose data service solution, but starting around 2010, specialty data services that better support document, graph, JSON, time, sequence, and key-value pair data began to take significant roles in applications from major companies. These data services are often called NoSQL solutions because they do not use the general purpose relational database paradigms popularized by SQL databases. However, they all have very different underlying data structures, strengths, and weaknesses. That means that you should not simply split all of the possible data services into two narrowly defined boxes, SQL and NoSQL, when you are considering the right data service for your application.

Here is a list of some of the popular data services that are available.

| Service       | Specialty             |
| ------------- | --------------------- |
| MySQL         | Relational queries    |
| Redis         | Memory cached objects |
| ElasticSearch | Ranked free text      |
| MongoDB       | JSON objects          |
| DynamoDB      | Key value pairs       |
| Neo4J         | Graph based data      |
| InfluxDB      | Time series data      |

## MongoDB

![MongoDB logo](webServicesMongoLogo.png)

For the projects in this course that require data services, we will use `MongoDB`. Mongo increases developer productivity by using JSON objects as its core data model. This makes it easy to have an application that uses JSON from the top to the bottom of the technology stack. A mongo database is made up of one or more collections that each contain JSON documents. You can think of a collection as a large array of JavaScript objects, each with a unique ID. The following is a sample of a collection of houses that are for rent.

```js
[
  {
    _id: '62300f5316f7f58839c811de',
    name: 'Lovely Loft',
    summary: 'A charming loft in Paris',
    beds: 1,
    last_review: {
      $date: '2022-03-15T04:06:17.766Z',
    },
    price: 3000,
  },
  {
    _id: '623010b97f1fed0a2df311f8',
    name: 'Infinite Views',
    summary: 'Modern home with infinite views from the infinity pool',
    property_type: 'House',
    beds: 5,
    price: 250,
  },
];
```

Unlike relational databases that require a rigid table definition where each column must be strictly typed and defined beforehand, Mongo has no strict schema requirements. Each document in the collection usually follows a similar schema, but each document may have specialized fields that are present, and common fields that are missing. This allows the schema of a collection to morph organically as the data model of the application evolves. To add a new field to a Mongo collection you just insert the field into the documents as desired. If the field is not present, or has a different type in some documents, then the document simply doesn't match the query criteria when the field is referenced.

The query syntax for Mongo also follow a JavaScript-inspired flavor. Consider the following queries on the houses for rent collection that was shown above.

```js
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
```

### Using MongoDB in your application

📖 **Deeper dive reading**: [MongoDB tutorial](https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/)

The first step to using Mongo in your application is to install the `mongodb` package using NPM.

```sh
➜ npm install mongodb
```

With that done, you then use the `MongoClient` object to make a client connection to the database server. This requires a username, password, and the hostname of the database server.

```js
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
```

With the client connection you can then get a database object and from that a collection object. The collection object allows you to insert, and query for, documents. You do not have to do anything special to insert a JavaScript object as a Mongo document. You just call the `insertOne` function on the collection object and pass it the JavaScript object. When you insert a document, if the database or collection does not exist, Mongo will automatically create them for you. When the document is inserted into the collection it will automatically be assigned a unique ID.

```js
const collection = client.db('rental').collection('house');

const house = {
  name: 'Beachfront views',
  summary: 'From your bedroom to the beach, no shoes required',
  property_type: 'Condo',
  beds: 1,
};
await collection.insertOne(house);
```

To query for documents you use the `find` function on the collection object. Note that the find function is asynchronous and so we use the `await` keyword to wait for the promise to resolve before we write them out to the console.

```js
const cursor = collection.find();
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```

If you do not supply any parameters to the `find` function then it will return all documents in the collection. In this case we only get back the single document that we previously inserted. Notice that the automatically generated ID is returned with the document.

**Output**

```js
[
  {
    _id: new ObjectId('639a96398f8de594e198fc13'),
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  },
];
```

You can provide a query and options to the `find` function. In the example below we query for a `property_type` of Condo that has less than two bedrooms. We also specify the options to sort by descending price, and limit our results to the first 10 documents.

```js
const query = { property_type: 'Condo', beds: { $lt: 2 } };

const options = {
  sort: { price: -1 },
  limit: 10,
};

const cursor = collection.find(query, options);
const rentals = await cursor.toArray();
rentals.forEach((i) => console.log(i));
```

The query matches the document that we previously inserted and so we get the same result as before.

There is a lot more functionality that MongoDB provides, but this is enough to get you started. If you are interested you can explore the tutorials on their [website](https://www.mongodb.com/docs/).

## Managed services

Historically each application development team would have developers that managed the data service. Those developers would acquire hardware, install the database software, monitor the memory, cpu, and disk space, control the data schema, and handle migrations and upgrades. Much of this work has now moved to services that are hosted and managed by a 3rd party. This relieves the development team from much of the day-to-day maintenance. The team can instead focus more on the application and less on the infrastructure. With a managed data service you simply supply the data and the service grows, or shrinks, to support the desired capacity and performance criteria.

### MongoDB Atlas

All of the major cloud providers offer multiple data services. For this class we will use the data service provided by MongoDB called [Atlas](https://www.mongodb.com/atlas/database). No credit card or payment is required to set up and use Atlas, as long as you stick to the shared cluster environment.

![Mongo sign up](webServicesMongoSignUp.jpg)
[MongoDB Atlas sign up](https://www.mongodb.com/atlas/database)

⚠ This [video tutorial](https://www.youtube.com/watch?v=daIH4o75KE8) will step you through the process of creating your account and setting up your database. You really want to watch this video. Note that some of the Atlas website interface may be slightly different, but the basic concepts should all be there in some shape or form. The main steps you need to take are:

1. Create your account.
1. Create a database cluster.
1. Create your root database user credentials. Remember these for later use.
1. ⚠ Set network access to your database to be available from anywhere.

   ![Atlas IP Anywhere](webServicesMongoIpAnywhere.gif)

1. Copy the connection string and use the information in your code.
1. Save the connection and credential information in your production and development environments as instructed above.

You can always find the connection string to your Atlas cluster by pressing the `Connect` button from your Database > DataServices view.

![Atlas connection string](webServicesMongoConnection.gif)

## Keeping your keys out of your code

You need to protect your credentials for connecting to your Mongo database. One common mistake is to check them into your code and then post it to a public GitHub repository. Instead you can load your credentials when the application executes. One common way to do that is to have a JSON configuration file that contains the credentials that you dynamically load into the JavaScript that makes the database connection. You then use the configuration file in your development environment and deploy it to your production environment, but you **never** commit it to GitHub.

In order to accomplish this do the following:

1. Create a file named `dbConfig.json` in the same directory as the database JavaScript (e.g. `database.js`) that you use to make database requests.
1. Insert your Mongo DB credentials into the `dbConfig.json` file in JSON format using the following example:

   ```json
   {
     "hostname": "cs260.abcdefg.mongodb.net",
     "userName": "myMongoUserName",
     "password": "toomanysecrets"
   }
   ```

1. Import the `dbConfig.json` content into your `database.js` file using a Node.js require statement and use the data that it represents to create the connection URL.

   ```js
   const config = require('./dbConfig.json');
   const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
   ```

⚠ Make sure you include `dbConfig.json` in your `.gitignore` file so that it does not get pushed up to GitHub.

### Testing the connection on startup

It is nice to know that your connection string is correct before your application attempts to access any data. We can do that when the application starts by making an asynchronous request to ping the database. If that fails then either the connection string is incorrect, the credentials are invalid, or the network is not working. The following is an example of testing the connection.

```js
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('rental');

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});
```

If your server is not starting, then check your logs for this exception being thrown.

## Using Mongo from your code

With that all done, you should be good to use Atlas from both your development and production environments. You can test that things are working correctly with the following example.

```js
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);
```

To execute the above example, do the following:

1. Create a directory called `mongoTest`
1. Save the above content to a file named `index.js`
1. Create a file named `dbConfig.json` that contains your database credentials
1. Run `npm init -y`
1. Run `npm install mongodb`
1. Run `node index.js`.

This should output something like the following if everything is working correctly.

```js
{
_id: new ObjectId("639b51b74ef1e953b884ca5b"),
name: 'Beachfront views',
summary: 'From your bedroom to the beach, no shoes required',
property_type: 'Condo',
beds: 1
}
```

## ☑ Assignment

First, set up your MongoDB Atlas database service. Then use the instructions above. Run the example program for testing that you have things set up correctly.

When you are done, submit the hostname for your Atlas database cluster to the Canvas assignment.

Here is an example hostname:

```
cs260.xiu1cqz.mongodb.net
```

# Authorization services

If your application is going to remember a user's data then it will need a way to uniquely associate the data with a particular credential. That usually means that you `authenticate` a user by asking for information, such as an email address and password. You then remember, for some period of time, that the user has authenticated by storing an `authentication token` on the user's device. Often that token is stored in a [cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie) that is passed back to your web service on each request. The service can now associate data that the user supplies with a unique identifier that corresponds to their authorization token.

![authentication](authServiceAuthenticate.jpg)

Determining what a user is `authorized` to do in your application is also important. For example, you might have different roles in your application such as Administrators, Editors, and Customers. Once you have the ability to authenticate a user and store information about that user, you can also store the authorization for the user. A simple application might have a single field that represents the role of the user. The service code would then use that role to allow, limit, or prevent what a service endpoint does. A complex web application will usually have very powerful authorization representation that controls the user's access to every part of the application. For example, an Editor role might have authorization only to work on content that they created or were invited to.

![authorize](authServiceAuthorize.jpg)

As you might imagine, authentication and authorization can become very complex, very quickly. It is also a primary target for a hacker. If they can bypass the authentication or escalate what they are authorized to do, then they can gain control of your application. Additionally, constantly forcing users to authenticate in a secure way causes users to not want to use an application. This creates opposing priorities: keep the system secure or make it easy to use.

In an attempt to remove the complexity of authentication and authorization from your application, many service providers and package developers have created solutions that you can use. Assuming that you are using a trusted, well-tested service this is an attractive option because it removes the cost of building, testing, and managing that critical infrastructure yourself.

Authorization services often use standard protocols for authenticating and authorizing. These include standards such as [OAuth](https://en.wikipedia.org/wiki/OAuth), [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language), and [OIDC](https://en.wikipedia.org/wiki/OpenID). Additionally, they usually support concepts like `Single Sign On` (SSO) and Federated Login. Single sign on allows a user to use the same credentials for multiple web applications. For example, you can log in to GitHub using your Google credentials. Federated login allows a user to log in once, and then the authentication token is reused to automatically log the user in to multiple websites. For example, logging in to Gmail allows you to also use Google Docs and YouTube without logging in again.

For this course we will implement our own authentication using a simple email/password design. Knowing how to implement a simple authentication design will help you appreciate what authentication services provide. If you want to experiment with different authorization services you might consider [AWS Cognito](https://aws.amazon.com/cognito/), or [Google Firebase](https://firebase.google.com/docs/auth).

token: asfjkfei -> simon
simon -> browser 
```
token: asdsdf
user: shep@j.com
role: ['admin', 'editor']
```

# Account creation and login

The first step towards supporting authentication in your web application is providing a way for users to uniquely identify themselves. This usually requires two service endpoints. One to initially `create` an authentication credential, and a second to authenticate, or `login`, on future visits. Once a user is authenticated we can control access to other endpoints. For example, web services often have a `getMe` endpoint that gives information about the currently authenticated user. We will implement this endpoint to demonstrate that authentication is actually working correctly.

## Endpoint design

Using HTTP we can map out the design of each of our endpoints.

### Create authentication endpoint

This takes an email and password and returns a cookie containing the authentication token and user ID. If the email already exists it returns a 409 (conflict) status code.

```http
POST /auth/create HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```

```http
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}
```

### Login authentication endpoint

This takes an email and password and returns a cookie containing the authentication token and user ID. If the email does not exist or the password is bad it returns a 401 (unauthorized) status code.

```http
POST /auth/login HTTP/2
Content-Type: application/json

{
  "email":"marta@id.com",
  "password":"toomanysecrets"
}
```

```http
HTTP/2 200 OK
Content-Type: application/json
Set-Cookie: auth=tokenHere

{
  "id":"337"
}

```

### GetMe endpoint

This uses the authentication token stored in the cookie to look up and return information about the authenticated user. If the token or user do not exist it returns a 401 (unauthorized) status code.

```http
GET /user/me HTTP/2
Cookie: auth=tokenHere
```

```http
HTTP/2 200 OK
Content-Type: application/json

{
  "email":"marta@id.com"
}

```

## Web service

With our service endpoints designed, we can now build our web service using Express.

```js
const express = require('express');
const app = express();

app.post('/auth/create', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

app.post('/auth/login', async (req, res) => {
  res.send({ id: 'user@id.com' });
});

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

Follow these steps, and then add in the code from the sections that follow. There is a copy of the final version of the example at the end of this instruction. If you get lost, or things are not working as expected, refer to the final version.

1. Create a directory called `authTest` that we will work in.
1. Save the above content to a file named `main.js`. This is our starting web service.
1. Run `npm init -y` to initialize the project to work with node.js.
1. Run `npm install express cookie-parser mongodb uuid bcrypt` to install all of the packages we are going to use.
1. Run `node main.js` or press `F5` in VS Code to start up the web service.
1. You can now open a console window and use `curl` to try out one of the endpoints.

   ```sh
   curl -X POST localhost:8080/auth/create
   ```
   ```sh
   {"id":"user@id.com"}
   ```

## Handling requests

With our basic service created, we can now implement the create authentication endpoint. The first step is to read the credentials from the body of the HTTP request. Since the body is designed to contain JSON we need to tell Express that it should parse HTTP requests, with a content type of `application/json`, automatically into a JavaScript object. We do this by using the `express.json` middleware. We can then read the email and password directly out of the `req.body` object. We can test that this is working by temporarily including them in the response.

```js
app.use(express.json());

app.post('/auth/create', (req, res) => {
  res.send({
    id: 'user@id.com',
    email: req.body.email,
    password: req.body.password,
  });
});
```

```sh
curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"marta@id.com", "password":"toomanysecrets"}'
```
```sh
{"id":"user@id.com","email":"marta@id.com","password":"toomanysecrets"}
```

Now that we have proven that we can parse the request bodies correctly, we can change the code to add a check to see if we already have a user with that email address. If we do, then we immediately return a 409 (conflict) status code. Otherwise we create a new user and return the user ID.

```js
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    res.send({
      id: user._id,
    });
  }
});
```

## Using the database

We want to persistently store our users in Mongo and so we need to set up our code to connect to and use the database. This code is explained in the instruction on [data services](../dataServices/dataServices.md) if you want to review what it is doing.

```js
const { MongoClient } = require('mongodb');

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
```

With a Mongo collection object we can implement the `getUser` and `createUser` functions.

```js
function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const user = {
    email: email,
    password: password,
    token: 'xxx',
  };
  return collection.insertOne(user);
}
```

But, we are missing a couple of things. We need a real authentication token, and we cannot simply store a clear text password in our database.

## Generating authentication tokens

To generate a reasonable authentication token we use the `uuid` package. [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) stands for Universally Unique Identifier, and it does a really good job creating a hard to guess, random, unique ID.

```js
const uuid = require('uuid');

token: uuid.v4();
```

## Securing passwords

Next we need to securely store our passwords. Failing to do so is a major security concern. If, and it has happened to many major companies, a hacker is able to access the database, they will have the passwords for all of your users. This may not seem like a big deal if your application is not very valuable, but users often reuse passwords. That means you will also provide the hacker with the means to attack the user on many other websites.

So instead of storing the password directly, we want to cryptographically hash the password so that we never store the actual password. When we want to validate a password during login, we can hash the login password and compare it to our stored hash of the password.

To hash our passwords we will use the `bcrypt` package. This creates a very secure one-way hash of the password. If you are interested in understanding how [bcrypt](https://en.wikipedia.org/wiki/Bcrypt) works, it is definitely worth the time.

```js
const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
```

## Passing authentication tokens

We now need to pass our generated authentication token to the browser when the login endpoint is called, and get it back on subsequent requests. To do this we use HTTP cookies. The `cookie-parser` package provides middleware for cookies and so we will leverage that.

We import the `cookieParser` object and then tell our app to use it. When a user is successfully created, or logs in, we set the cookie header. Since we are storing an authentication token in the cookie, we want to make it as secure as possible, and so we use the `httpOnly`, `secure`, and `sameSite` options.

- `httpOnly` tells the browser to not allow JavaScript running on the browser to read the cookie.
- `secure` requires HTTPS to be used when sending the cookie back to the server.
- `sameSite` will only return the cookie to the domain that generated it.

```js
const cookieParser = require('cookie-parser');

// Use the cookie parser middleware
app.use(cookieParser());

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
```

## Login endpoint

The login authorization endpoint needs to get the hashed password from the database, compare it to the provided password using `bcrypt.compare`, and if successful set the authentication token in the cookie. If the password does not match, or there is no user with the given email, the endpoint returns status 401 (unauthorized).

```js
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

## GetMe endpoint

With everything in place to create credentials and login using the credentials, we can now implement the `getMe` endpoint to demonstrate that it all actually works. To implement this we get the user object from the database by querying on the authentication token. If there is not an authentication token, or there is no user with that token, we return status 401 (unauthorized).

```js
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```

## Final code

Here is the full example code.

```js
const { MongoClient } = require('mongodb');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const userName = 'holowaychuk';
const password = 'express';
const hostname = 'mongodb.com';

const url = `mongodb+srv://${userName}:${password}@${hostname}`;
const client = new MongoClient(url);
const collection = client.db('authTest').collection('user');

app.use(cookieParser());
app.use(express.json());

// createAuthorization from the given credentials
app.post('/auth/create', async (req, res) => {
  if (await getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await createUser(req.body.email, req.body.password);
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// loginAuthorization from the given credentials
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// getMe for the currently authenticated user
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

function getUser(email) {
  return collection.findOne({ email: email });
}

async function createUser(email, password) {
  const passwordHash = await bcrypt.hash(password, 10);
  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

## Experiment

With everything implemented, we can use `curl` to try it out. First start up the web service from VS Code by pressing `F5` and selecting `node.js` as the debugger if you have not already done that. You can set breakpoints on all of the different endpoints to see what they do and inspect the different variables. Then open a console window and run the following `curl` commands. You should see results similar to what is shown below. Note that the `-c` and `-b` parameters tell curl to store and use cookies with the given file.

```sh
curl -X POST localhost:8080/auth/create -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'
```
```sh
{"id":"639bb9d644416bf7278dde44"}
```

```sh
curl -c cookie.txt -X POST localhost:8080/auth/login -H 'Content-Type:application/json' -d '{"email":"지안@id.com", "password":"toomanysecrets"}'
```
```sh
{"id":"639bb9d644416bf7278dde44"}
```

```sh
curl -b cookie.txt localhost:8080/user/me
```
```sh
{"email":"지안@id.com"}
```

# WebSocket

![webSocket](webServicesWebSocketsLogo.png)

HTTP is based on a client-server architecture. A client always initiates the request and the server responds. This is great if you are building a global document library connected by hyperlinks, but for many other use cases it just doesn't work. Applications for notifications, distributed task processing, peer-to-peer communication, or asynchronous events need communication that is initiated by two or more connected devices.

For years, web developers created hacks to work around the limitation of the client/server model. This included solutions like having the client frequently pinging the server to see if the server had anything to say, or keeping client-initiated connections open for a very long time as the client waited for some event to happen on the server. Needless to say, none of these solutions were elegant or efficient.

Finally, in 2011 the communication protocol WebSocket was created to solve this problem. The core feature of WebSocket is that it is fully duplexed. This means that after the initial connection is made from a client, using vanilla HTTP, and then upgraded by the server to a WebSocket connection, the relationship changes to a peer-to-peer connection where either party can efficiently send data at any time.

![WebSocket Upgrade](webServicesWebSocketUpgrade.jpg)

WebSocket connections are still only between two parties. So if you want to facilitate a conversation between a group of users, the server must act as the intermediary. Each peer first connects to the server, and then the server forwards messages amongst the peers.

![WebSocket Peers](webServicesWebSocketPeers.jpg)

## Creating a WebSocket conversation

JavaScript running on a browser can initiate a WebSocket connection with the browser's WebSocket API. First you create a WebSocket object by specifying the port you want to communicate on.

You can then send messages with the `send` function, and register a callback using the `onmessage` function to receive messages.

```js
const socket = new WebSocket('ws://localhost:9900');

socket.onmessage = (event) => {
  console.log('received: ', event.data);
};

socket.send('I am listening');
```

The server uses the `ws` package to create a WebSocketServer that is listening on the same port the browser is using. By specifying a port when you create the WebSocketServer, you are telling the server to listen for HTTP connections on that port and to automatically upgrade them to a WebSocket connection if the request has a `connection: Upgrade` header.

When a connection is detected it calls the server's `on connection` callback. The server can then send messages with the `send` function, and register a callback using the `on message` function to receive messages.

```js
const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 9900 });

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    console.log('received: %s', msg);

    ws.send(`I heard you say "${msg}"`);
  });

  ws.send('Hello webSocket');
});
```

In a later instruction we will show you how to run and debug this example.

# Debugging WebSocket

You can debug both sides of the WebSocket communication with VS Code to debug the server, and Chrome to debug the client. When you do this you will notice that Chrome's debugger has support specifically for working with WebSocket communication.

![WebSocket debugger](webServicesWebSocketDebugger.jpg)

## Debugging the server

1. Create a directory named `testWebSocket` and change to that directory.
1. Run `npm init -y`.
1. Run `npm install ws`.
1. Open VS Code and create a file named `main.js`. Paste the following code.

   ```js
   const { WebSocketServer } = require('ws');

   const wss = new WebSocketServer({ port: 9900 });

   wss.on('connection', (ws) => {
     ws.on('message', (data) => {
       const msg = String.fromCharCode(...data);
       console.log('received: %s', msg);

       ws.send(`I heard you say "${msg}"`);
     });

     ws.send('Hello webSocket');
   });
   ```

1. Set breakpoints on the `ws.send` lines so you can inspect the code executing.
1. Start debugging by pressing `F5`. The first time you may need to choose Node.js as the debugger.

![WebSocket server debugging](webServicesWebSocketServerDebug.gif)

## Debugging the client

1. Open the Chrome debugger by pressing `F12`.
1. Paste this code into the debugger console window and press enter to execute it. Executing this code will immediately hit the server breakpoint. Take a look at what is going on and then remove the breakpoint from the server.

   ```js
   const socket = new WebSocket('ws://localhost:9900');

   socket.onmessage = (event) => {
     console.log('received: ', event.data);
   };
   ```

1. Select the `Network` tab and then select the HTTP message that was generated by the execution of the above client code.
1. With the HTTP message selected, you then click the `Messages` tab to view the WebSocket messages
1. Send a message to the server by executing the following in the debugger console window. This will cause the second server breakpoint to hit. Explore and then remove the breakpoint from the server.
   ```js
   socket.send('I am listening');
   ```
1. You should see the messages in the `Messages` debugger window.
1. Send some more messages and observe the communication back and forth without stopping on the breakpoints.

![WebSocket client debugging](webServicesWebSocketClientDebug.gif)

# WebSocket chat

With the understanding of what WebSockets are, the basics of using them from Node and the browser, and the ability to debug the communication, it is time to use WebSocket to build a simple chat application.

![WebSocket Peers](webServicesWebSocketPeers.jpg)

In this example we will create an HTML page that uses WebSockets and displays the resulting chat. The server will forward the WebSocket communication from the different clients.

## Chat client

The HTML for the client provides an input for the user's name, an input for creating messages, and an element to display the messages that are sent and received.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebSocket Chat</title>
    <link rel="stylesheet" href="main.css" />
  </head>
  <body>
    <div class="name">
      <fieldset id="name-controls">
        <legend>My Name</legend>
        <input id="my-name" type="text" />
      </fieldset>
    </div>

    <fieldset id="chat-controls" disabled>
      <legend>Chat</legend>
      <input id="new-msg" type="text" />
      <button onclick="sendMessage()">Send</button>
    </fieldset>
    <div id="chat-text"></div>
  </body>
  <script src="chatClient.js"></script>
</html>
```

The JavaScript for the application provides the interaction with the DOM for creating and displaying messages, and manages the WebSockets in order to connect, send, and receive messages.

### DOM interaction

We do not want to be able to send messages if the user has not specified a name. So we add an event listener on the name input and disable the chat controls if the name ever is empty.

```js
const chatControls = document.querySelector('#chat-controls');
const myName = document.querySelector('#my-name');
myName.addEventListener('keyup', (e) => {
  chatControls.disabled = myName.value === '';
});
```

We then create a function that will update the displayed messages by selecting the element with the `chat-text` ID and appending the new message to its HTML. Security-minded developers will realize that manipulating the DOM in this way will allow any chat user to execute code in the context of the application. After you get everything working, if you are interested, see if you can exploit this weakness.

```js
function appendMsg(cls, from, msg) {
  const chatText = document.querySelector('#chat-text');
  chatText.innerHTML = `<div><span class="${cls}">${from}</span>: ${msg}</div>` + chatText.innerHTML;
}
```

When a user presses the enter key in the message input we want to send the message over the socket. We do this by selecting the DOM element with the `new-msg` ID and adding a listener that watches for the `Enter` keystroke.

```js
const input = document.querySelector('#new-msg');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
```

When Enter is pressed the sendMessage function is called. This selects the text out of the `new-msg` element and the name out of the `my-name` element and sends that over the WebSocket. The value of the message element is then cleared so that it is ready for the next message.

```js
function sendMessage() {
  const msgEl = document.querySelector('#new-msg');
  const msg = msgEl.value;
  if (!!msg) {
    appendMsg('me', 'me', msg);
    const name = document.querySelector('#my-name').value;
    socket.send(`{"name":"${name}", "msg":"${msg}"}`);
    msgEl.value = '';
  }
}
```

### WebSocket connection

Now we can set up our WebSocket. We want to be able to support both secure and non-secure WebSocket connections. To do this we look at the protocol that is currently being used as represented by the `window.location.protocol` variable. If it is non-secure HTTP then we set our WebSocket protocol to be non-secure WebSocket (`ws`). Otherwise we use secure WebSocket (`wss`). We use that to then connect the WebSocket to the same location that we loaded the HTML from by referencing the `window.location.host` variable.

We can notify the user that chat is ready to go by listening to the `onopen` event and appending some text to the display using the `appendMsg` function we created earlier.

```js
// Adjust the webSocket protocol to what is being used for HTTP
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

// Display that we have opened the webSocket
socket.onopen = (event) => {
  appendMsg('system', 'websocket', 'connected');
};
```

When the WebSocket receives a message from a peer it displays it using the `appendMsg` function.

```js
socket.onmessage = async (event) => {
  const text = await event.data.text();
  const chat = JSON.parse(text);
  appendMsg('friend', chat.name, chat.msg);
};
```

And if the WebSocket closes for any reason we also display that to the user and disable the controls.

```js
socket.onclose = (event) => {
  appendMsg('system', 'websocket', 'disconnected');
  document.querySelector('#name-controls').disabled = true;
  document.querySelector('#chat-controls').disabled = true;
};
```

## Chat server

The chat server runs the web service, serves up the client code, manages the WebSocket connections, and forwards messages from the peers.

### Web service

The web service is established using a simple Express application. Note that we serve up our client HTML, CSS, and JavaScript files using the `static` middleware.

```js
const { WebSocketServer } = require('ws');
const express = require('express');
const app = express();

// Serve up our webSocket client HTML
app.use(express.static('./public'));

const port = process.argv.length > 2 ? process.argv[2] : 3000;
server = app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
```

### WebSocket server

When we create our WebSocket we do things a little differently than we did with the simple connection example. Instead of letting the WebSocketServer control both the HTTP connection and the upgrading to WebSocket, we want to use the HTTP connection that Express is providing and handle the upgrade to WebSocket ourselves. This is done by specifying the `noServer` option when creating the WebSocketServer and then handling the `upgrade` notification that occurs when a client requests the upgrade of the protocol from HTTP to WebSocket.

```js
// Create a websocket object
const wss = new WebSocketServer({ noServer: true });

// Handle the protocol upgrade from HTTP to WebSocket
server.on('upgrade', (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, function done(ws) {
    wss.emit('connection', ws, request);
  });
});
```

### Forwarding messages

With the WebSocket server we can use the `connection`, `message`, and `close` events to forward messages between peers. On connection we insert an object representing the connection into a list of all connections from the chat peers. Then when a message is received we loop through the peer connections and forward it on to everyone except the peer who initiated the request. Finally we remove a connection from the peer connection list when it is closed.

```js
// Keep track of all the connections so we can forward messages
let connections = [];

wss.on('connection', (ws) => {
  const connection = { id: connections.length + 1, alive: true, ws: ws };
  connections.push(connection);

  // Forward messages to everyone except the sender
  ws.on('message', function message(data) {
    connections.forEach((c) => {
      if (c.id !== connection.id) {
        c.ws.send(data);
      }
    });
  });

  // Remove the closed connection so we don't try to forward anymore
  ws.on('close', () => {
    connections.findIndex((o, i) => {
      if (o.id === connection.id) {
        connections.splice(i, 1);
        return true;
      }
    });
  });
});
```

### Keeping connections alive

A WebSocket connection will eventually close automatically if no data is sent across it. In order to prevent that from happening the WebSocket protocol supports the ability to send a `ping` message to see if the peer is still there and receive `pong` responses to indicate the affirmative.

To make this work, we use `setInterval` to send out a ping every 10 seconds to each of our peer connections and clean up any connections that did not respond to our previous ping.

```js
setInterval(() => {
  connections.forEach((c) => {
    // Kill any connection that didn't respond to the ping last time
    if (!c.alive) {
      c.ws.terminate();
    } else {
      c.alive = false;
      c.ws.ping();
    }
  });
}, 10000);
```

In our `connection` handler we listen for the `pong` response and mark the connection as alive.

```js
// Respond to pong messages by marking the connection alive
ws.on('pong', () => {
  connection.alive = true;
});
```

Any connection that did not respond will remain in the not alive state and get cleaned up on the next pass.

## Experiment

You can find the complete example described above in this [GitHub repository](https://github.com/webprogramming260/websocket-chat).

1. Clone the repository.
1. Run `npm install` from a console window in the example directory.
1. Open up the code in VS Code and review what it is doing.
1. Run and debug the example by pressing `F5`. You may need to select node.js as the debugger the first time you run.
1. Open multiple browser windows and point them to http://localhost:3000 and start chatting.
1. Use the browser's debugger to view the WebSocket communication.


# UI testing

[Test driven development](https://www.freecodecamp.org/news/test-driven-development-what-it-is-and-what-it-is-not-41fa6bca02a2/) (TDD) is a proven methodology for accelerating application creation, protecting against regression bugs, and demonstrating correctness. TDD for console based applications and server based code is fairly straight forward. Web application UI code is significantly more complex to test, and using automated tests to drive your UI development is even more difficult.

The problem is that a browser is required to execute UI code. That means you have to actually test the application in the browser. Additionally, every one of the major browsers behaves slightly differently, viewport size makes a big difference, all the code executes asynchronously, network disruptions are common, and then there is the human factor. A human will interact with the browser in very unexpected ways. Clicking where they shouldn't, clicking rapidly, randomly refreshing the browser, flushing cache, not flushing cache, leaving the application up for days on end, switching between tabs, opening the application multiple times, logging in on different tabs, logging out of one tab while still using the application on another tab, or ... on and on. And we haven't even talked about running all the different browsers on all of the possible devices.

Of course the alternative to not test your code doesn't work either. That only means that you have to manually test everything every time you make any change, or you let your users test everything. That is not a good recipe for long term success.

Fortunately this is a problem that many strong players have been working on for decades now, and the solutions, while not perfect, are getting better and better. We will look at two of these solutions. One is for executing automated tests in the browser, and the other is for testing on different browsers and devices.

## Automating the browser - Playwright

📖 **Deeper dive reading**: [Playwright and VS Code](https://playwright.dev/docs/getting-started-VSCode)

No one understands the difficulty of testing applications in a browser better than the companies that build web browsers. They have to test every possible use of HTML, CSS, and JavaScript that a user could think of. There is no way that manual testing is going to work and so early on they started putting hooks into their browsers that allowed them to be driven from automated external processes. [Selenium](https://www.selenium.dev/) was introduced in 2004 as the first popular tool to automate the browser. However, Selenium is generally considered to be flaky and slow. Flakiness means that a test fails in unpredictable, unreproducible ways. When you need thousands of tests to pass before you can deploy a new feature, even a little flakiness becomes a big problem. If those tests take hours to run then you have an even bigger problem.

The market now has lots of alternatives when considering which automated browser framework to use. [State of JS](https://stateofjs.com/) includes statistics on how popular these frameworks are. With frameworks coming and going all of the time, one telling statistic is the frameworks' ability to retain users.

![State of JS testing](javascriptStateOfJsTesting.jpg)

— Retention of browser based testing frameworks (**Source**: _2021.stateofjs.com_)

For the purposes of this instruction, we could pick any of the top contenders. However, we are going to pick a newcomer, [Playwright](https://playwright.dev/). Playwright has some major advantages. It is backed by Microsoft, it integrates really well with VS Code, and it runs as a Node.js process. It is also considered one of the least flaky of the testing frameworks.

As a demonstration of using Playwright, consider the following simplified HTML file containing a button that changes the paragraph text. The button calls a JavaScript function defined in a script element located in the HTML file.

```HTML
<body>
  <p id="welcome" data-testid="msg">Hello world</p>
  <button onclick="changeWelcome()">change welcome</button>
  <script>
    function changeWelcome() {
      const welcomeEl = document.querySelector('#welcome');
      welcomeEl.textContent = 'I feel welcomed';
    }
  </script>
</body>
```

First, you need to install Playwright. In your project directory, use NPM to download the Playwright packages, install the browser drivers, configure your project, and create a couple example test files.

```sh
npm init playwright@latest
```

Next, you want to install the Playwright extension for VS Code. Go to the extensions tab in VS Code and search for, and install, `Playwright Test for VSCode`.

You can now write your first Playwright test. Take the following and paste it over the `tests/example.spec.js` file that the Playwright install created.

```js
import { test, expect } from '@playwright/test';

test('testWelcomeButton', async ({ page }) => {
  // Navigate to the welcome page
  await page.goto('http://localhost:5500/');

  // Get the target element and make sure it is in the correct starting state
  const hello = page.getByTestId('msg');
  await expect(hello).toHaveText('Hello world');

  // Press the button
  const changeBtn = page.getByRole('button', { name: 'change welcome' });
  await changeBtn.click();

  // Expect that the change happened correctly
  await expect(hello).toHaveText('I feel not welcomed');
});
```

This test makes sure you can successfully navigate to the desired page, that the page contains the desired elements, that you can press the button and the text changes as expected.

Before you run the test, you actually need your application running for the test to execute against. You can do this by using the VS Code Live Server extension, or if you are testing a Node.js based service then run `npm run start`. You can actually add configuration to your tests so that your application is started when your tests run, but for now, just start up your application before you run the test.

To run the test in VS Code, select the `Test Explorer` tab. You should see your test listed in the explorer. Select the `example.spec.ts` test and press the play button. This will start the test, launch a browser, run the test code to interact with the browser, and display the result. In this case our test fails because it is expecting the resulting text to be `I feel not welcomed` when it actually displays `I feel welcomed`.

The following image should be similar to what you see. You can see the listing of tests on the left and the JavaScript based test in the editor window on the right. When a test fails, the editor window displays a clear description of what went wrong. You can even debug the tests as they execute just like you would any other Node.js based JavaScript execution.

![Playwright](javaScriptPlaywright.png)

You can fix the test by either changing `index.html` or `test/example.spec.js` so that the text matches. Once you have done that you can run the test again and the test explorer should display a green check box.

This is just a simple example of the powerful functionality of Playwright. You are encouraged to explore its functionality and even add some tests to your projects. Once you have gained some competency with Playwright you will find that you can write your code faster and feel more confident when changing things around.

## Testing various devices - BrowserStack

With the ability to run automated UI tests, we now turn our attention to testing on the multitude of various devices. There are several services out there that help with this. One of these is [BrowserStack](https://www.browserstack.com/). BrowserStack lets you pick from a long list of physical devices that you can run interactively, or use when driving automated tests with Selenium. The image below only shows a partial list of iPhone devices. BrowserStack also has devices for Android, Mac, and Windows.

![BrowserStack devices](javaScriptBrowserStackDevices.png)

When you launch a device it connects the browser interface to a physical device hosted in a data center. You can then use the device to reproduce user reported problems, or validate that your implementation works on that specific device. The following image shows the use of BrowserStack to experiment with an iPhone 14 running iOS 16.

![BrowserStack iPhone](javaScriptBrowserStackIPhone.png)

BrowserStack offers free trials if you would like to see how your startup application works on a specific device.

# Endpoint testing

Using test driven development (TDD) for testing service endpoints is a common industry practice. Testing services is usually easier than writing UI tests because it does not require a browser. However, it does still take effort to learn how to write tests that are effective and efficient. Making this a standard part of your development process will give you a significant advantage as you progress in your professional career.

As demonstrated by the following [State of JS](https://2021.stateofjs.com/en-US/libraries/testing/) survey, there are lots of good testing packages that work well with Express driven services. We are going to look at the current champion [Jest](https://jestjs.io/).

![State of JS Testing](webServicesStateOfJsEndpointTesting.jpg)

To get started with Jest we need a simple web service. In a console window, create a test directory, install Express, and open up VS Code.

```sh
mkdir testJest
cd testJest
npm init -y
npm install express
code .
```

Now create a file named `server.js` and use Express to create an application with two endpoints: one to get a store (getStore), and another to update a store.

**server.js**

```js
const express = require('express');
const app = express();

app.use(express.json());

// Endpoints
app.get('/store/:storeName', (req, res) => {
  res.send({ name: req.params.storeName });
});

app.put('/store/:storeName', (req, res) => {
  req.body.updated = true;
  res.send(req.body);
});

module.exports = app;
```

In order to allow Jest to start up the HTTP server when running tests, we initialize the application a little bit differently than we have in the past. Normally, we would have just started listening on the Express `app` object after we defined our endpoints. Instead we export the Express `app` object from our `server.js` file and then import the app object in the `index.js` file that is used to run our service.

**index.js**

```js
const app = require('./server');

const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

Breaking apart the definition of the service from the starting of the service allows us to start the service both when we run normally and also when using our testing framework.

![Jest endpoint requests](endpointTestingJest.jpg)

You can test that the service is working properly by running the service in the VS Code debugger and pressing F5 while viewing the `index.js` file. Then open a browser and navigate to `http://localhost:8080/store/provo`. Stop the debugging session once you have demonstrated that the service is working correctly.

To launch the service using Jest we create another file that has a suffix of `.test.js`. Any file with that suffix is considered a testing file and will automatically be discovered by Jest and examined for tests to run.

## A simple test

Before we write tests for our endpoints we will write a simple test that demonstrates how Jest works. A test is created by calling the Jest `test` function. Note that you don't need to include a `require` statement to import Jest functions into your code. Jest will automatically import itself when it discovers a test file.

Let's make our first test by creating a file named `store.test.js` and pasting in the following code.

**store.test.js**

```js
test('that equal values are equal', () => {
  expect(false).toBe(true);
});
```

The `test` function takes a description as the first parameter. The description is meant to be human readable. In this case it reads: "test that equal values are equal". The second parameter is the function to call. Our function just calls the Jest `expect` function and chains it to the `toBe` function. You can read this as "expect false to be true", which of course is not true, but we want to see our test fail the first time we run it. We will fix this later so that we can show what happens when a test succeeds.

In order to run the test we need to install the Jest package using NPM. From the console install the package. The `-D` parameter tells NPM to install Jest as a development package. That keeps it from being included when we do production release builds.

```sh
npm install jest -D
```

Now, replace the `scripts` section of the `package.json` file with a new command that will run our tests with Jest.

```json
"scripts": {
  "test": "jest"
},
```

With that in place we can run the `test` command and our test will execute. Notice that Jest shows exactly where the test failed and what expected values were not received.

```sh
➜ npm run test

 FAIL  ./store.test.js
  ✕ that unequal values are not equal (1 ms)

  ● that unequal values are not equal

    expect(received).toBe(expected) // Object.is equality

    Expected: true
    Received: false

      3 |
      4 | test('that unequal values are not equal', () => {
    > 5 |   expect(false).toBe(true);
        |                 ^
      6 | });
      7 |
      8 | // describe('endpoints', () => {

      at Object.toBe (store.test.js:5:17)

Tests:       1 failed, 1 total
```

We can then fix our test by rewriting it so that the expected value matches the provided value.

**store.test.js**

```js
test('that equal values are equal', () => {
  expect(true).toBe(true);
});
```

This time when we run the test it passes.

```sh
➜  npm run test

 PASS  ./store.test.js
  ✓ that equal values are equal (1 ms)

Tests:       1 passed, 1 total
```

Note that this example didn't actually test any of our code, but it does demonstrate how easy it is to write tests. A real test function would call code in your program. Let's do this by actually making calls to our endpoints.

## Testing endpoints

To test our endpoints we need another package so that we can make HTTP requests without having to actually send them over the network. This is done with the NPM package called `supertest`. Go ahead and install this now.

```sh
npm install supertest -D
```

We can then alter `store.test.js` to import our Express service and also the `request` function from `supertest` that we will use to make HTTP requests.

To make an HTTP request you pass the Express `app` to the `supertest` `request` function and then chain on the HTTP verb function that you want to call, along with the endpoint path. You can then chain on as many `expect` functions as you would like. In the following example we will expect an HTTP status code of 200 (OK), and that the body of the response contains the object that we expect the endpoint to return.

If something goes wrong, the `end` function will contain an error and we pass the error along to the `done` function. Otherwise we just call `done` without the error.

**store.test.js**

```js
const request = require('supertest');
const app = require('./server');

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});
```

When we run this test we see that it passes without error.

```sh
➜  npm run test

 PASS  ./store.test.js
  ✓ getStore returns the desired store (16 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.237 s, estimated 1 s
```

You can change the test to expect a status code of 500 (Server Error) if you want to see the test fail. You can also change the endpoint code to return a 201 status code (Created) and also see the test fail.

Now we can add a test for the updateStore endpoint. To do this we can copy the getStore endpoint, change the description, change the HTTP function verb to `put`, and send the body of the `put` request using the chained `send` function.

```js
const request = require('supertest');
const app = require('./server');

test('updateStore saves the correct values', (done) => {
  request(app)
    .put('/store/provo')
    .send({ items: ['fish', 'milk'] })
    .expect(200)
    .expect({ items: ['fish', 'milk'], updated: true })
    .end((err) => (err ? done(err) : done()));
});

test('getStore returns the desired store', (done) => {
  request(app)
    .get('/store/provo')
    .expect(200)
    .expect({ name: 'provo' })
    .end((err) => (err ? done(err) : done()));
});
```

The great thing about test driven development (TDD) is that you can actually write your tests first and then write your code based upon the design represented by the tests. When your tests pass you know your code is complete. Additionally, when you make later modifications to your code you can simply run your tests again. If they pass then you can be confident that your code is still working without having to manually test everything yourself. With systems that have hundreds of endpoints and hundreds of thousands of lines of code, TDD becomes an indispensable part of the development process.

# Security overview

📖 **Deeper dive reading**:

- [Database of publicized software vulnerabilities](https://cve.mitre.org/)
- [SQL Injection](https://portswigger.net/web-security/sql-injection)

The internet allows us to socially connect, conduct financial transactions, and provide access to sensitive individual, corporate, and government data. It is also accessible from every corner of the planet. This positions the internet as a tool that can make the world a much better place, but it also makes a very attractive target for those who would seek to do harm. Preventing that potential for harm needs to be in the forefront of you mind whenever you create or use a web application.

You can see bad actors at work on your very own server by using `ssh` to open a console to your server and reviewing the authorization log. The authorization log captures all of the attempts to create a session on your server.

```sh
sudo less +G /var/log/auth.log
```

The last entry in the log will be from your connection to the server.

```sh
Feb 23 16:26:54 sshd[319071]: pam_unix(sshd:session): session opened for user ubuntu(uid=1000) by (uid=0)
Feb 23 16:26:54 systemd-logind[480]: New session 1350 of user ubuntu.
Feb 23 16:26:54 systemd: pam_unix(systemd-user:session): session opened for user ubuntu(uid=1000) by (uid=0)
```

However, you will see lots of other attempts with specific user names associated with common exploits. These all should be failing to connect, but if your server is not configured properly then an unauthorized access is possible. The sample of attempts below show the IP addresses of the attacker, as well as the user name that they used. Using the `whois` utility we can see that these attacks are originating from servers at DLive.kr in Korea, and DigitalOcean.com in the USA.

```sh
Feb 19 02:34:28 sshd[298185]: Invalid user developer from 27.1.253.142
Feb 19 02:37:12 sshd[298193]: Invalid user minecraft1 from 27.1.253.142
Feb 23 14:26:19 sshd[318868]: Invalid user siteadmin 174.138.72.191
Feb 23 14:22:18 sshd[318845]: Invalid user tester 174.138.72.191
```

As an experiment, one of our TAs created a test server with a user named `admin` with password `password`. Within 15 minutes, an attacker had logged in, bypassed all the restrictions that were in place, and started using the server to attack other servers on the internet.

Even if you don't think your application is valuable enough to require security, you need to consider that you might be creating a security problem for your users on other systems. For example, think about a simple game application where a user is required to provides a username and password in order to play the game. If the application's data is then compromised, then an attacker could use the password, used for the game application, to gain access to other websites where the user might have used the same password. For example, their social networking sites, work account, or financial institution.

## Security terminology

Web application security, sometimes called AppSec, is a subset of cybersecurity that specifically focuses on preventing security vulnerabilities within end-user applications. Web application security involves securing the frontend code running on the user's device and also the backend code running on the web server.

Here is a list of common phrases used by the security community that you should be familiar with.

- **Hacking** - The process of making a system do something it's not supposed to do.
- **Exploit** - Code or input that takes advantage of a programming or configuration flaw.
- **Attack Vector** - The method that a hacker employs to penetrate and exploit a system.
- **Attack Surface** - The exposed parts of a system that an attacker can access. For example, open ports (22, 443, 80), service endpoints, or user accounts.
- **Attack Payload** - The actual code, or data, that a hacker delivers to a system in order to exploit it.
- **Input sanitization** - "Cleaning" any input of potentially malicious data.
- **Black box testing** - Testing an application without knowledge of the internals of the application.
- **White box testing** - Testing an application by **with** knowledge of the source code and internal infrastructure.
- **Penetration Testing** - Attempting to gain access to, or exploit, a system in ways that are not anticipated by the developers.
- **Mitigation** - The action taken to remove, or reduce, a threat.

## Motivation for attackers

The following lists some common motivations at drives a system attack.

- **Disruption** - By overloading a system, encrypting essential data, or deleting critical infrastructure, an attacker can destroy normal business operations. This may be an attempt at extortion, or simply be an attempt to punish a business that that attacker does not agree with.
- **Data exfiltration** - By privately extracting, or publicly exposing, a system's data, an attacker can embarrass the company, exploit insider information, sell the information to competitors, or leverage the information for additional attacks.
- **Resource consumption** - By taking control of a company's computing resources an attacker can use it for other purposes such as mining cryptocurrency, gathering customer information, or attacking other systems.

## Examples of security failures

Security should always be a primary objective of any application. Building a web application that looks good and performs well, is a lot less important than building an application that is secure.

Here are a few examples where companies failed to properly prevent attacks to their systems.

- [$100 million dollars stolen through insider trading using SQL injection vulnerability](https://www.theverge.com/2018/8/22/17716622/sec-business-wire-hack-stolen-press-release-fraud-ukraine)
- [Log4Shell remote code execution vulnerability, 93% of cloud vulnerable at time of discovery, dubbed "the most severe vulnerability ever"](https://en.wikipedia.org/wiki/Log4Shell)
- [Russian hackers install backdoor on 18,000 government and Fortune 500 computers](https://www.npr.org/2021/04/16/985439655/a-worst-nightmare-cyberattack-the-untold-story-of-the-solarwinds-hack)
- [Hackers Hold Computers of 23 Texas Towns For Ransom](https://www.usnews.com/news/national-news/articles/2019-08-20/hackers-hold-computers-of-23-texas-towns-for-ransom)

## Common hacking techniques

There are a few common exploitation techniques that you should be aware of. These include the following.

- **Injection**: When an application interacts with a database on the backend, a programmer will often take user input and concatenate it directly into a search query. This allows a hacker can use a specially crafted query to make the database reveal hidden information or even delete the database.

- **Cross-Site Scripting (XSS)**: A category of attacks where an attacker can make malicious code execute on a different user's browser. If successful, an attacker can turn a website that a user trusts, into one that can steal passwords and hijack a user's account.

- **Denial of Service**: This includes any attack where the main goal is to render any service inaccessible. This can be done by deleting a database using an SQL injection, by sending unexpected data to a service endpoint that causes the program to crash, or by simply making more requests than a server can handle.

- **Credential Stuffing**: People have a tendency to reuse passwords or variations of passwords on different websites. If a hacker has a user's credentials from a previous website attack, then there is a good chance that they can successfully use those credentials on a different website. A hacker can also try to brute force attack a system by trying every possible combination of password.

- **Social engineering** - Appealing to a human's desire to help, in order to gain unauthorized access or information.

## What can I do about it?

Taking the time to learn the techniques a hacker uses to attack a system is the first step in preventing them from exploiting your systems. From there, develop a security mindset, where you always assume any attack surface will be used against you. Make security a consistent part of your application design and feature discussions. Here is a list of common security practices you should include in your applications.

- **Sanitize input data** - Always assume that any data you receive from outside your system will be used to exploit your system. Consider if the input data can be turned into an executable expression, or can overload computing, bandwidth, or storage resources.
- **Logging** - It is not possible to think of every way that your system can be exploited, but you can create an immutable log of requests that will expose when a system is being exploited. You can then trigger alerts, and periodically review the logs for unexpected activity.
- **Traps** - Create what appears to be valuable information and then trigger alarms when the data is accessed.
- **Educate** - Teach yourself, your users, and everyone you work with, to be security minded. Anyone who has access to your system should understand how to prevent physical, social, and software attacks.
- **Reduce attack surfaces** - Do not open access anymore than is necessary to properly provide your application. This includes what network ports are open, what account privileges are allowed, where you can access the system from, and what endpoints are available.
- **Layered security** - Do not assume that one safeguard is enough. Create multiple layers of security that each take different approaches. For example, secure your physical environment, secure your network, secure your server, secure your public network traffic, secure your private network traffic, encrypt your storage, separate your production systems from your development systems, put your payment information in a separate environment from your application environment. Do not allow data from one layer to move to other layers. For example, do not allow an employee to take data out of the production system.
- **Least required access policy** - Do not give any one user all the credentials necessary to control the entire system. Only give a user what access they need to do the work they are required to do.
- **Safeguard credentials** - Do not store credentials in accessible locations such as a public GitHub repository or a sticky note taped to a monitor. Automatically rotate credentials in order to limit the impact of an exposure. Only award credentials that are necessary to do a specific task.
- **Public review** - Do not rely on obscurity to keep your system safe. Assume instead that an attacker knows everything about your system and then make it difficult for anyone to exploit the system. If you can attack your system, then a hacker will be able to also. By soliciting public review and the work of external penetration testers, you will be able to discover and remove potential exploits.

# OWASP

![owasp](owaspLogo.png)

📖 **Deeper dive reading**: [OWASP 2021](https://owasp.org/www-project-top-ten/)

The Open Web Application Security Project (OWASP) is a non-profit research entity that manages the _Top Ten_ list of the most important web application security risks. Understanding, and periodically reviewing, this list will help to keep your web applications secure.

The following is a discussion of each of the entries in the top ten list, along with examples, and suggested mitigations.

## A01 Broken Access Control

📖 **Deeper dive reading**: [snyk Learn broken access control](https://learn.snyk.io/lessons/broken-access-control/javascript/)

Broken access control occurs when the application doesn't properly enforce permissions on users. This could mean that a non-admin user can do things that only an admin should be able to do, or admin accounts are improperly secured. While browser application code can restrict access by disabling UI for navigating to sensitive functionality, the ultimate responsibility for enforcing access control rests upon the application service.

As an example of broken access control, consider an application where the UI only provides a navigation to the administrator application settings if the user is an administrator. However, the attacker can simply change the URL to point to the application settings URL and gain access. Additionally, unless the service endpoints reject requests to obtain, and update, the application settings, any restrictions that the UI provides are meaningless.

Mitigations include:

- Strict access enforcement at the service level
- Clearly defined roles and elevation paths

## A02 Cryptographic Failures

Cryptographic failures occur when sensitive data is accessible either without encryption, with weak encryption protocols, or when cryptographic protections are ignored.

Sending any unencrypted data over a public network connection allows an attacker to capture the data. Even private, internal, network connections, or data that is store without encryption, is susceptibly to exploitation once an attacker gains access to the internal system.

Examples of ineffective cryptographic methods include hashing algorithms like MD5 and SHA-1 that are trivial to crack with modern hardware and tools.

Another cryptographic failure happens when applications do not validate the provided web certificate when establishing a network connection. This is a case of falsely assuming that if the protocol is secure then the entity represented by the protocol is acceptable.

Mitigations include:

- Use strong encryption for all data. This includes external, internal, in transit, and at rest data.
- Updating encryption algorithms as older algorithms become compromised.
- Properly using cryptographic safeguards.

## A03 Injection

📖 **Deeper dive reading**: [Snyk Learn SQL injection](https://learn.snyk.io/lessons/sql-injection/javascript/)

Injection exploits occur when an attacker is allowed to supply data that is then injected into a context where it violates the expected use of the user input. For example, consider an input field that is only expected to contain a user's password. Instead the attacker supplies a SQL database command in the password input.

**Supplied password**

```js
`p@ssword!'; DROP TABLE db; --`;
```

The application then uses a template SQL query to validate the user's password.

**Template query**

```js
`SELECT user FROM db WHERE password='${password}' LIMIT 1`;
```

When the supplied input is injected into the template an unintended query results. Notice that this query will delete the entire database table.

**Resulting query**

```sql
SELECT user FROM db WHERE password='p@ssword!'; DROP TABLE db; -- ` LIMIT 1
```

Mitigations include:

- Sanitizing input
- Use database prepared statements
- Restricting execution rights
- Limit output

## A04 Insecure Design

📖 **Deeper dive reading**: [Snyk Learn insecure design](https://learn.snyk.io/lessons/insecure-design/javascript/)

Insecure design broadly refers to architectural flaws that are unique for individual systems, rather than implementation errors. This happens when the application team doesn't focus on security when designing a system, or doesn't continuously reevaluate the application's security.

Insecure design exploits are based upon unexpected uses of the business logic that controls the functionality of the application. For example, if the application allows for trial accounts to be easily created, then an attacker could create a denial of service attack by creating millions of accounts and utilizing the maximum allowable usage.

Mitigations include:

- Integration testing
- Strict access control
- Security education
- Security design pattern usages
- Scenario reviews

## A05 Security Misconfiguration

Security misconfiguration attacks exploit the configuration of an application. Some examples include using default passwords, not updating software, exposing configuration settings, or enabling unsecured remote configuration.

For example, some third party utilities, such as a logging system, will expose a public administration interface that has a default user name and password. Unless that configuration is changed, an attacker will be able to access all of the critical logging information for your application.

Mitigations include:

- Configuration reviews
- Setting defaults to disable all access
- Automated configuration audits
- Requiring multiple layers of access for remote configuration

## A06 Vulnerable and Outdated Components

📖 **Deeper dive reading**: [Snyk Learn vulnerable and outdate components](https://learn.snyk.io/lessons/vulnerable-and-outdated-components/javascript/)

The longer an application has been deployed, the more likely it is that the attack surface, and corresponding exploits, of the application will increase. This is primarily due to the cost of maintaining an application and keeping it up to date in order to mitigate newly discovered exploits.

Outdated components often accumulate as third party packages are used by the application. Over time the packages are updated in order to address security concerns, or somethings the packages stop being supported. When this happens your application becomes vulnerable. Consider what happens when a request to install NPM packages displays the following warning:

```sh
➜  npm install

up to date, audited 1421 packages in 3s

7 high severity vulnerabilities

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

The application developer is warned that the components are vulnerable, but when faced choice of taking the time to update packages, and potentially break the application, or meeting deliverable deadlines, the developer is tempted to ignore the warning and continue without addressing the possible problem.

Mitigations include:

- Keeping a manifest of your software stack including versions
- Reviewing security bulletins
- Regularly updating software
- Required components to be up to date
- Replacing unsupported software

## A07 Identification and Authentication Failures

Identification and authentication failures include any situation where a user's identity can be impersonated or assumed by an attacker. For example, if an attacker can repeatedly attempt to guess a user's password, then eventually they will be successful. Additionally, if passwords are exposed outside of the application, or are stored inside the application, with weak cryptographic protection, then they are susceptible to attack.

Another example of an identification failure would be a weak password recovery process that doesn't properly verify the user. Common practices such as asking for well known security questions (e.g. mother's maiden name) from a user fall into this category.

Mitigations include:

- Rate limiting requests
- Properly managing credentials
- Multifactor authentication
- Authentication recovery

## A08 Software and Data Integrity Failure

Software and data integrity failures represent attacks that allow external software, processes, or data to compromise your application. Modern web applications extensively use open source and commercially produced packages to provide key functionality. Using these packages without conducting a security audit, gives them an unknown amount of control over your application. Likewise, using a third party processing workflow, or blindly accessing external data, opens you up to attacks.

Consider the use of a third party continuous delivery (CD) pipeline for deploying your application to a cloud provider. If the CD provider is penetrated by an attacker then they also gain access to your production cloud environment.

Another example is the use of an NPM package that is controlled by an attacker. Once the package has gained general acceptance, the attacker can subtly change the package to capture and deliver sensitive information.

Mitigations include:

- Only using trusted package repositories
- Using your own private vetted repository
- Audit all updates to third party packages and data sources

## A09 Security Logging and Monitoring Failures

📖 **Deeper dive reading**: [Snyk Learn logging vulnerabilities](https://learn.snyk.io/lessons/logging-vulnerabilities/javascript/)

Proper system monitoring, logging, and alerting is critical to increasing security. One of the first things an attacker will do after penetrating your application is delete or alter any logs that might reveal the attacker's presence. A secure system will store logs that are accessible, immutable, and contain adequate information to detect an intrusion, and conduct post-mortem analysis.

An attacker might also try to create a smoke screen in the monitoring system in order to hide a true attack. This might consist of a barrage of periodic ineffective attacks that hide the insertion of a slightly different effective one.

Mitigations include:

- Real time log processing
- Automated alerts for metric threshold violations
- Periodic log reviews
- Visual dashboards for key indicators

## A10 Server Side Request Forgery (SSRF)

📖 **Deeper dive reading**: [Snyk Learn SSRF](https://learn.snyk.io/lessons/ssrf-server-side-request-forgery/javascript/)

This category of attack causes the application service to make unintended internal requests, that utilized the service's elevated privileges, in order to expose internal data or services.

For example, if your service exposed an endpoint that let a user retrieve an external profile image based upon a supplied URL, an attacker could change the URL to point to a location that is normally only available to the service internally.

The following command would theoretically return the internal AWS service metadata that includes the administrative access token.

```sh
curl https://yourdomain.click/user/image?imgUrl=http://169.254.169.254/latest/meta-data/iam/security-credentials/Admin-Role
```

Mitigations include:

- Sanitizing returned data
- Not returning data
- Whitelisting accessible domains
- Rejecting HTTP redirects

# Security practice

You will not really internalize how security exploits work until you get some practice with them. One way to do this is to use a practice security web applications. There are lots of practice applications but we will discuss [Juice Shop](https://soundcloud.com/braimee/owasp-juice-shop-jingle).

## Juice Shop

![Juice Shop](JuiceShopLogo.png)

OWASP provides a security training application called [Juice Shop](https://github.com/juice-shop/juice-shop#-owasp-juice-shop). To get started you need to download the code for Juice Shop and run it from your own computer. This allows you have complete control over Juice Shop and play Juice Shop whenever you have a spare moment, even when you are offline.

### Installing Juice Shop

1. Clone the Juice Shop repository to your development environment and install the required NPM packages.

   ```sh
   git clone https://github.com/juice-shop/juice-shop.git --depth 1

   cd juice-shop

   npm install
   ```

1. Run the application. This should start Juice Shop on port 3000.
   ```sh
   npm start
   ```
1. You can now open your browser to `localhost:3000`. This will display the Juice Shop application.

   ![JuiceShop Home](juiceShopHome.jpg)

### Getting started

The idea with Juice Shop is that you are suppose to learn by digging in and experimenting. For a person that is new to security hacking this can be a bit daunting, and so here is a hint to get you started.

You can solve the first hacking challenge by discovering the hidden score board view that shows you all of the possible challenges to solve, and exposes the available tutorials. You can discover where the score board is by examining the contents of the `main.js` file in Dev Tools and seeing that it references a path named `score-board`. So if you change the url to be `localhost:3000/#/score-board` you will see the following view.

![JuiceShop Home](juiceShopScoreBoard.jpg)

You can then find a challenge that looks interesting and try to solve it. Challenges that have a tutorial icon will step you through the challenge and explain how it works. You can then use that knowledge to solve challenges that don't have a tutorial.

To begin, it is suggested that you do the `DOM XSS` tutorial. This will show you how to do a XSS attack using the application search input.

# TypeScript

📖 **Deeper dive reading**: [Typescript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

TypeScript adds static type checking to JavaScript. This provides type checking while you are writing the code to prevent mistakes like using a string when a number is expected. Consider the following simplistic JavaScript code example.

```js
function increment(value) {
  return value + 1;
}

let count = 'one';
console.log(increment(count));
```

When this code executes the console will log `one1` because the count variable was accidentally initialized with a string instead of a number.

With TypeScript you explicitly define the types, and as the JavaScript is transpiled (with something like Babel) an error will be generate long before the code is seen by a user. To provide type safety for our increment function, it would look like this:

```ts
function increment(value: number) {
  return value + 1;
}

let count: number = 'one';
console.log(increment(count));
```

With TypeScript enabled, VS Code will analyze the code and give you an error about the invalid type conversion.

![TypeScript bad assignment](typescriptBadAssignment.jpg)

In addition to defining types for function parameters, you can define the types of object properties. For example, when defining the state for a React class style component, you can specify the types of all the state and property values.

```ts
export class About extends React.Component {
  state: {
    imageUrl: string;
    quote: string;
    price: number;
  };

  constructor(props: { price: number }) {
    super(props);

    this.state = {
      imageUrl: '',
      quote: 'loading...',
      price: props.price,
    };
  }
}
```

You can likewise specify the type of a React function style component's properties with an inline object definition.

```ts
function Clicker(props: { initialCount: number }) {
  const [count, updateCount] = React.useState(props.initialCount);

  return <div onClick={() => updateCount(1 + count)}>Click count: {count}</div>;
}
```

## Interfaces

Because it is so common to define object property types, TypeScript introduced the use of the `interface` keyword to define a collection of parameters and types that an object must contain in order to satisfy the interface type. For example, a Book interface might look like the following.

```ts
interface Book {
  title: string;
  id: number;
}
```

You can then create an object and pass it to a function that requires the interface.

```ts
function catalog(book: Book) {
  console.log(`Cataloging ${book.title} with ID ${book.id}`);
}

const myBook = { title: 'Essentials', id: 2938 };
catalog(myBook);
```

## Beyond type checking

TypeScript also provides other benefits, such as warning you of potential uses of an uninitialized variable. Here is an example of when a function may return null, but the code fails to check for this case.

![TypeScript uninitialized](typescriptUninitialized.jpg)

You can correct this problem with a simple `if` block.

```ts
const containerEl = document.querySelector<HTMLElement>('#picture');
if (containerEl) {
  const width = containerEl.offsetWidth;
}
```

Notice that in the above example, the return type is coerced for the `querySelector` call. This is required because the assumed return type for that function is the base class `Element`, but we know that our query will return the subclass `HTMLElement` and so we need to cast that to the subclass with the `querySelector<HTMLElement>()` syntax.

### Unions

TypeScript introduces the ability to define the possible values for a new type. This is useful for doing things like defining an enumerable.

With plain JavaScript you might create an enumerable with a class.

```js
export class AuthState {
  static Unknown = new AuthState('unknown');
  static Authenticated = new AuthState('authenticated');
  static Unauthenticated = new AuthState('unauthenticated');

  constructor(name) {
    this.name = name;
  }
}
```

With TypeScript you can define this by declaring a new type and defining what its possible values are.

```ts
type AuthState = 'unknown' | 'authenticated' | 'unauthenticated';

let auth: AuthState = 'authenticated';
```

You can also use unions to specify all of the possible types that a variable can represent.

```ts
function square(n: number | string) {
  if (typeof n === 'string') {
    console.log(`{$n}^2`);
  } else {
    console.log(n * n);
  }
}
```

## Using TypeScript

If you would like to experiment with TypeScript you can use [CodePen](https://codepen.io), or the official [TypeScript playground](https://www.typescriptlang.org/play). The TypeScript playground has the advantage of showing you inline errors and what the resulting JavaScript will be.

![typescript playground](typescriptPlayground.jpg)

To use TypeScript in your web application you can create your project using `vite`. Vite knows how to use typescript without any additional configuration.

```sh
npm create vite@latest
✔ Project name: … viteDemo
✔ Select a framework: › React
? Select a variant: › - Use arrow-keys. Return to submit.
❯   TypeScript
    TypeScript + SWC
    JavaScript
    JavaScript + SWC
    Remix ↗
```

If you want to convert an existing application, then install the NPM `typescript` package to your development dependencies.

```sh
npm install --save-dev typescript
```

This will only include typescript package when you are developing and will not distribute it with a production bundle.

Once you have TypeScript installed for your project, you then configure how you want TypeScript to interact with your code by creating a `tsconfig.json` file.

If your project structure is configured to have your source code in a directory named `src`, and you want to output to a directory named `build` then you would use the following TS configuration file.

```js
{
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "build",
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": [
    "./src/**/*"
  ]
}
```

To learn what all of the tsconfig.json options do, refer to [What is a tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

# UX design

Properly considering the user experience (UX) of your application will make all the difference in your success. Focusing first on technology, cost, or revenue tends to lead to an unsatisfying user experience. Instead you want to consider why someone is using your application, how they want to interact, how visually appealing it is, and how easy it is to get something done.

## Design as a story

It is often useful to think of user experience as a story. Consider the background plot, the user entering the stage, interacting with other actors, and getting the audience to applaud. At first this may sound a bit strange, but applications are not used in a vacuum. There is always a reason someone is using your application. If you can clearly define that background plot, then the experience will better match the user's expectation. Likewise, if you know what results in a satisfied audience, then you build the application experience around delivering that result.

Consider the tourism application for the city of Philadelphia. They know a user visits the site because they want to have an experience in Philadelphia. The application immediately provides a time relevant proposal for that experience. All the navigation options for having a successful experience (events, food, deals, and trip planning) are immediately accessible. Just looking at the initial imagery conveys the excitement of engaging in the application.

![Design story](designStory.jpg)

> Source: [visitphilly](https://www.visitphilly.com/)

## Simplicity

Google broke all the rules for web application design when they released their homepage in 1998.

![Simplicity](designSimplicityGoogle.jpg)

> Source: Google.com 2022

Previous to that, it was common for app designers to pile everything they could into the initial view of the application. This includes multiple advertisements, navigation options, lots of hyperlinks, and color choices. Here is an example from a competitor around the same time period.

![Simplicity](designSimplicityLycos.jpg)

> Source: Lycos.com 1999

The key point of this example is that simplicity attracts users' attention and engages them in the application experience. Building off of Google's positive reaction, other major applications immediately followed their example. Here is the initial experience when visiting facebook's application for the first time. Notice that it simply states the purpose of the application and invites the user to create an account.

![Simplicity](designSimplicityFB.jpg)

> Source: facebook.com

Simplicity doesn't require a blank page. Simplicity can also be visually stimulating with beautiful imagery and simple navigation options.

![Simplicity](designSimplicityNomadic.jpg)

> Source: [Nomadic Tribe](https://nomadictribe.com/)

You can also include significant amounts of content. You just need to keep things focused on a single purpose, for example, creating an account, viewing images, or beginning your travel experience. Below is the Pinterest application landing page. Even though the viewport is cluttered with images, they are all working towards the same purpose of demonstrating the value of the application.

![Simplicity](designSimplicityPinterest.jpg)

## Consistency

There is a tension that exists with web applications between being consistent with how other applications work and being unique so that your experience stands out. What you want to avoid is being so different that a user has to think hard in order to use your application. This is usually avoided by using the standard conventions that a user expects to find on a web application. The following image describes the `standard layout` and navigation controls of an application.

![Holy grail](designConsistencyHolyGrail.jpg)

What a `standard layout` is defined to be will migrate over time as new trends in application fashion seek to make things look fresh. However, if you follow current trends, your users are more likely to engage in your application.

One easy way to build an application that uses current design trends is to use a web framework that provides standard layouts, colors, and iconography. Here is an example of a template application built using a web framework with just a few minutes of work.

![Frameworks](designConsistencyFramework.jpg)

## Navigation

A user should never get lost while using your application. To help orient your user you want to carefully design the flow of the application and provide the proper navigational controls.

| Navigation Controls | Description                                           |
| ------------------- | ----------------------------------------------------- |
| App controls        | User settings, payment, and help controls             |
| Device controls     | Device specific controls such as back, next, and home |
| Breadcrumb          | A path of the user's walk through the application     |
| Common actions      | Direct links to locations based on the current view   |

### Application map

The first step in building your application should be to design an application map that has all the views that you will present to the user. This helps clarify the functional pieces of the application and their relationship to each other. For example, if you were building a music player you might start with a landing page that displays some marketing information and allows the user to create an account or log in. If the user is already logged in, then they start with a dashboard that shows recent or suggested songs. From there they can either search the music catalog, navigate to a collection of songs based on a playlist, album, or artist, or go to an individual song.

![Application map](designSitemap.jpg)

If your application map starts looking like a governmental bureaucracy then you probably want to reconsider the interrelation of functionality. A convoluted application map is a strong indicator that the user experience with be likewise convoluted.

### Device controls

With a concise application map in place, you can design navigational controls that allow the user to successfully use the application. To begin with, you want to make sure the navigational controls provided by the device are completely supported. When your application is hosted in a browser the previous and next buttons should take the user through the stack of visited views. If your application is hosted on a mobile device then the conventions of that device should work properly. For example, on an Android device swiping left and right should navigate the application views backward or forwards.

### Breadcrumb

You always want to indicate where the user is, where they came from, and where they can go. You can do this with a `breadcrumb` control that lists the path the user took to get to where they are.

`Dashboard > Beatles > Abbey Road > Come Together`

A breadcrumb quickly orients the user and also allows them to jump up the navigational path.

### Common actions

You also want to anticipate where a user would commonly want to go based upon the view that they are in. For example, if they are playing a song by one artist, it is common that they will want to view related artists. Therefore you want to provide a navigational link that will take them to a search view with a prepopulated query for related artists.

Commonly accessed views should always be accessible from a standard location. For example, the user settings should always be on the top right, and the breadcrumb should always be on the top left. (Those locations get switched if using a Right-To-Left language.)

You want to partition a large application into functional areas and place links for each area in the navigation bar at the top of the application. For example, if we added the ability to create music to our music application, you would want links that switched between listening to and creating music.

## Colors

One of the first things you should consider as you design your application is the color scheme that you will employ. This usually involves picking a a primary, secondary, and focus color.

![Color Palette](designColorPalette.jpg)

> Source: paletton.com

There are lots of tools out there that help you create a color scheme. These will let you chose monochromatic, adjacent, or triadic color schemes. You can then spin and adjust a color wheel until you get what you are looking for. With your scheme selected you can export the colors directly to CSS rulesets.

Some free tools you should explore include [Paletton](https://paletton.com/) and [Adobe](https://color.adobe.com/create/color-wheel).

![Color Tools](designColorTools.jpg)

> Source: paletton.com

With your core colors selected, you can use different shades of the colors to reduce the starkness of the limited number of colors without turning your application into a rainbow.

![Color Application](designColorApplication.jpg)

Just make sure you stick with your color scheme and even consider it when selecting font colors and images.

## Typography

A great font will make your application easy on your user's eyes and increase their attention span. Since fonts have been around since the Gutenberg Press, there is some serious history to them. The following shows the different attributes of a font.

![Typography anatomy](designTypographyAnatomy.jpg)

> Source: material.io

You can classify fonts into the following groups.

| Font Class  | Example                                        | Meaning                             |
| ----------- | ---------------------------------------------- | ----------------------------------- |
| Sans Serif  | ![Font san serif](designFontSanSerif.jpg)      | Only major strokes                  |
| Serif       | ![Font serif](designFontSerif.jpg)             | Minor strokes off the major strokes |
| Monospace   | ![Font monospace](designFontMonoSpace.jpg)     | All letters have the same size      |
| Handwriting | ![Font handwriting](designFontHandwriting.jpg) | Cursive strokes                     |

> Source: material.io

When picking fonts you usually want to restrict the number of fonts to three or less. You also want to use them consistently. For example, it is common to use a Sans Serif font for buttons, navigation links, and body text. Serif fonts are used for paragraph headings. Monospaced fonts are for coding examples or text that needs alignment.

If you are looking for royalty free fonts that you can use in your application, you should check out [Google's open collection](https://fonts.google.com/about) of fonts.

![Google fonts](designFontGoogle.jpg)

## Iconography

Because users will recognize standard icons, you can decrease the learning curve for your application if you use standard web icons to identify common functionality. For example, most users will immediately identify the following three icons as the menu, sharing, and close actions.

![Icon example](designIconExamples.jpg)

Icons not only exploit user recognition, but they also save limited display space, and provide a visually pleasing alternative to text. The important thing is that you pick a set that includes standard icons and that you use them for their intended purpose. Icons become an anti-pattern when they are used to represent something that is contrary to their common usage.

![Icon Google](designIconGoogle.jpg)

> Source: material.io

There are lots of standard icon packages that you can choose from. This includes packages such as [Font Awesome](https://fontawesome.com/), [Bootstrap Icons](https://icons.getbootstrap.com/), [Material Icons](http://google.github.io/material-design-icons/), [Flat Color Icons](https://github.com/icons8/flat-color-icons), and [Ant Design Icons](https://github.com/ant-design/ant-design-icons)

## Text

You want to be consistent in the size of the text that you use as well as the number of characters displayed on a line. Commonly there are five different catagories of text sizes used by an application. These include the following.

| Purpose        | Size     |
| -------------- | -------- |
| Page title     | 96 px    |
| Titles         | 48-20 px |
| Text           | 16 px    |
| Secondary text | 14 px    |
| Input          | 16 px    |

These sizes are just suggestions but they serve as a good place to start. If you are using an application framework then they will have default text sizes defined. The important thing is that you are consistent with the sizing. Titles should not be one size for a particular view and a different size on another one. Inconsistency confuses the user and makes the application feel haphazardly designed.

### Limiting line length

Limiting the number of characters displayed on a line makes it easier to read paragraphs of text. The browser will automatically wrap text based on the viewport width, but having a line spread across a 4K monitor that is hundreds of characters long will make your application look clunky and drive the user crazy as they try and find the start of the next line in a long paragraph.

Instead you want to specify a maximum width for your paragraphs. Usually a width of 60 to 80 characters is optimal. You can set this with the `max-width` property set to something like `35em`. The `em` unit is the approximately the width of the `m` character in the font and so about half of an 'm' is about the average character width.

The following shows the visual and cognitive impact of different line lengths.

![Line length](designLineLength.jpg)

## Internationalization

Designing a global international application requires careful consideration from the beginning. Attempting to internationalize a complex, mature application after it has a domestic presence is very difficult.

One of the most important aspects to consider is the translation of textual content and the ability of the user to select their desired language.

![Unicode](designInternationalizationUnicode.jpg)

Successful translation also requires the text to be rendered properly. For example, several languages are read from right to left. Therefore the content, and the application itself, must be displayed in that orientation.

![Right to left](designInternationalizationRtl.jpg)

Likewise the format for displaying dates, times, numbers, and currency varies greatly between nationalities. This includes country specific currency symbols (¥, $, €, or ฿), the order of date fields (MM/DD/YY or DD/MM/YY), and numerical separators (1,000.50 or 1.000,50).

Iconography can also be a concern. An owl in the United States represents wisdom, but in some Asian countries it symbolizes stupidity. Icons that carry religious representations can be even more disruptive.

Proper international design requires thought across the full technology stack. If data is not properly passed, stored, and rendered at every level of the stack it will fail to properly work globally. For example, dates and times should always be stored in a format that properly represents time zones (e.g. ISO 8601) and rendered based upon the user's location. That way when users do things like global calendaring or traveling between countries their data is not corrupted.

## Space

Introducing space around your application content helps to create focus and lessen the effort a user has to exert in order to interpret the presented information.

![Whitespace](designWhitespace.jpg)

Consider the following example, where whitespace is used to create focus on the brand, imagery, and call to action.

![Whitespace Prototypr](designWhitespacePrototypr.jpg)

> Source: Prototypr.org

Here is another example where whitespace brings the user's attention to specific text that teases the user and leads them down to the explanatory text, followed by actions the user can take to learn more.

![Whitespace Sofa](designWhitespaceSofa.jpg)

> Source: MadeBySofa.com

Consider the same content with all of the whitespace removed. This is of course extreme, but it demonstrates the power that whitespace has.

![Whitespace Sofa](designWhitespaceSofaCondensed.jpg)

## Interaction

Making your application interactive is a powerful way to engage the user and increase retention. Interaction can be as simple as gathering and displaying the user's name or avatar, or as complex as letting the user completely drive the application based on the choices they make.

Here is an example of purchasing a car where the user can interactively see what their car will look like based upon their desires.

![BMW build a car](designInteractionBmw.gif)

> Source: bmw.com

Interaction makes the application come alive and invests the user in the result of their efforts.

## Images

It is often said that a picture can save a thousand words. Including images in your application can convey deeper understanding, make it more visually appealing, and draw a user into the application. The following example helps the user know exactly what a product looks like and what it might look like when they use it. The contrast of colors in the image helps the product to pop and further suggest its value.

![Value image](designImageValue.jpg)

> Source: Burberry.com

Avoid using images that are only used as space fillers. Display space is too limited to waste on an image that doesn't add significant value. For example, the following image dominates the display of a technical article about CORS. However, it was only chosen because it matched the color scheme of the application and the title contains the work `talk` in it, but two people talking trough a tin can has nothing to do with CORS. Now the user has to scroll past the distracting image to get to the content. Instead, either omit the image, or include one that serves to clarify the purpose of CORS. That way your images are visually appealing and provide information that furthers the story you are trying to tell.

![No value image](designImageNoValue.jpg)

> Source: medium.com

## Animation

Animation can help make your application come alive, but it also helps confirm choices, demonstrate progress, and focus attention.

![Animation icon](designAnimationIcon.gif)

However, too much animation can physically make your users sick. Here is an example

![Animation too much](designAnimationTooMuch.gif)

> Source: fireart.studio

## Decision fatigue

You need to consider the impact of the choices that you present to a user. [Hick's Law](https://en.wikipedia.org/wiki/Hick%27s_law) states that the time necessary to make a decision increases logarithmically with the number of choices presented. That doesn't mean that you should not provide options to the user, but that you should limit the number of choices given at any point in time.

For example, the process of building a pizza involves many steps. First you must pick the location you want to order from, then the pizza size, cheese, meats, and veggies. Finally you need to provide payment. Each of those choices require a lot of input from the user, and so limiting the number of choices displayed at one time will help reduce decision fatigue and you will have better odds of them completing the ordering process.

![Decision pizza making](designDecisionFatiguePizza.gif)

> Source: Papa Johns

## Device aware

Modern devices allow a web application to interact in many sophisticated ways. This includes abilities such as installing to the device's desktop, determining the device's geographical location, displaying notifications, detecting the acceleration of the device, using the camera, and accessing the user's contacts. The more seamlessly the application is integrated with the device the more intuitive and useful the application will be.

The following shows an application suggesting that the user add the application to the device's home screen. This makes it so a user can access the application without having to navigate to the application's URL.

![Add to home](designDeviceAddToHome.jpg)

## Device size and orientation

Properly reorienting and altering the functionality of the application interface based upon the size and orientation of the display is especially important on mobile devices. The following shows an application that provides a course on how to tie knots. The default view for the course shows the video on the left and an interactive transcript on the right.

![Replace](designDeviceRotate.jpg)

When the device is rotated the application automatically orients itself and moves the interactive transcript below the video in order to maximize the available space. The user can also display the table of contents on the left or the peer chat on the right. Because the device's display is large enough to show the content, even in portrait orientation, the table of contents or chat panes can also occupy a portion of the display. This allows the instructional content to still be visible while the functionality of the other panes are utilized.

![Slide in](designDeviceSlideIn.jpg)

On a smaller device, such as a mobile phone, the table of contents or chat panes completely replace the content. The user can then click on the `X` icon to return to the instructional content. That ability to restrict the focus to a single functional purpose maximizes the use of the limited space without losing the context of the content the user is viewing.

![Rotate](designDeviceReplace.jpg)

The following website demonstrates what happens when an application fails to properly adapt to the orientation of the device. When viewed in portrait mode the application only uses a small portion of the display to show a health warning, but when rotated, the warning completely occupies the display. This creates a confusing experience where the original context of the application is obscured, and leaves the user wondering what should be done next.

![Orientation](designDeviceOrientation.jpg)

## Performance

📖 **Suggesting reading**:

- [Google site performance](https://www.youtube.com/watch?v=OpMfx_Zie2g)
- [MDN Performance](https://developer.mozilla.org/en-US/docs/Web/Performance)

Application performance is an important aspect of your design that often gets overlooked until it is too late. Your application can be visually stunning, have intuitive navigation, and have amazing interactivity, but if it takes minutes to load or react to a user's actions, it will completely fail. Many studies have analyzed the relationship between performance and user retention. One [study](https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/) showed that as load times increase from one second to five seconds it causes 90% more users to bounce, or leave the application.

![Bounce rates](designPerformanceBounceRates.jpg)

> Source: thinkwithgoogle.com

You need to set performance goals for your application and consistently monitor how your application is doing. Generally you want your application to load in under a second. However, with modern single page web applications it can take several seconds to do the initial load. You can mitigate the appearance of a slow application by giving the impression of progress, by partially loading some content or displaying a loading animation.

The Chrome debugging tools provide a lot of help for diagnosing your application performance. The network tab will show you the size of your application files and the amount of time it takes to transfer them.

![Performance](designPerformanceNetwork.jpg)

You can use the Chrome debugging Lighthouse tool to run an analysis of your application. This will give you an average performance rating based upon the initial load time, longest content paint, and time before the user can interact with the page.

![Performance](designPerformance.jpg)

## Short circuit

Sometimes factors such as network latency will impact the performance of your application or make it partially unavailable. You want to consider how you can create a meaningful experience for your users even when you cannot provide full functionality. For example, your application might rely on a third party service for processing payment before they can access the application. Rather than deny the user access when the payment service is down, you could collect the payment information and attempt to process it later. In the meantime the user is allowed to continue working. If later, the payment processing fails, then you handle the problem just as if their credit card was cancelled after accepting payment.

This ability to provide an alternative path is sometimes called short circuit or fallback functionality. This removes barriers from your application that otherwise would turn away customers, and they are usually not difficult to implement. You just need to consider each functional piece of your application and provide an alternative if that functionality is not available.

## Accessibility

📖 **Suggesting reading**: [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

Your application needs to appeal to a diverse population of users. This means that you need to design for users with different accessibility needs, including users with visual, physical, and auditory impairments.

You can help users with visual impairments by considering color blindness when selecting your color scheme, providing high contrast themes, and supporting screen readers. Video and audio transcripts, along with visual animation, help users that need audio assistance. Providing keyboard shortcuts and making sure input elements are accessible in the proper order will help users with different physical abilities.

| Ability  | Application features                                    |
| -------- | ------------------------------------------------------- |
| Visual   | High contrast themes, color selection, screen readers   |
| Audio    | Closed captions, textual alternatives, visual animation |
| Physical | Keyboard navigation, element ordering                   |

Many of the accessibility tools that users employ require that your HTML is well structured and has attributes that support [WAI-ARIA](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics) standards. Make sure you understand the proper use of elements and aria when you design a production application.

## Legal

Like it or not, applications must consider applicable regulation and the possibility of legal action. For example, by violating GDPR [Amazon was fined $887](https://www.cnbc.com/2021/07/30/amazon-hit-with-fine-by-eu-privacy-watchdog-.html) million in 2021 for violating the privacy of its customers. In another case [Domino's Pizza](https://www.cnbc.com/2019/10/07/dominos-supreme-court.html) was found to be violating the Americans with Disabilities Act (ADA) because a blind man could not order a pizza by using a screen reader.

Central to the core of many legal codes is the concept of Personally Identifiable Information (PII). While the strict interpretation of what PII is differs by industry, it generally relates to any data that can be directly ascribed to an identifiable individual.

Every industry and local has different legal constraints. You should be aware of the major legislation that impacts your application. Here are some laws that impact applications within the jurisdiction of the United States of America.

### HIPAA

The Health Insurance Portability and Accountability Act (HIPAA) stipulates the management of medical records. It includes provisions that give control to the individual with regard to access and sharing of records. Specifically it restricts how relatives, courts, and insurance companies may obtain medical records.

### FERPA

The Family Educational Rights and Privacy Act (FERPA) defines how student data can be stored, shared, and accessed. FERPA defines the concept of an `education record` and then specifies who can view and contribute to that record.

### ADA

The Americans with Disabilities Act (ADA) seeks to prohibit discrimination against individuals with diverse accessibility needs. The act was originally intended to cover physical environments, but recent case law has extended the interpretation of the law to cover electronic access.

### GDPR

The General Data Protection Regulation (GDPR) impacts all applications that are used by members of the European Union. The main purpose of GDPR is to protect the privacy of users. Among other things, GDPR requires applications to get approval from the user before their data can be stored or shared. It also requires the application to provide the ability to delete all of the user's data and to be able to transfer their data to competing applications.

## Walls

There are many types of walls that hinder a user's experience with an application. Some walls are caused by poor design or business decisions, and others are a result of unavoidable external pressures such as governmental regulation or security concerns.

If you can learn to recognize user experience walls then there is a good chance that you can remove them or decrease their negative impact.

### Complexity

As applications mature it is common for them to grow in complexity as more and more features are introduced.

> A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.
>
> — Niklaus Wirth

The following image is from GitHub. An important action that a developer needs to do is create a Personal Access Token in order to work with repositories. However, GitHub has buried the UI for creating the token somewhere in their setting (account, user, and repository) pages. Assuming you are able to find the right setting page, you are then confronted with dozens of setting categories. After clicking through all of these options a user will wonder why such an important activity is buried so deeply in the application.

![complexity wall](designWallsComplexity.png)

### Payment

Some walls, such as receiving payment, are unavoidable for the success of the application. However, consideration should be made to move the wall to the point where it is required. Before a user hits a payment wall they should have the opportunity to see the value of what they are purchasing. Even better is if the user is able to invest significant effort and content to the application before payment is required. For example, the application may allow the user to create a limited number of documents before they have to enter payment information.

![Payment wall](designWallsPayment.png)

> Source: sitepoint.com

Once payment is required, the process for entering payment information needs to be as effortless as possible. The best option is to have them not enter information at all, and instead use an associated credential like Apple Pay or Google Wallet to authorize payment based on the already authenticated user. Beyond that, a single text box that accepts, and authorizes, a credit card number is better than dozens of text boxes that must be completed before payment is made. You also want to remember payment information so that you don't need to repeatedly ask the user for input. This enables you to provide your application as a subscription service, or to execute single click purchases for future payments.

### Application failure

Application failure is a reality that any good application design needs to address. An application that has a reputation of repeatedly presenting the user with a failure wall will have a hard time retaining users. The most basic solution to handling a failure is to present a message to the user apologizing for what went wrong. The user will be slightly less annoyed if you can explain what went wrong, provide a possible remedy, or explain the expected duration of the failure.

![Application failure wall](designWallsFailure.png)

Alternative solutions for handling failure include providing fallback functionality, automatically notifying the user when the failure has been resolved, or providing a status page where the user can go to see what is being done about the problem.

Proactive solutions include designing an application that has multiple redundant regional deployments that automatically failover when one region experiences problems, or designing the application so that it can run offline with cached data.

### Security

Security walls occur when you have to interact with the user in order to authenticate them. The security walls you present should be proportional to the value of the resource you are trying to secure. A banking application should have strong security walls that provide actual protection for the user's data. An application that gives away free kitten videos should have a minimal security wall if any.

You need to consider both the frequency and complexity of your security wall. If the user feels that the security wall is too onerous for the value that the application is providing, they will find another solution. Likewise if the user feels that there is not enough security then they will not trust you with their data.

Here is an example of an application for learning how to code. They need a user's email so that they can store course progress, but they don't even ask for a password because the email address is enough to uniquely identify the user. Authentication occurs when the user provides the security code that is emailed to the address that they provided. From then on the application remembers the email address. If the user accesses the application on a different device then the user just needs to do another once-per-device authentication.

![Registration wall](designWallsRegistration.png)

> Source: freecodecamp.com

This a much lower wall than an application that requires you to log in repeatedly every 30 minutes.

![Login wall](designWallsLogin.jpg)

A [CAPTCHA](https://en.wikipedia.org/wiki/CAPTCHA) is a common way to verify that a user is a human. While this may be necessary for the success of your application, it is an example of a wall that provides no value to the user and will always lessen the application experience. This is especially true for a difficult CAPTCHA such as typing in unreadable text, or entering the number of mosquitos displayed in a jungle picture.

![Captcha wall](designWallsSecurity.png)

### Legal

Legal walls usually only protect the application vendor and provide little or no value to the user. GDPR inspired cookie notifications are one example of this.

![Cookie acceptance wall](designWallsLegal.png)

Another common example of a legal wall is an application that requires the acceptance of terms and conditions before you can use the application. You want to minimize the impact of legal walls as much as possible since they lessen the user's experience and encourage the user to question why a legal consent is required in the first place.

# Kahoot
1. port 80 is reserved for HTTP
2. status codes in the range 300 are for content redirects or caching
3. which is NOT a standard HTTP header?
    - Language (content-type, host, cookie are) 
4. Cookies allow: a server to store data on the client
5. for the request [GET] /fav/george what is logged? paul george john
```
  app.use(function (req, res, next) {
      console.log('paul');
      next();
    });

    app.put('/fav/:person', (req, res, next) => {
      console.log('ringo');
      next();
    });

    app.get('/fav/:person', (req, res, next) => {
      console.log(req.params.person);
      next();
    });

    app.get('/*', (req, res, next) => {
      console.log('john');
      next();
    });

    app.use((_req, res) => res.send());
```
  - First app.use middleware:
    - This is a general middleware applied to all routes. It logs 'paul' and then calls next(), so the request continues to the next handler.

  - Log: paul

  - First app.get('/fav/:person') route:
    - The route matches /fav/:person with person = 'george'. It logs the person parameter (which is 'george') and then calls next() to pass control to the next middleware or handler.

  - Log: george

  - The app.get('/*') route:
    - This route matches all paths (including /fav/george) because of the wildcard pattern /*. It logs 'john' and then calls next() to pass control.

  - Log: john

  - Final app.use middleware:
    - The last app.use sends a response using res.send(). This ends the request-response cycle. No logging occurs here.

``` 
app.use(function (req, res, next) {
  console.log('middleware');
  next();
});

app.post('/test', (req, res, next) => {
  console.log('POST handler');
  next();
});

app.get('/test', (req, res, next) => {
  console.log('GET handler');
  next();
});

app.use((_req, res) => res.send());
```
- request [POST] /test
  - middleware
  - POST handler
- request [GET] /test
  - middleware
  - GET handler

6. Which Express middleware will match this fetch request?
```
const r = await fetch('/fav/ringo', { method: 'DELETE' });
```
- app.delete(/fav|?(.*)/,() => {})
```
const r = await fetch('/fav/ringo', { method: 'DELETE' });
The following examples show different ways middleware or route handlers can match this request.

Example 1: Matching with app.delete and Regex
javascript
Copy code
app.delete(/fav\/?.*/, (req, res) => {
  console.log('Matched DELETE request with regex');
  res.send('Success');
});
This matches /fav/ringo or /fav/ with an optional trailing segment.
Regex Explanation:
/fav\/?: Matches /fav with an optional / after it.
.*: Matches any additional characters after /fav.
Example 2: Parameterized Path Matching
javascript
Copy code
app.delete('/fav/:person', (req, res) => {
  console.log(`Matched DELETE request for person: ${req.params.person}`);
  res.send(`Deleted ${req.params.person}`);
});
This matches paths like /fav/ringo and captures ringo as req.params.person.
Log Output:

rust
Copy code
Matched DELETE request for person: ringo
Example 3: Catch-All for DELETE Requests
javascript
Copy code
app.delete('*', (req, res) => {
  console.log('Matched any DELETE request');
  res.send('Generic DELETE handler');
});
This matches any DELETE request, including /fav/ringo.
Example 4: Multiple Route Handlers Matching Specific Patterns
javascript
Copy code
app.delete('/fav/*', (req, res) => {
  console.log(`Matched DELETE under /fav for ${req.path}`);
  res.send('Handled under /fav');
});

app.delete('/fav/ringo', (req, res) => {
  console.log('Specific DELETE handler for /fav/ringo');
  res.send('Deleted ringo');
});
If a request to /fav/ringo is made, the more specific /fav/ringo route takes precedence over /fav/*.
Request to /fav/ringo:

sql
Copy code
Specific DELETE handler for /fav/ringo
Request to /fav/someoneElse:

bash
Copy code
Matched DELETE under /fav for /fav/someoneElse
Example 5: Middleware with Regular Expressions
javascript
Copy code
app.use('/fav', (req, res, next) => {
  console.log('Middleware for all /fav requests');
  next();
});

app.delete('/fav/:person', (req, res) => {
  console.log(`DELETE handler for person: ${req.params.person}`);
  res.send(`Deleted ${req.params.person}`);
});
The middleware logs for all requests to /fav/*, and the specific route /fav/:person handles the DELETE request.
Log Output for /fav/ringo:

rust
Copy code
Middleware for all /fav requests
DELETE handler for person: ringo
Example 6: Using app.route to Group Methods for the Same Path
javascript
Copy code
app.route('/fav/:person')
  .get((req, res) => {
    console.log(`GET handler for ${req.params.person}`);
    res.send(`Fetching ${req.params.person}`);
  })
  .delete((req, res) => {
    console.log(`DELETE handler for ${req.params.person}`);
    res.send(`Deleted ${req.params.person}`);
  });
Matches both GET and DELETE requests on /fav/:person, simplifying handler definitions.
Log Output for /fav/ringo (DELETE):

rust
Copy code
DELETE handler for ringo
Example 7: Combining Middleware and Route Logic
javascript
Copy code
app.use('/fav/:person', (req, res, next) => {
  console.log(`Middleware before handler: ${req.params.person}`);
  next();
});

app.delete('/fav/:person', (req, res) => {
  console.log(`Deleting: ${req.params.person}`);
  res.send(`Deleted ${req.params.person}`);
});
Request to /fav/ringo:

yaml
Copy code
Middleware before handler: ringo
Deleting: ringo
Example 8: Handling Errors for DELETE Requests
javascript
Copy code
app.delete('/fav/:person', (req, res, next) => {
  if (req.params.person !== 'ringo') {
    next(new Error('Only ringo can be deleted!'));
  } else {
    res.send('Deleted ringo');
  }
});

app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`);
  res.status(400).send(err.message);
});
Request to /fav/ringo:

Copy code
Deleted ringo
Request to /fav/paul:

javascript
Copy code
Error: Only ringo can be deleted!
Key Points for Practice Problems
Use specific paths (/fav/:person) when possible to directly map logic to endpoints.
Employ wildcards (*) or regular expressions to handle a broader range of requests.
Chain middleware using next() for more complex flows or logging.
Use app.route to group logic for the same path with multiple HTTP methods.
```
7. Which document matches this MongoDB query?
```
{ $or: [ { name:/J.*/ }, { score: { $lt:3 } } ] }
```
- { name: "Walke", score: -55}
- $or lets either one match
- /J.*/ - name must start with letter "J" followed by zero or more characters
- $and follows all conditions
- $nor - follows none of the conditions
- $not - negates the condition

8. Why is hashing stored passwords immportant?
- it improves security by making the password unreadable
9. Given the following code what will the console log print?
```
const {WEBSCOEKTSERVER } = requre('ws');
const wss = new WebSocketServer( {port: 9900 });

//Executed on server:
wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);
    ws.send(`Server:${msg}`)
  });
});

// Executed on browser:
const socket = new WebScoekt('ws://localhost:9900');
socket.onmessage = (event) => console.log(`Client:${event.data)}`);
}; 
socket.send('Hello');
```
- Client: Server: Hello

10. What calue does WebSocket add to HTTP?
- it is peer to peer instead of client to server

11. What is NOT a purpose of JSX?
- to combine CSS, HTML, and JavaScript
- others
  - to render HTML from JavaScript
  - to componentize your HTML
  - to allow for composability of you HTML

12. What will component A initially display?
```
const B = () => <b>burger</b>;
const C = () => <b>fish</b>;
const D = () => <b>taco</b>;
const A = () => {
  const [v, updateV] = React.useState(false);
  const [x, updateX] = React.useState(B);

  let = <C />;
  if (v) {
    o = <B />;
  }

  React.useEffect(() => updateX(D), [v]);

  return (
    <p onClick={() => updateV(true)}>{x}{o}</p>
  );
};
```
- tacofish
Code Explanation
State Initialization

javascript
Copy code
const [v, updateV] = React.useState(false);
const [x, updateX] = React.useState(B);
v is a boolean state variable, initialized to false.
x is a state variable, initialized to B, which refers to the Component B (rendering <b>burger</b>).
Local Variable o

javascript
Copy code
let o = <C />;
if (v) {
  o = <B />;
}
Initially, v is false, so o is assigned <C />, rendering <b>fish</b>.
Effect Hook

javascript
Copy code
React.useEffect(() => updateX(D), [v]);
This useEffect runs whenever v changes. However, the initial render happens before the useEffect is triggered, so x remains B (rendering <b>burger</b>) on the first render.
Return Statement

javascript
Copy code
return (
  <p onClick={() => updateV(true)}>{x}{o}</p>
);
Initially:
x renders <b>burger</b> because x is B on the first render.
o renders <b>fish</b> because v is false.
Initial Display
The combination of x and o in <p> results in:

html
Copy code
<p><b>burger</b><b>fish</b></p>
Key Notes
Clicking <p> sets v to true, triggering useEffect to update x to D (rendering <b>taco</b>) and re-evaluating o to <B /> (rendering <b>burger</b>).
However, this happens after the initial render.

13. What component will the URL `/burger` render?
```
<BrowserRouter>
  <div className='app'>
    <nav> 
      <NavLink to='/'>A</NavLink>
      <NavLink to='/burger'>Burger</NavLink>
    </nav>
    <main>
      <Routes>
        <Route path='/' element={<A />} exact />
        <Route path='/burger' element={<B />} />
        <Route path='*' element={<C />} />
      </Routes>
    </main>
  </div>
</BrowserRouter>
```
- B

14. What does the command "NPM install ws" NOT do?
    - Adds the template code for websocket to your JavaScript
    - what it does Do
      - loscks the version of the websocket package for your application
      - adds the websocket source code to the node_modules directory
      - adds a dependency to your package.json file
15. You can use fetch in front-end and back-end code
  - True
16. Which of the following is NOT true about a Linux daemon?
  - Cannot fork other processes
  - What it can do
    - Executes independent of a user
    - starts when the computer is rebooted
    - PM2 is an example of a daemon

# 260 Final Exam Questions
Below is a collection of questions and answers covering various web-development topics (networking, HTTP, cookies, Express, MongoDB, React, Node.js, and more). Feel free to copy and paste this entire markdown section into your notes.

---

## 1. What is the default port for HTTP/HTTPS/SSH?

- **HTTP:** Port **80**
- **HTTPS:** Port **443**
- **SSH:** Port **22**

These are the well-known ports for these protocols. In production environments, they are almost always used unless explicitly overridden.

---

## 2. What does an HTTP status code in the range of 300/400/500 indicate?

- **300 Range (Redirection):** The request requires further actions by the client (e.g., `301 Moved Permanently`, `302 Found`).
- **400 Range (Client Error):** There’s an error from the client's side—bad request syntax, unauthorized access, etc. (e.g., `400 Bad Request`, `404 Not Found`).
- **500 Range (Server Error):** The server encountered an error or cannot fulfill the request (e.g., `500 Internal Server Error`, `503 Service Unavailable`).

---

## 3. What does the HTTP header `Content-Type` allow you to do?

The `Content-Type` header tells the client (or server) the **MIME type** of the body content being transmitted. It indicates how the receiving end should interpret the data. Examples include:

- `application/json`: The body contains JSON data.
- `text/html`: The body contains HTML.
- `multipart/form-data`: The body contains form data with file uploads.
- `text/plain`: The body is just plain text.

---

## 4. What does a “Secure cookie” / “HttpOnly cookie” / “SameSite cookie” do?

**Reference:** [MDN Docs on Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

- **Secure Cookie:**  
  Only sent to the server over HTTPS (encrypted connections), preventing exposure on unencrypted HTTP.

- **HttpOnly Cookie:**  
  Not accessible via client-side JavaScript `document.cookie`. Helps prevent cross-site scripting (XSS) attacks because malicious scripts can’t read these cookies.

- **SameSite Cookie:**  
  Controls whether cookies are sent with cross-site requests. Possible values:
  - **SameSite=Strict**: Cookies sent only if the site for the cookie matches the site in the browser's address bar (no cross-site).
  - **SameSite=Lax**: Cookies are withheld on some cross-site requests (like third-party POST), but sent on top-level navigation.
  - **SameSite=None** (must also be `Secure`): Cookies are sent on all cross-site requests.

---

## 5. Assuming the following Express middleware, what would be the `console.log` output for an HTTP GET request with a URL path of `/api/document`?

```js
app.use((req, res, next) => {
  console.log('middleware 1');
  next();
});

app.get('/api/*', (req, res, next) => {
  console.log('middleware 2');
  next();
});

app.get('/api/document', (req, res) => {
  console.log('handler');
  res.send('OK');
});
```
- middleware 1 is called for every request.
- middleware 2 is called for GET requests matching /api/*.
- The route handler /api/document logs handler when the path is exactly /api/document.

**Output:**
1. `middleware 1`
2. `middleware 2`
3. `handler`

---
## 6. Given the following Express service code: What does the following front-end JavaScript that performs a fetch return?
```js
app.get('/data', (req, res) => {
  res.json({ message: "Hello World" });
});
```
```js
const response = await fetch('/data');
const data = await response.json();
console.log(data);
```   
- The front-end fetches JSON from /data, which returns { message: "Hello World" }. The call to response.json() resolves to:
```js
{ "message": "Hello World" }
```
so console.log(data) outputs:
```js
{ message: "Hello World" }
```
7. **MongoDB query { name: "Mark" }**

       db.collection.find({ name: "Mark" });
   
   Returns documents where the `name` field is exactly `"Mark"`.
```
{ "_id": ObjectId("123..."), "name": "Mark", "age": 30 }
{ "_id": ObjectId("456..."), "name": "Mark", "role": "developer" }
```

8. **How should user passwords be stored?**

   **Hashed and salted** using a secure one-way hash algorithm (bcrypt, Argon2, etc.). Never store plaintext passwords.

9. **Node.js WebSocket + Front-End WebSocket logging scenario**  

   **Back End:**

       wss.on('connection', (ws) => {
         console.log('Client connected');
         ws.send('Hello from server!');

         ws.on('message', (message) => {
           console.log(`Received message: ${message}`);
           ws.send(`Server echo: ${message}`);
         });
       });

   **Front End:**

       const socket = new WebSocket('ws://localhost:3000');
       socket.addEventListener('open', () => {
         console.log('Connected to server');
       });
       socket.addEventListener('message', (event) => {
         console.log('Received from server:', event.data);
       });
       socket.send('Hi server!');

   **Front-End Console Logs:**

       Connected to server
       Received from server: Hello from server!
       Received from server: Server echo: Hi server!

10. **What is the WebSocket protocol intended to provide?**

    **Full-duplex** two-way communication over a single TCP connection for real-time apps.

11. **Acronyms:**

    - **JSX:** JavaScript XML  
    - **JS:** JavaScript  
    - **AWS:** Amazon Web Services  
    - **NPM:** Node Package Manager  
    - **NVM:** Node Version Manager  

12. **React component that uses parameters in an HTML body**

   For example:

       function Greet({ name }) {
         return <div>Hello, {name}!</div>;
       }

   Rendered with `<Greet name="Alice" />`, it produces:

       <div>Hello, Alice!</div>

13. **Given nested React components, what will be generated?**

    The final output is a **DOM hierarchy** of nested components.

14. **React component with React.useState**

       const [count, setCount] = React.useState(0);

    This Hook gives functional components local state. Updating `count` triggers a re-render.
    - count is the current State
    - setCount is a function to update that state
    - useState(0) initializes the state value to 0

15. **What are React Hooks used for?**

    **Hooks** let functional components manage state, side effects, refs, etc., without needing classes.
    - React Hooks (like useState, useEffect, useContext, etc.) enable functional components to manage state, perform side effects, handle context, and more—without needing class components. They make it easier to reuse and share stateful logic between components.
    
16. **What do the State Hook / Context Hook / Ref Hook / Effect Hook / Performance Hook do?**

    - **State Hook (useState):** Local state in a functional component.  
    - **Context Hook (useContext):** Access shared context data.  
    - **Ref Hook (useRef):** Mutable value or DOM reference persisting across renders.  
    - **Effect Hook (useEffect):** Perform side effects after rendering.  
    - **Performance Hook (useMemo/useCallback):** Memoize values or functions to avoid unnecessary re-renders.

17. **React Router code statements that are true:**

    - Must wrap components in `<BrowserRouter>` or `<HashRouter>`.  
    - `<Route path="/about">` matches URLs ending in `/about`.  
    - `<Link to="/about">` is used for navigation without full-page refresh.

18. **What does the package.json file do?**

    - Lists dependencies and scripts  
    - Defines project metadata: name, version, author

19. **What does the fetch function do?**

    Performs **HTTP requests** and returns a **Promise**. Often used for AJAX calls in modern web apps.
    ```
    fetch('https://example.com/api')
    .then(response => response.json())
    .then(data => console.log(data))
    ```
20. **What does Node.js do?**

    A **server-side JavaScript runtime** (based on Chrome's V8), allowing JS to be used outside the browser.

21. **What does pm2 do?**

    A **process manager** for Node.js apps (manages clusters, restarts, logs, etc.).

22. **What does Vite do?**

    A **fast front-end build tool** offering quick dev-server start and HMR, using Rollup for production builds.