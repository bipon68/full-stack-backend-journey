<!-- TABLE OF CONTENTS -->
## Day4 - The Responsibility of A Beginner Backend Application Developer


### Main Components of Backend Application
- [ ] Handle HTTP Requests (Mostly done by a framework)
	- [ ] Client → HTTP → Server
- [ ] Handle Routing (Mostly done by a framework)
- [ ] Handle Security (Mostly done by the framework and language)
- [ ] Write Business Logic (Done by the programming language) ***
- [ ] Access Operating System (Done by the programming language) **
- [ ] Access The Database (Done by DB Engine or ORM) *
- [ ] Access Third Party Services (Synchronous - HTTP**, Asynchronous - Message Queue)

### API Development Checklist
- [ ] Scaffold A Project ***
- [ ] Create A Route ***
- [ ] Create A Controller For This Route ***
	- [ ] Extract Data From Request Object
	- [ ] Validate and Sanitize Incoming Data
	- [ ] Permission and Authorization 
	- [ ] Write Business Logic Separately
		- [ ] Main Business Logic ***
		- [ ] Database Connection (Persist / Fetch Data)
		- [ ] Utilities
	- [ ] Handle Possible Errors ***
	- [ ] Synchronous / Asynchronous Communication with Third Party Services
	- [ ] Send A Response ***
- [ ] Create and Connect Necessary Middleware (Global / Local)


### Reference

|  | Topic   |      Reference      |
|----------|:-------------|:------:|
| 1 | RestAPI | [github restapi](https://api.github.com/users/mrhm-dev) | 
| 2 | REST API Tutorial | [REST API Tutorial](https://restfulapi.net/) | 
| 3 | HTTP request methods | [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) | 
| 4 | HTTP Status Codes | [HTTP Status Codes](https://www.restapitutorial.com/httpstatuscodes.html) | 
| 5 | API Design Cheat Sheet | [API Design Cheat Sheet](https://github.com/RestCheatSheet/api-cheat-sheet) | 
| 6 | Nodejs scaffolding |[nodejs-structure](https://github.com/Abdul-majid-ashrafi/nodejs-structure), [Nodejs scaffolding](https://github.com/khriztianmoreno/nodejs-scaffolding/tree/master), [Node.js, Express and MongoDB Project Structure](https://github.com/MoathShraim/Nodejs-rest-api-project-structure-Express), [Node.Js-sample-project-structure](https://github.com/jugaldb/Node.Js-sample-project-structure) | 








