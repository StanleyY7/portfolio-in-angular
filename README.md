# Portfolio Project (Refactored into Angular)

Link - https://portfolioinangular-60438.web.app/ 

![portfolioInAngular](https://user-images.githubusercontent.com/119549394/228769901-6ef484bd-e59f-48d9-963d-4ecd59d5e950.png)

<img width="250" src="https://github.com/StanleyY7/portfolio-in-angular/actions/workflows/main.yml/badge.svg"/>

## Purpose

The main purpose of this project was to solidify my Angular skills by refactoring an existing project of mine into Angular. 

## Design

I chose to refactor my portfolio project as it was a relatively small project which I knew I would have been able to refactor within a reasonable timeframe whilst also doing other projects. As well converting from a "vanilla" project into a new framework is useful to witness first-hand the advantages of the framework itself and to grasp the syntax better as it involves converting any DOM functions into the relevant syntax for the framework (i.e. converting from a vanilla DOM function into React would involve using the functions in the .jsx component files themselves, whilst in Angular since Angular's structure is template based it would involve adding it to the relevant componentName.component.ts file so that it could be used throughout that component and then calling upon it in the componentName.component.html file of that component via Angular's DOM terminology/syntax (i.e. instead of document.querySelecter() it would be @ViewChild(), instead of onClick="something()" it would be (click)="something()"). 

## Features

- Single Page Application consisting of an About, Projects and Skills section
- Original functions from vanilla project refactored into Angular "version"/syntax.
- Hamburger Menu
- Jasmine Tests
- Deployed on Firebase

## Issues Encountered

- Main issues encountered where with different syntax for Angular, specifically with DOM manipulation as Angular has it's own terminology. To resolve this I looked at docs online, watched videos and read articles to understand Angulars use of traditional DOM better and it's terminology. Result was the original functionality of the vanilla portfolio project (i.e. hamburger menu opening and closing, copyright year auto updating and being displayed in footer) works correctly in the Angular version.

- I also encountered minor issues in the App Component tests as I did not have the relevant components added as declarations in the configuration section of that test suite. To resolve this I looked at the terminal output of the error and added each component in accordingly into the declartions section of the configuration section of that test suite. Result was all tests are passing.

- I also encountered issues when creating a Github Workflow Action for the Jasmine Tests as ng test opens up a concurring instance of chrome with a GUI and then tests are ran and displayed on that GUI, to resolve this I looked up online resources on how to have it run only once and for it to not require the instance of Chrome to run the tests and have it run "headless".

## Tech Stack

- Angular
- TypeScript
- HTML
- SCSS
- Jasmine




