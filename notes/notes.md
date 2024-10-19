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