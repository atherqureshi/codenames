# Codenames
Web implementation of the codenames board game, using react for frontend, and tornado backend.
Data is stored in redis. This is all hosted using free cloud infra

The gcp hosted version of the game can be reached at: TBD

![Screenshot](capture.PNG)

## Application Structure

The idea is long-polling happening on the frontend to the backend service for game state.
The frontend will handle all codenames logic, and the backend will allow 
creation of sessions, and keeping global state across all clients.

Each game will keep its session for an hour (This is set in the TTL of each key) after each creation or update.
If redis goes down, I can refresh the sessions on next update.

I am using CORS ie. there's a proxy to connect to route the HTTP calls to the backend service.

The sessions are stored in redis as key-value pair. The key is simply a UUID for the game session 
generated when the game is first started, and the value is a JSON representing the state
of the game.

Containers  | Explanation
------------- | -------------
codenames-frontend  | React/TSX node application that hosts the front end assets
codenames-backend  | Python Tornado service managing game state and sessions
redis | in-memory key value store, used to store game state per session with TTLs

## Deployment

Codenames can be run local via docker-compose, and run on premise if you want (Just get to localhost:3000)

I will also need to use Tornado with some sort of multithreading system / load balancing in app, right now local is 
single-threaded server.

## Local Development

We use docker-compose to orchestrate our local containers. Once you have run the containers use:

You can visit the frontend server by visiting: `localhost:3000`
- Note, you need to run `yarn`, and `yarn build` on host PRIOR to running the container, this will build your dependencies that will then be copied into the container
- Node: https://nodejs.org/en/download/package-manager/
- yarn: https://classic.yarnpkg.com/en/docs/install/

You can also hit the backend server by hitting `localhost:8000`

Command  | Explanation
------------- | -------------
`make up` | Starts up all containers (Press `crtc-c` or `cmd-c` to stop them all
`make exec-web` | Will shell you into the backend container
`make build-web` | Rebuilds the Python container (i.e. you add dependencies)
`make build-node` | Rebuilds the Node container (i.e. you add dependencies)

The code in the web server and on the front end are all hot-reloading by default, so you can change the code
and get results instantly.

I use PyCharm and set my interpreter to the web service in the docker-compose file.

## FAQ

Why did I use Tornado? 

I am familiar with Python, and Tornado looked like the best framework for long-polling

Why did I use React?

I am familiar with react, and I wanted a front end that could handle all the game logic without messy JS.

Why did I use Redis?

Had the requirements I needed (key value storage with TTLs) and is fast. Very easy to test locally. It is costly, 
but I am just hosting it on a container and hoping it doesn't crash or gcp doesn't charge me. Also, if it crashes, 
I can take the game state from a client!

Why did you do this? Folks have already made this!

I wanted to build this simple SaaS to showcase as a project, and go full e2e on things I work with
everyday. I also wanted to see how far I can push free cloud tier machines. This is like a cookier-cutter application 
that other developers could potentially use to quickly bootstrap their applications.
