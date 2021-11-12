# Code Challenge - Squid Game

![squid-game-code-challenge](https://s.yimg.com/ny/api/res/1.2/5vFk0pZzl_cc7mgHXXnHmA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https://s.yimg.com/uu/api/res/1.2/4F3hRGPoPDqFQqNFBTJ9uQ--~B/aD00ODA7dz00ODA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/popsugar_entertainment_382/73d38c94007cf83b28e9111198fe850e)

*Disclaimer* We obviously don't endorse violence in any way, nor do we have any affiliation with the TV show Squid Game. It's all just a bit of fun. May contain slight spoilers.

Welcome to the Squid Game! If you haven't watched the show its on Netflix and not a requirement for this code challenge, although you should still probably watch it cos its great! The basic premise (of the show and the structure of this challenge) is that there are various `games` to play, some of which you may have played as a child. The only difference being that there are now `guards` in each game with machine guns! There are 456 `players` who play the games and if they don't successfully complete each game they are eliminated (literally).

## Instructions & Requirements

*Please note* Don't spend any more than 2-3 hours on this challenge. We're not looking for perfect code, we're looking for clean code and something to create a conversation in the next interview round. Feel free to change the existing db entity structure as you wish to complete the tasks below.

We have setup a basic backend service to simulate the Games, Guards and Players. The code is Node with Express (Typescript), Docker is setup, there is an ORM-based data entity structure, routes/endpoints and swagger docs. There are also factories, seeders and a basic setup for unit tests (Jest). It should all work, so you can just get started.

* First, get it running and seed the database. Get acquainted with the code structure + the existing endpoints via Swagger (see 'Getting started' section below for setup etc).

* Update the `number` property in the Player entity and then ensure that a Player's number is stored and displayed as 3 digits/characters (i.e. 001) with leading zeros accordingly. Also, add some additional Player properties such as `debt` (random money they owe), `dob`, `address`, `city`, and `phone`. (_hint_ don't spend too long on this). Feel free to clear the database and re-seed after making these changes.

* Create a new Death entity, routes/endpoints etc to store and manage Deaths. Each Death is associated with a Player and Game. And upon each Death, a cash `prize` needs to be awarded equalling the dead players debt. The total winning prize is the sum of all deaths.

* Create a new endpoint (under Death) to retrieve the 3rd party data about Deaths that occurred and store them. You can find the 3rd party endpoint here: https://mockbin.org/bin/ec91375e-7a39-4674-8ddc-f4c4be0ed084

* Create a new endpoint to work out who the winning Player was and how much they won using the 3rd party Deaths data.

* Keep swagger updated for all points above. Code commenting is also important.

* Write unit tests for the new Death entity and new endpoints.

* Please update the 'Candidate notes' section below to identify any issues, how you overcame them, important updates etc.

BONUS POINTS (only if you're bored):
* Improve the unit tests for other routes etc
* Add Caching for 3rd Party API
* Validators and standardised responses could be useful
* Any Typescript errors? (_hint_ run linting?)

## Getting started

### To install

- Local Node preferred version is v16. Install it using NVM `brew install nvm`.

- Copy .env-example and rename to .env

- Install dependencies using this command `npm install`

### To start

- Run `docker-compose up`

- Go to [http://localhost:3000/](http://localhost:3000/)

- Adminer DB GUI is also available via [http://localhost:8886/](http://localhost:8886/?pgsql=postgres%3A5438&username=postgres&db=postgres&ns=public) _Note:_ password will be password

_Alternatives:_

- To run without Docker start a local Postgres service (trying using [DBngin](https://dbngin.com/)) and then run `npm run start`

### Seeders

- Open new terminal tab, run `docker ps` and copy the container id of this-service-api\*
- Run `docker exec -it <container id> bash`
- Run all seeders with this command `npx sequelize-cli db:seed:all --debug`

_Notes:_

- To create a new seeder file use this command `cd src && npx sequelize-cli seed:generate --name <seeder_name e.g. add-something>` (without bash into docker container)
- To seed with specific seeder file use this command `npx sequelize-cli db:seed --seed <seeder_file.js>`

### Run Unit Tests

- Run `npm run test` (TODO: currently only fake test, need to add tests)

### Useful Docker Commands

- To remove the containers run `docker-compose rm`
- To remove the images run `docker images` and then remove each image `docker rmi <this-service-api_*>`
- To remove the volume run `docker volume list` and then remove the volume `docker volume rm <this-service-api_*>`

### Compile TypeScript

```
npm run build
```

### Linting

```
npm run lint
```

### Build OpenAPI specification

```
npm run openapi
```

### OpenAPI docs

http://localhost:3000/docs

### Candidate notes

* Write your notes here
