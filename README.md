# Getting Started
  - install packages in the main and client folder using `npm` or `yarn`

## Available Scripts
  Main folder (Node server):
  - `start`: default script to be run if hosted on a server
  - `server`: used in local development leveraging `nodemon` for auto rebuild on file change
  - `client`: allows running the client app from main folder
  - `dev`: used in local development, allows to run multiple apps simultaneously from a single CLI

  Client folder (React app):
  - `start`: local development file watcher (default CRA script)
  - `build`: creates production build bundle for the client (default CRA script)

### Production mode (on your local machine)
 - Step 1: run `yarn build` in client folder to create production bundle (on production the react-query development console is removed)
 - Step 2: run `yarn start` in main folder, opening the url showed in the CLI (should be http://localhost:3030) will allow you to interact with the client build folder which is being served via the express server