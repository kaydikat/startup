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