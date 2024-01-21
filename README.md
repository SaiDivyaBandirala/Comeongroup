# Comeongroup

## Overview

This repository contains a minimal casino website with react using MUI.
## Taken UI Inspiration from quickspin website 
## Features

1. **Login functionality:**

    - Connect the login component on the `/login` path
    - Route to the games list on a valid login.
    - Provide message on invalid login.

2. **Log out functionality:**

    - Connect the log-out button to the `/logout` path
    - Route to the login screen on a valid log-out.

3. **Games list screen:**

    - Requires user login.
    - List games on the `/games` from API call
    - List categories from `/categories` from API call
    - Filter by category and searching.
    - Start a game by clicking the play icon.

4. **Game play screen:**

    - Requires user login.
    - Loading the selected game via API.
    - Provide a way to go back to the Games list.

5. **Extra Features:**
    - Implement Game Page on selection of the game
    - Add extra data to the json
    - Validation of login form
    - Enhanced UI
    - Game Headers
    - Individual game page
    - Maintained Custom Theme
    - Improved performance with context files
    - Motion div for smooth transitions
    - Header bar for clean design
      

## Future Work
1. **Registration functionality:**

    - Connect the Register component on the `/register` path
    - Route to the login page on successfull registration.
    - Provide message on invalid registration form.

2. **Guest User functionality:**

    - Create an attractive guest screen and showcase portfolio of games(without login).

3. **Games list screen:**

    - Add pagnation.
    - Implement Sort functionality by name, year, age limit.

4. **Game play screen:**

    - Add games high score and scores rank board
    - Option to download game sheet.
    - Add gameplay slideshow.

5. **Extra Features:**
    - Implement user messages to encorage. Eg. Well done! Congratulations, on your win.
    - Option to favorite a game.
    - User Dashboard, stats.
    - Sharable options on social media.
    - New challenge on the most played game.
