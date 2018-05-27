# Project 4: Last Dream III

# Project Overview

|  Day | Deliverable | 
|---|---|
|Day 0: Thu 5/24 | Wireframes, Priority Matrix, Schedule, Time Estimates |
|Day 1: Thu 5/24 | Approval / Proof of Concept - Sockets |
|Day 2: Fri 5/25 | Research and Test Planned Technologies: Stack Setup For React / Express / Rails -  Sockets and Canvas |
|Day 3: Sat 5/26 | Research and Test Planned TechnologiesRails: Crafty Integration With Sockets  |
|Day 4: Sun 5/27 | Users DB Setup / Pseudocode / Actual code  |
|Day 5: Mon 5/28 | Work on project  |
|Day 6: Tues 5/29 | Work on project  |
|Day 7: Wed 5/30 | Work on project  |
|Day 8: Thurs 5/31  | Work on project  |
|Day 9: Fri 6/1 | Styling / Graphical improvements / Debugging / Working Prototype with full commit to master |
|Day 10: Sat 6/2 | MVP / Debugging / Deployment |
|Day 11: Sun 6/3 | PMVP / Debugging / Final edits...branching first |
|Day 12: Mon 6/4 | Presentation |

## Project Statement

Last Dream III is a multiplayer, two-dimensional role playing game with a turn-based battle system for players who are nostalgic for the feel of older RPGs but also want the camaraderie of playing against other players. 

## Wireframes

[Wireframes - Notebook](https://res.cloudinary.com/dk1cgfxkn/image/upload/v1527131654/Wireframes_-_Notebook.jpg) 

## Priority Matrix

[Priority Matrix](https://res.cloudinary.com/dk1cgfxkn/image/upload/v1527133661/p4_-_Priority_Matrix.png) 

## ERD
[ERD - Whiteboard](http://res.cloudinary.com/dk1cgfxkn/image/upload/c_scale,w_1531/a_90/v1527131654/ERD_-_Whiteboard.jpg)

[ERD - Digital](https://res.cloudinary.com/dk1cgfxkn/image/upload/v1527173050/p4_ERD.png)

##  User Stories
    
####    Landing Page
    
As a user, I want to log in or register to play the game.
    
####    Navbar
    
As a user, I want a navbar to persist across all pages with links to game news, information about the game, login, and a link to play the game.
    
####    News Page
    
As a user, I want to see posts that inform users of latest game news and updates.
    
####    About Page
    
As a user, I want to read about the game's backstory and instructions.
    
####    Login Page
    
As a user, I want to log into my account, and be taken to my personal profile.
    
####    Register Page
    
As a user, I want to register for a new account, and be taken to the login page.
    
####    User Profile
    
As a user, I want to see my user details, game progress, my current avatars and an option to create a new avatar.
    
####    Create / Edit Avatar View
    
As a user, I want to see, create, edit, or delete an avatar for the game.
    
####    Game: "World Map" View
    
As a user I want to see my avatar "minified" with other users' avatars "minified". When my avatar and another user's avatar collide, we will be taken to the "Battle" view.
    
####    Game: "Battle" View
    
As a user, I want to see my avatar dueling against another user's avatar using the in-game battle system
    
####    Game: Battle System
    
As a user, I want to be able to take turns selecting attacks or defenses against my opponent until one of our avatars loses all remaining health points.
    
####    Game: "Victory / Defeat" View
    
As a user, when my or my opponent's avatar has lost all health points, we will each be taken to a "victory" or "defeat" view depending on whether we won or lost. We will then be redirected to the "World Map" view.


##  Proof of Concept
    
*   HTML Canvas Has Moving Divs
*   Player Div Motions Broadcasted Via Sockets
*   React Incorporated As Frontend
*   Ruby On Rails Active For User DB
*   Express Operating On Backend

## Clickable Model



##	MVP
	
*	User Database - Full CRUD
*	User Has Customizable Avatars
*	Navbar With Options For Game News, About Game, Login, Play Game
*	Game Has Functional World View
*	Game Has Functional Battle View
*	2 Player Functionality Via Sockets
*	Battle View Has Turn-Based Battle System
*	User Can Track Progress
*	User Avatar Has Traits

##	PMVP
	
*   In-Game Chat
*	Soundtrack
*	Overall CSS and Styling
*	NPC's for Single Player Progression (Pseudo AI, Gain XP and Gold)
*	Single Player Quests
*	Weapons and Armor System
*	Enahnced Design and Graphics for World View and Battle View
*	Avatar Animations In Battle View
*	Users Can Have Teams
*	Active Time Battle System


##	Functional Components									
										
										
|   Component   |   Priority    |   Estimated Time (hrs)    |   Time Invested (hrs) |   Actual Time (hrs)   |
|   --- |   :---:   |   :---:   |   :---:   |   :---:   |
|   Repo / Filetree Setup   |   H   |   0.5 |       |       |
|   Users DB: Rails Setup   |   H   |   1   |       |       |
|   React Native Setup  |   H   |   0.75    |       |       |
|   User Authentication With Tokens - Research  |   M   |   1.5 |       |       |
|   User Authentication With Tokens |   M   |   1.5 |       |       |
|   Users DB: Render Views (Check Forms and Functionality)  |   H   |   1   |       |       |
|   News Page: Content and View |   L   |   0.5 |       |       |
|   About Page: Content and View    |   L   |   0.5 |       |       |
|   Nav Bar: Functionality and View |   M   |   0.75    |       |       |
|   User Profile: User CRUD Functionality   |   M   |   0.75    |       |       |
|   User Profile: User CRUD Views   |   M   |   0.5 |       |       |
|   User Profile: User Progress - 1st Party API Read Functionality  |   M   |   0.5 |       |       |
|   User Profile: User Progress - 1st Party API View    |   M   |   0.5 |       |       |
|   User Avatar: CRUD Functionality - Node-Express  |   M   |   1   |       |       |
|   User Avatar: Customization Via State Functionality  |   M   |   1   |       |       |
|   Game: HTML 5 Canvas Research    |   H   |   2   |       |       |
|   Game: World View - Initial Design   |   H   |   1   |       |       |
|   Game: World View - One Player Functionality (Control / Response)    |   H   |   1.5 |       |       |
|   Game: World View - Multiplayer Functionality (Research Sockets) |   H   |   1.5 |       |       |
|   Game: World View - Multiplayer Functionality (Implement Sockets)    |   H   |   1.5 |       |       |
|   Game: World View - Multiplayer Functionality (Control / Response)   |   H   |   1.5 |       |       |
|   Game: World View - Collision Detection to Trigger Battle Functionality  |   H   |   1.5 |       |       |
|   Game: Battle View - Initial Design  |   H   |   1.25    |       |       |
|   Game: Battle View - One Player Functionality (Control / Response)   |   H   |   1.5 |       |       |
|   Game: Battle View - Multiplayer Functionality (Control / Response)  |   H   |   1.5 |       |       |
|   Game: Battle View - Multiplayer Functionality (Research Sockets)    |   H   |   1.5 |       |       |
|   Game: Battle View - Multiplayer Functionality (Implement Sockets)   |   H   |   1.5 |       |       |
|   User Traits: Level System (XP)  |   H   |   1.25    |       |       |
|   User Traits: Resources (Gold)   |   M   |   1.25    |       |       |
|   Avatar Traits: (Armor, Weapons) |   M   |   1.5 |       |       |
|   PMVP: Soundtrack    |   L   |   2   |       |       |
|   PMVP: Overall CSS and Styling   |   L   |   2   |       |       |
|   PMVP: Incorporate NPC's for Single Player Progression (Gain XP, Gold)   |   M   |   2   |       |       |
|   PMVP: Incorporate NPC's for Single Player Progression (Pseudo AI)   |   M   |   2   |       |       |
|   PMVP: Quests for Single Player  |   M   |   2   |       |       |
|   PMVP: Weapons and Armor Purchasing System: Add A Store  |   H   |   1.5 |       |       |
|   PMVP: Weapons and Armor Purchasing System: Add A Table For User Customization   |   H   |   1   |       |       |
|   PMVP: Expand Weapons and Armor  |   H   |   1   |       |       |
|   PMVP: Weapons and Armor Design  |   M   |   1.5 |       |       |
|   PMVP: Enhance Design and Graphics on World View |   L   |   2   |       |       |
|   PMVP: Enhance Design and Graphics on Battle View    |   L   |   2   |       |       |
|   PMVP: Add Animations to Avatars In Battle View  |   L   |   2   |       |       |
|   PMVP: Users Have Teams of Avatars   |   L   |   2   |       |       |
|   PMVP: Game Battle View - Active Time Battle System  |   M   |   2   |       |       |
|   PMVP: In-Game Chat  |   M   |   1   |       |       |
|   Sum Hours   |       |   60  |       |       |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

##	Tech Specs
	
*	Ruby On Rails
*	React Native
*	JSON Web Tokens
*	JQuery
*	WS WebSocket
*	Node
*	Express
*	Bcrypt 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## Change Log

 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
