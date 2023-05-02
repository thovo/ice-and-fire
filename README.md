# FireAndIce with Angular

Angular application connect and use API Ice and Fire. You can read more about the API [Github repo](https://github.com/joakimskoog/AnApiOfIceAndFire) or check directly the API [site](https://anapioficeandfire.com/).

## Features

### Login

This app simulate a login process with NgRx. You don't need to register at all, the login will accept whatever you enter for now.

### Books

Allow you to browse almost every books already written. Based on the API, I implemented a simple filter to help you searching for a specific book. You can click on the ID to browse more information about a book.

### Houses

Allow you to browse almost every houses already existed in the Game of Throne book. Based on the API, I implemented a simple filter to help you searching for a specific house. You can click on the ID to browse more information about a house.

### Characters

Allow you to browse almost every characters already existed in the book. Based on the API, I implemented a simple filter to help you searching for a specific character. You can click on the ID to browse more information about a character.

### Notes

Due to the limit of the API, it will be a little tricky to use correctly the filter. It requires you to input exactly the name, the region, or other information.

The API doesn't support a length value to know the total size when I did the pagination to calculate how many pages I should show, so if you see the number is incorrect, please ignore it for now.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).

## Todos

- Add more tests to increase the coverage
- Implement register and log out
- Move current state of each page into store

## Contribution

Feel free to open a PR or submit an issue, I am happy to work on it.