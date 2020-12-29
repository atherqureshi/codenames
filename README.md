# Codenames
Web implementation of the codenames board game, using react for frontend, and tornado backend.
Data is stored in MongoDB. This is all hosted using free cloud infra

The gcp hosted version of the game canbe reached at: TBD

## Application Structure

The idea is long-polling happening on the frontend to the backend service for game state.
The frontend will handle all codenames logic, and the backend will allow 
creation of sessions, and keeping global state across all cients.
Each game willkeep its session for 24 hours (This is set in the TTL of each key)

I am using CORS ie. there's a proxy to connect to route the HTTP calls to the backend service.

The sessions are stored in an mongoDB key-value pair. The key is simply an UUID for the game session 
generated when the game is first started, and the value is a JSON representing the state
of the game.

Containers  | Explanation
------------- | -------------
codenames-frontend  | React/TSX node application that hosts the front end assets
codenames-backend  | Python Tornado service managing game state and sessions
mongodb, mongodb-express  | NoSQL DB, used to store game state per session with TTLs

## Deployment

Codenames can be run local via docker-compose, and run on premise if you want (Just get to localhost:3000)

I will be running this on the free tier of mongoDB and google cloud run + writing a CI/CD.
I will also need to use Tornado with some sort of multithreading system / load balancing in app, right now local is 
single-threaded server.

## Local Development

We use docker-compose to orchestrate our local containers. Once you have run the containers use:

You can visit the frontend server by visiting: `localhost:3000`

You can also hit the backend server by hitting `localhost:8000`

Command  | Explanation
------------- | -------------
`make up` | Will build and start up all containers (takes some time)
`make exec-web` | Will shell you into the backend container

The code in the web server and on the front end are all hot-reloading by default, so you can change the code
and get results instantly.

I use PyCharm and set my interpreter to the web service in the docker-compose file.

## FAQ

Why did I use Tornado? 

I am familiar with Python, and Tornado looked like the best framework for long-polling

Why did I use React?

I am familiar with react, and I wanted a front end that could handle all the game logic without messy JS.

Why did I use MongoDB?

MongoDB was free, and had the requirements I needed (key value storage with TTLs)

Why did you do this? Folks have already made this!

I wanted to build this simple SaaS to showcase as a project, and go full e2e on things I work with
everyday. I also wanted to see how far I can push free cloud tier machines. This is like a cookier-cutter application 
that other developers could potentially use to quickly bootstrap their applications.
