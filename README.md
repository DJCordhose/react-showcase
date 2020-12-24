# Showcase: React for business applications

[![Build Status](https://travis-ci.org/djcordhose/react-showcase.svg?branch=main)](https://travis-ci.org/djcordhose/react-showcase)

![Screenshot of Application](./reach-showcase.png)

__Given the typical technical and structural requirements of a business application what are the recommended technology choices and architectural nuggets?__

## Architecture / Tech

This is my recommended tech stack for a typical enterprise application. Underlying assumptions of most important requirements
- Long service life (often more than 10 years) and thus good maintainability
- Development with several teams and over the years changing members
- Good structuring possibilities for large and complex applications 
- Fast development speed

http://blog.embarc.de/spicker/#9

### Dependency Management
- https://classic.yarnpkg.com/en/

### Framework
- https://2019.stateofjs.com/front-end-frameworks/
- https://tsh.io/state-of-frontend/#frameworks
- https://djcordhose.github.io/spa-workshop/2020_arch.html#/frameworks
- https://reactjs.org/


### Typing
- https://2019.stateofjs.com/javascript-flavors/
- https://djcordhose.github.io/spa-workshop/2020_arch.html#/ts
- https://djcordhose.github.io/spa-workshop/2020_js_ts_intro.html#/ts
- https://www.typescriptlang.org/
- https://www.typescriptlang.org/docs/handbook/react.html
- https://react-typescript-cheatsheet.netlify.app/
- https://github.com/piotrwitek/react-redux-typescript-guide#react--redux-in-typescript---complete-guide
- Advise
  - Don't overdo it
    - You can go a long way, but you probably shouldn't: https://github.com/gcanti/fp-ts
  - Libraries (shared code, also completely internal) can benefit from a lot of typing
  - Application code mainly benefits from typing
    - Often simply making a component TS can bring a huge benefit without adding any type information at all

### Linting
- https://eslint.org/
- TypeScript can also be used as a linter

### State Management
- https://2019.stateofjs.com/data-layer/
- https://djcordhose.github.io/spa-workshop/2020_arch.html#/innere-struktur
- https://djcordhose.github.io/spa-workshop/2020_arch.html#/state-management
- https://nilshartmann.github.io/react-training/2020_1211_react.html#/t-state
- Redux
  - https://redux.js.org/
  - https://redux-toolkit.js.org/
    - Motivation
      - "Configuring a Redux store is too complicated"
      - "I have to add a lot of packages to get Redux to do anything useful"
      - "Redux requires too much boilerplate code"
    - https://redux-toolkit.js.org/usage/usage-with-typescript
- MobX
  - https://mobx.js.org/react-integration.html
  - https://michel.codes/blogs/mobx6
  - https://nilshartmann.github.io/react-training/2020_1211_react.html#/t-mobx

### Routing
- https://github.com/ReactTraining/react-router
- Routing and Redux
  - Deprecated: https://github.com/reactjs/react-router-redux
  - "official" answer - don't: https://stackoverflow.com/questions/36722584/how-to-sync-redux-state-and-url-hash-tag-params/36749963#36749963

### i18n, l10n
- https://react.i18next.com/
  - https://www.i18next.com/translation-function/interpolation
  - https://github.com/i18next/react-i18next
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
- Deprecated
  - https://momentjs.com/
  - http://numeraljs.com/

### Testing
- `yarn test`
- `yarn e2e`
- https://2019.stateofjs.com/testing/
- https://nilshartmann.github.io/react-training/2020_1211_react.html#/118
- https://reactjs.org/docs/testing.html
- runner for node based unit tests: https://jestjs.io/
  - smoke: does the component render at all (without throwing)?
  - snapshot (https://jestjs.io/docs/en/snapshot-testing, https://reactjs.org/docs/test-renderer.html): only advisable to use as golden master when checking against external (REST) API  
  - full: render to HTML and check lifecycle methods
  - logic: pure unit test for reducers
- https://testing-library.com/docs/react-testing-library/intro/
  - Advocates role based selectors
    - https://www.w3.org/TR/wai-aria/#role_definitions
  - testid is alternative (might not be applicable when using component library)
    - https://testing-library.com/docs/dom-testing-library/faq
    - What if my app is localized and I don't have access to the text in test?
      - This is fairly common. Our first bit of advice is to try to get the default text used in your tests. That will make everything much easier (more than just using this utility). If that's not possible, then you're probably best to just stick with data-testids (which is not bad anyway).
  - https://testing-library.com/docs/guide-which-query
- end2end tests: https://devexpress.github.io/testcafe/
  - https://testing-library.com/docs/testcafe-testing-library/intro
- Testing Redux: https://redux.js.org/recipes/writing-tests
  - some basic tests are made obsolete by redux toolkit and TypeScript checking
- Testing i18n with mocked hook: https://react.i18next.com/misc/testing
- https://www.browserstack.com

### UI Testing is hard if you really mean it

![Tesing Sucks](./testing-sucks.gif)

![Tesing Sucks 2](./testing-sucks-2.gif)

### Build / Deployment
- `yarn build`
- https://create-react-app.dev/docs/deployment/ 
- Development in a monorepo
  - https://lerna.js.org/
  - https://classic.yarnpkg.com/en/docs/workspaces/


### Component Libraries
- https://material-ui.com/
- https://github.com/microsoft/fluentui
- Build your own 
  - https://classic.yarnpkg.com/en/docs/workspaces/
  - https://lerna.js.org/
  - https://blog.harveydelaney.com/creating-your-own-react-component-library/
  -  modes of maintenance
     1. corporate: use is mandatory for all, high risk in quality and suitability of lib
     2. agile: use recommended, usage shows quality and suitability of lib
  -  ownership?

### CSS Framework
- https://tailwindcss.com
  - https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss
  - https://tailwindcss.com/docs/optimizing-for-production

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

### Creation
- https://github.com/reduxjs/cra-template-redux-typescript
  - yarn create react-app my-app --template redux-typescript
- yarn upgrade typescript --latest


In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
