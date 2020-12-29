# Codenames
Full stack implementation of the codenames game, using react for frontend, and tornado backend.
Data is stored in MongoDB. 

This is all using free cloud infra

## Application Structure

The idea is long-polling happening on the frontend to the backend service for game state.
The frontend will handle all codenames logic, and the backend will allow 
creation of sessions, and keeping global state across all cients.
Each game will keep it's session for 24 hours (This is set in the TTL of each key)

The sessions are stored in an mongoDB key-value pair. The key is simply an UUID for the game session 
generated when the game is first started, and the value is a JSON representing the state
of the game.

## Deployment
Codenames can be run local via docker-compose, and run on premise if you want

The gcp hosted version of the game is at: TBD

I am running this on al the free tier of mongoDB and google cloud run.

If I need more scale, will need to probably switch to k8s and pay for a DB (donate monies to me)

I am going to be writing the CI/CD soon. Just going to use free stuff.

## Local Development

We use docker-compose to orchestrate our local containers.

There are 4 containers

The Web Server, code contained in backend (Python-Tornado)

The Frontend, code contained in Frontend (Node-React)

The DB, both mongo and mongo-express containers are the mongoDB


`make up` will start all the containers and you will be able to visit them in the browser.

You can now visit the server at localhost:8888

The code in the web server and on the front end are all hot-reloading by default, so you can change the code
and get
results instantly.

`make exec-web` will exec you into the shell of the web container

I use PyCharm and set my interpreter to the web service in the docker-compose file.


## FAQ

Why did I use Tornado? 

I am familiar with Python, and Tornado looked like the best framework for long-polling

Why did I use React?

I am familiar with react, and I wanted a front end that could handle all the game logic without messy JS.

Why did I use MongoDB?

MongoDB was free, and had the requirements I needed (key value storage with TTLs)