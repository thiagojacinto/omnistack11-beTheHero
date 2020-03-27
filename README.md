# Omnistack11: beTheHero

Project of a voluntary plataform that connects users & NGO's. This is another learning project, to test my own capacity of developing in *JavaScript* and its vast _developer_ environment. 

This is also part of the Omnistack 11.0, and it got there a basic structure that I intend to developer even more with some properties I find useful or want to prove some concepts.

## Table of contents:
- [Using](#using)
- [Printscreens](#printscreens)
- [Structure](#structure)
- [Tests](#tests)
- [Contribute](#contributing-to-omnistack11-bethehero)


## Using

To use it `clone` this repository, then navigate into `/backend` directory, and type in your Terminal:
```
npm start
```
After this, at directory `/web`, also initiate server with:
```
npm start
```
Then you can navigate with your choosen browser to `https://localhost:3000` 

## Printscreens
- Login screen:
![Login screen](./assets/images/beTheHero-login.png)

- Dashboard:
![Dashboard of Incidents](assets/images/beTheHero-dashboard.png)
## Structure

```shell
|beTheHero
├── backend
│   ├── app.js + server.js
│   ├── route.js
│   ├── /controllers
│   ├── /database
│   ├── /utils
│   ├── package.json (express, ...)
│   ├── knexfile.js
│   └── jest.config.js
├── web
│   ├── src
│   │   ├── App.js
│   │   ├── global.css
│   │   ├── index.js
│   │   ├── routes.js
│   │   ├── /pages
│   │   ├── /services
│   │   └── /assets
│   ├── package.json (cra, ...)
├── README.md (this!)
└── LICENSE: MIT
```
## Tests

[Unit](/backend/tests/unit) and [Integration](/backend/tests/integration) tests were developed using [Jest](https://jestjs.io/docs/) & [supertest](https://github.com/visionmedia/supertest#readme). This is a ongoing project, to cover all application logic with correct testing capabilities (@TODO).

To run all implemented tests, you should open the directory `/backend` in your Terminal, and type:
```
npm test
```
Results of those will appear on console of the Terminal, and feel free to take a look at [them](/backend/tests) to understand how it works.

## Contributing to omnistack11-beTheHero

To contribute to omnistack11-beTheHero, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`. 
3. Make your changes and commit them: `git commit -m '<commit_message>'
4. Push to the original branch: `git push origin omnistack11-beTheHero/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
