
My solution
===

```
Instructions to run:

Backend:
Please use 'npm start' in the integrated terminal to start the server.
Please use 'npm test' to run the tests.

Frontend:
Please use 'npm run dev' in the integrated terminal to start the application.

```

My approach 
===

First I examined the user stories to identify my domain models.
Then I thought of possible routes needed and created a request/response table.
Next I created my Peep and User schemas.
I created an app.js file and created my server and then I created the routes folder and route files.
I make sure the app is using the routes inside of app.js.
I have written tests for the routes and tests to check that I can make a peep and save it to database.
I created mock data files for users and peeps.
I have been using postman to make sure everything works and have saved my requests. 
13 passing tests for backend routes.

For frontend, I created my own mock ups of pages and decided on a component heirarchy.
*Please SEE MOCK UPS AND COMPONENT HEIRARCHY inside of the FrontEnd/images folder.

I created my main components, used Props and identified state.
<br/>

```
Technologies used in this challenge:

Frontend
- React, Vite, Axios
- testing-library/react, testing-library/jest-dom

Backend
- Express, MongoDB, Mongoose
- Mocha, Chai, ChaiHttp
```

### You can log in as these users to test the app:

Name: John Doe
Username: John2000
Email: John@fake.com
Password: easypassword

Name: Spidey
Username: WebDev2023
Email: spidey@fake.com
Password: web

You can also sign up and then log in.









<br/>
<br/>

Chitter Challenge
=================

* Feel free to use Google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or trainee, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit your work by 9:30am Monday morning

Challenge:
-------

As usual please start by forking this repo.

We are going to write a small twitter clone that will allow users to post messages to a public wall.

Good luck and let the chitter begin!

Features:
-------

### Standard Acceptance Criteria
```
As a trainee software engineer
So that I can let people know what I am doing  
I want to post a message (peep) to chitter

As a trainee
So that I can see what others are saying  
I want to see all peeps in reverse chronological order

As a trainee
So that I can better appreciate the context of a peep
I want to see the time at which it was made

As a trainee
So that I can post messages on Chitter as me
I want to sign up for Chitter

As a trainee
So that only I can post messages on Chitter as me
I want to log in to Chitter

As a trainee
So that I can avoid others posting messages on Chitter as me
I want to log out of Chitter
```

Additional requirements:
------

* You don't have to be logged in to see the peeps.
* Trainee software engineers sign up to chitter with their email, password, name and a username (e.g. ewright@digitalfutures.com, password123, Ed Wright, edwright6975).
* The username and email are unique.
* Peeps (posts to chitter) have the name of the trainee and their user handle.
* Your README should indicate the technologies used, and give instructions on how to install and run the tests.

### Extended Acceptance Criteria

```
As a trainee
So that I can stay constantly tapped in to the shouty box of Chitter
I want to receive an email if I am tagged in a Peep

As a trainee
In order to start a conversation as a DFA trainee Software Engineer
I want to reply to a peep from another trainee.
```
