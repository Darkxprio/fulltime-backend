## Description

Project developed with Nest.js and axios.
We use the API from Github to catch the commits made on this repository and the frontend repository of this same project and server the information to the frontend site.

## Installation

# Cloning the Repository

At first, you have to clone the repository in the directory to you prefer, open the terminal and write/copy this code.

```bash
$ git clone https://github.com/Darkxprio/fulltime-backend.git
```

# Installing

Just if you don't have @nestjs/cli downloaded in your computer, you have to install it to run test, if you have it, pass the next step.

```bash
$ npm install -g @nestjs/cli
```

Now you have to get inside of the directory.

```bash
$ cd fulltime-backend
```

Install npm to download all the modules of the project.

```bash
$ npm install
```

## Running the app

Run the code bellow to start the app.

```bash
# development
$ npm run start
```

## Test

If you want to do some tests of the app, you can run the code bellow in the terminal.

```bash
# unit tests
$ npm run test
```

## Notes

- The app will be deployed in the 4000 port of your computer. If you wanna change it, you can go to 'src/main' and change the listen number.
- The project is developed with Node Version 16.14.2, try to have it or most recent version to run the project or download it from https://nodejs.org/en/download/current
