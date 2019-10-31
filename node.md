Deployment notes

Web servers run web applications
-accept requests from clients
-sends back responses

Web servers are a software running on someone's machine

[client] === [web server (multiple web applications/apis)]

Dev Process

-write code
-commit and push
-profit (it's deployed automatically to heroku)

Steps to prepare API for deployment to Heroku

-make the port dynamic 
-setup a "start" script that uses "node" not nodemon to run on server
The enviorment is the platform (the place/ operating system/machine) where the application is runnung.