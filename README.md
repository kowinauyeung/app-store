This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents
- [Get started](#get-started)
- [Environment setting](#environment-setting)
- [Linting](#linting)
- [Running test](#running-test)
- [Check list](#check-list)
- [To-do list](#to-do-list)
  - [Increase code test coverage](#increase-code-test-coverage)
  - [Add row scroll-in animation](#add-row-scroll-in-animation)
  - [Make the app to be PWA](#make-the-app-to-be-pwa)

## Get started
For first time checking out the project, please run the below command:
```
npm install
```
For development, you have to create an environment file name with `.env.local` that follow the instruction of `.env` file that has been mentioned at [Environment setting](#environment-setting) section. This file contains the environment settings. After that, run the below command:
```
npm start
```
*Before committing the codes, please make sure the linting check and unit test are pass.*

For production, you will have to build the project by running the below command:
```
npm run build
```
The files will be generate into `./build/`.

## Environment setting
The `.env` file will contain the environment variables that will be used in different environment such as production and local. Therefore, the environment settings should be reviewed before you start to develop the application or planning to launch the application.

The below illustrate the look and feel of `.env` file:
```
REACT_APP_API_TOP_LIST=https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json
REACT_APP_API_RECOMMENDED_LIST=https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json
REACT_APP_API_APP_LOOK_UP=https://itunes.apple.com/hk/lookup
```
There might be the more environment variable when the application became more bigger.

## Linting
This project is following the JS style guide published by [Airbnb](https://github.com/airbnb/javascript/tree/master/react).

For checking whether the code pass the linting style guide, run the below command:
```
npm run lint
```

## Running test
This project is using [Jest](https://jestjs.io/en/) as test runner gathering with [Enzyme](https://github.com/airbnb/enzyme) and [enzyme-matchers](https://github.com/FormidableLabs/enzyme-matchers).

For running the test watcher, run the below command:
```
npm test
```

For generating the coverage report, run the below command:
```
npm test -- --coverage
```

## Check list
- ✔︎ Search bar
- ✔︎ App listing
  - ✔︎ scrolling pagingation
  - ✔︎ lazy load
  - ✔︎ Odd row to be cropped with round corner
  - ✔︎ Even row to be cropped in circle
- ✔︎ App recommendation
  - ✔︎ App icons to be cropped with round corner
- ✔︎ Use of Redux for development
- ✔︎ Use responsive design
- ✘ Use of SASS/LESS for CSS
- ✔︎ Show loading indicator when fetching data
- ✘ Add row scroll-in animation
- ✘ PWA
- ✔︎ Others

### Using SASS/LESS
React is a component base library and it encourage developer to build the webpage by component so that each component can be developed and debugged individually. I think if applying the SASS or LESS, the css pre-processor which aimed to group the style for resuse, it will not accord to the idea of React. Therefore, I chose to use the original css.

### Other features
- Feature 1

**When there is no result which match the search keywords, there will be a text box displayed.**
<img src="https://i.imgur.com/fFP4Sih.png" width="375">

- Feature 2

**For iOS user, the scroll animation is added.**
<img src="https://i.imgur.com/W4bdFP4.gif" width="375">

### Scroll-in animation and PWA
Because of the limitation of time, this 2 features are not implemented. But they will be developed it in the future.

## To-do list
- Increase code test coverage
- Add row scroll-in animation
- Make the app to be PWA

### Increase code test coverage
As this is the first time I try the test-driven development, there are so many kinds of file that I have no idea how to write the unit test for them, therefore, the unit test coverage is not very high. In the future, I will learn to write the such kind of unit test and increase the code test coverage.

### Add row scroll-in animation
There are 2 ways to add scroll-in animtion, one of them to using css and another one of them is using public library. Because of the limitaion of time, this stage does not implement the feature. However, It will be developed in the future stage.

### Make the app to be PWA
PWA is Progressive web application will make the app to be like a natural app on a device. A PWA should be reliable and fast that providing user a good user experience. In the future stage, this application will be PWA.
