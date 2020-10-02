# Matt's Notes

#### Docker
As per bellow instructions, please note I updated the Dockerfile to `CMD ["node", "runServer.js"]`
Unfortunately I ran out of time to implement a Docker-Compose file that would spin up a database, backend and frontend container.

#### Install Procedure
It assumes MongoDB database named novoresume.
To start database
```
mongod
mongo
use novoresume
```
To start app
```
yarn start
cd client && yarn start
```

#### Tests
The app was implemented via TDD and BDD as appropriate.
To run the server tests
```
yarn test
```
To run the client tests
```
cd client && yarn test
```

#### Status
There are a number of items that need to be implemented to reach MVP.
Additionally I feel the frontend needs a refactor in addition to improving user feedback on forms.
Scoped css if the form of something like CSS Modules would also be a good addition.
The test suite will assit in refactorings.
Also the signin process needs to be more secure.


# Novorésumé Challenge

Should you accept the challenge, we want you to create a mini e-commerce web application based on the provided mock-ups. You can find the mock-ups in the **mockups** folder, and the image assets in **frontend/public/images**.

### Functional requirements:
The user should be able to:
- Sign up, log in, log out
- Add items to the basket
- Add billing information
- Save their order and billing information
- Generate a PDF of their order (Hint: The library called [wkhtmltopdf](https://www.npmjs.com/package/wkhtmltopdf) is useful for this and already installed in the app folder, and will be installed in the Docker image once you build it)

### Technical requirements:
- The backend code should have unit tests for 3 functions of your choice
- The code should be clean and follow the best practices
- Your implementations and changes to Dockerfile (if any) should be documented in the README file
- The app should be running and functioning properly on Docker
- You should do the assignment by yourself (no copy/paste from other projects)

### Stack requirements:
- Frontend: React
- Backend: Node.js, Express.js, MongoDB
- CI: Docker

### Bonus points will be given for:
- Adding SSL by using a self-signed certificate
- Using GRUNT or Webpack
- Preventing XSS attacks
- Using SASS or LESS
- Writing unit tests for frontend

### Library tips:
- Authentication: Passport.js
- Unit testing: Mocha, Chai
- Generating the PDF: wkhtmltopdf, PhantomJS

### How to run the app:

To run the app locally without Docker, in the project folder, run:
```
nodemon app.js
```

To build the Docker image, in the project folder, run:
```
docker build -t ${imageNameOfYourChoice} .
```

To see the Docker images on your machine:
```
docker images
```

To remove all the Docker images on your machine:
```
docker rmi $(docker images -a -q)
```

To run the Docker container from the newly built image, in the project folder, run:
```
docker run --name ${containerNameOfYourChoice} -p 9007:9007 -d ${imageNameOfYourChoice}
```

To see the Docker containers on your machine:
```
docker ps (for running containers)
docker ps -a (for stopped containers)
```

To stop and remove all the Docker containers on your machine:
```
docker stop $(docker ps -a -q)
docker rm $(docker ps -a -q)
```

The app now should be running on http://localhost:9007, displaying a 'Hello 
World' text.

#### Good luck, and may the force be with you!
