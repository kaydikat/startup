### Temple Guesser Game 
# Elevator Pitch #
     This game is a fun way to test your geography skills. You will be given the name of an LDS temple and you will have to guess it's location on the map. The closer you are to the actual location, the more points you will earn. Have fun competing with your friends to see who can get the highest score.

# Key Features #
- Secure login over HTTPS
- Gives 5 randomly picked temples to guess from
- Ability to click on the map to guess the location of the temple
- Shows the correct location of the temple after you have guessed
- Calculates the distance between your guess and the actual location
- Overall score that keeps track of how many points you have earned
- Scoreboard to keep track of high scores of all users

# Technologies #
- **HTML**	- Uses correct HTML structure for application. Three pages: login, game, and scoreboard. Includes map, buttons, and text. Includes leaflet.js library for map rendering. 
- **CSS**	- Application styling that looks good on different screen sizes, uses good whitespace, color choice and contrast. Has a map container, buttons, and text.
- **JavaScript** - Will create interactivity in the game. Provides login, handles clicks on the map and calculates distance between two points.  
- **React** - Will be used to create the login, game and scoreboard components. Will use react-leaflet to render the map and place a marker for the current temple. 
- **Web service** - Will use a web service to get the temple data and to store the high scores. Enpoints for:
    - login
    - getting temple data
    - saving scores
    - getting high scores
- **Authentication** - Store users and their respective scores in a database. Register and login users. Credentials securely stored in database. Can't play unless authenticated.
- **WebSocket** - Will use websockets to push data from the server to the client. This will be used to update the scoreboard in real time.

