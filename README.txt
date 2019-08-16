# Running the app
* Start mongodb with 'mongod'
* Seed the database with npm run seeds, in the server directory
* Start the node server with npm run server:dev in the server directory
* Start the client by running npm run serve in the client directory

# Initial Setup

## Frontend
* Run: 'vue create app myapp' in the directory of your project. Where 'Myapp' is the name of the project
* Rename newly created app directory to 'client' by running 'mv myapp client'
* In the app folder, remove the .gitignore and README.md if not needed
* Remove the HelloWorld.vue component and other boilerplate from App.vue
* Create a services folder if needed, to handle fetch requests

## Backend
* Create a server directory in the project and move into it
* Run 'npm init -y' to create a package json
* Install libraries with 'npm install express mongodb body-parser'
* Install nodemon and cors as a dev dependency with 'npm install -D nodemon cors'
* Add seed and server:dev scripts to run the server in development mode
* Create a server.js, and router.js. The router can do in a helpers subdirectory.
