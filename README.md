# Project 4: Last Dream III

# Project Overview

## Project Schedule

|  Day | Deliverable | 
|---|---|
|Day 1: Thu 5/24 | Wireframes, Priority Matrix, Schedule, Time Estimates |
|Day 2: Fri 5/25 | Approval\Pseudocode\Actual code\|
|Day 3: Sat 5/26 | Work on project  |
|Day 4: Sun 5/27 | Work on project  |
|Day 5: Mon 5/28 | Work on project  |
|Day 6: Tues 5/29 | Work on project  |
|Day 7: Wed 5/30 | Work on project  |
|Day 8: Thurs 5/31  | Work on project  |
|Day 9: Fri 6/1 | Styling / Graphical improvements / Debugging / Working Prototype with full commit to master |
|Day 10: Sat 6/2 | MVP / Debugging / Deployment |
|Day 11: Sun 6/3 | PMVP / Debugging / Final edits...branching first |
|Day 12: Mon 6/4 | |

## Project Statement

Last Dream III is a multiplayer, two-dimensional role playing game with a turn-based battle system for players who are nostalgic for the feel of older RPGs but also want the comradery of playing against other players. 

## Wireframes

[Wireframes - Notebook](https://res.cloudinary.com/dk1cgfxkn/image/upload/v1527131654/Wireframes_-_Notebook.jpg) 

## Priority Matrix

[Priority Matrix](https://res.cloudinary.com/dk1cgfxkn/image/upload/v1527133661/p4_-_Priority_Matrix.png) 

## ERD
[ERD - Whiteboard](https://res.cloudinary.com/dk1cgfxkn/image/upload/v1527131654/ERD_-_Whiteboard.jpg)

## User Stories

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
										
										
|	Component	|	Priority	|	Estimated Time (hrs)	|	Time Invested (hrs)	|	Actual Time (hrs)	|
|	---	|	:---:	|	:---:	|	:---:	|	:---:	|
|	Repo / Filetree Setup	|	H	|	0.5	|		|		|
|	Users DB: Rails Setup	|	H	|	1	|		|		|
|	React Native Setup	|	H	|	0.75	|		|		|
|	User Authentication With Tokens - Research	|	M	|	1.5	|		|		|
|	User Authentication With Tokens	|	M	|	1.5	|		|		|
|	Users DB: Render Views (Check Forms and Functionality)	|	H	|	1	|		|		|
|	News Page: Content and View	|	L	|	0.5	|		|		|
|	About Page: Content and View	|	L	|	0.5	|		|		|
|	Nav Bar: Functionality and View	|	M	|	0.75	|		|		|
|	User Profile: User CRUD Functionality	|	M	|	0.75	|		|		|
|	User Profile: User CRUD Views	|	M	|	0.5	|		|		|
|	User Profile: User Progress - 1st Party API Read Functionality	|	M	|	0.5	|		|		|
|	User Profile: User Progress - 1st Party API View	|	M	|	0.5	|		|		|
|	User Avatar: CRUD Functionality - Node-Express	|	M	|	1	|		|		|
|	User Avatar: Customization Via State Functionality	|	M	|	1	|		|		|
|	Game: HTML 5 Canvas Research	|	H	|	2	|		|		|
|	Game: World View - Initial Design	|	H	|	1	|		|		|
|	Game: World View - One Player Functionality (Control / Response)	|	H	|	1.5	|		|		|
|	Game: World View - Multiplayer Functionality (Research Sockets)	|	H	|	1.5	|		|		|
|	Game: World View - Multiplayer Functionality (Implement Sockets)	|	H	|	1.5	|		|		|
|	Game: World View - Multiplayer Functionality (Control / Response)	|	H	|	1.5	|		|		|
|	Game: World View - Collision Detection to Trigger Battle Functionality	|	H	|	1.5	|		|		|
|	Game: Battle View - Initial Design	|	H	|	1.25	|		|		|
|	Game: Battle View - One Player Functionality (Control / Response)	|	H	|	1.5	|		|		|
|	Game: Battle View - Multiplayer Functionality (Control / Response)	|	H	|	1.5	|		|		|
|	Game: Battle View - Multiplayer Functionality (Research Sockets)	|	H	|	1.5	|		|		|
|	Game: Battle View - Multiplayer Functionality (Implement Sockets)	|	H	|	1.5	|		|		|
|	User Traits: Level System (XP)	|	H	|	1.25	|		|		|
|	User Traits: Resources (Gold)	|	M	|	1.25	|		|		|
|	Avatar Traits: (Armor, Weapons)	|	M	|	1.5	|		|		|
|	PMVP: Soundtrack	|	L	|	2	|		|		|
|	PMVP: Overall CSS and Styling	|	L	|	2	|		|		|
|	PMVP: Incorporate NPC's for Single Player Progression (Gain XP, Gold)	|	M	|	2	|		|		|
|	PMVP: Incorporate NPC's for Single Player Progression (Pseudo AI)	|	M	|	2	|		|		|
|	PMVP: Quests for Single Player	|	M	|	2	|		|		|
|	PMVP: Weapons and Armor Purchasing System: Add A Store	|	H	|	1.5	|		|		|
|	PMVP: Weapons and Armor Purchasing System: Add A Table For User Customization	|	H	|	1	|		|		|
|	PMVP: Expand Weapons and Armor	|	H	|	1	|		|		|
|	PMVP: Weapons and Armor Design	|	M	|	1.5	|		|		|
|	PMVP: Enhance Design and Graphics on World View	|	L	|	2	|		|		|
|	PMVP: Enhance Design and Graphics on Battle View	|	L	|	2	|		|		|
|	PMVP: Add Animations to Avatars In Battle View	|	L	|	2	|		|		|
|	PMVP: Users Have Teams of Avatars	|	L	|	2	|		|		|
|	PMVP: Game Battle View - Active Time Battle System	|	M	|	2	|		|		|
|	Sum Hours	|		|	59	|		|		|

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

##	Tech Specs
	
*	Ruby On Rais
*	React Native
*	JSON Web Tokens
*	JQuery
*	Socket.io
*	Node
*	Express
*	Bcrypt 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
