# Comeongroup

## Overview

This repository contains a minimal casino website with react using MUI.

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
