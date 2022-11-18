# Bookworm React Redux - TypeScripts

# I. Installation

- Create a new application: [https://create-react-app.dev/docs/getting-started].
We use "npx create-react-app my-app --template typescript" to create with TypeScript
- Create folder structure for application as recommended:
```
--src
----components
-------Header
-------Footer
----pages // web page screen
-------home
-------blogs
-------portfolio
----providers
----redux
----utils
```
- Download this provided template to create pages:[https://bootstrapmade.com/sailor-free-bootstrap-theme]
- [`Rule define Jsx`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)

In the project directory, you can run available Scripts:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

### `npm run build`

### `npm run eject`

Run server backend to access database json:
### `cd \nodejs-backend> json-server --port 8080 --routes routes.json --watch db.json`

### `Account Test Login`
```
email: test@gmail.com 
pass: 1234
```

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

- Other packages:
    + Webpack: [`npm i webpack webpack-cli --save-dev`](https://webpack.js.org/guides/getting-started). It is a static module bundler for modern JavaScript applications.
    + Lodash: [`npm i --save lodash`](https://lodash.com)
    A modern JavaScript utility library delivering modularity, performance & extras.
    Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
    + Bootstrap: [`npm install bootstrap`](https://create-react-app.dev/docs/adding-bootstrap/)

- Note:
  + Should use end slash with single tag such as: [`<br/>, <input />, ...`] in React.
***

# II. React - Redux
## 1. Learning Skills
- [`Typescript`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) or [`TypeScript React Starter`](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)
- Components and Lifecycle [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]
- State and Props 
- State Management: Context, Redux thunk/toolkit & Saga. [`Redux Typescript`](https://redux.js.org/usage/usage-with-typescript)
- [`React Hooks`](https://reactjs.org/docs/hooks-effect.html)
- Forms: [`React hook Form`](https://react-hook-form.com/get-started/#TypeScript), [`Formik`](https://formik.org).
- React Portals
- Modern CSS ([`Styled Components Typescript`](https://styled-components.com/docs/api#typescript))
- [`Learn React Code-spliting`](https://reactjs.org/docs/code-splitting.html)
- [`React Router`]̣(https://v5.reactrouter.com/web/example/basic), (https://github.com/remix-run/react-router)
- Custom Hook
- Error Boundaries
- Higher-Order Components
- Profiler
- React-Query
## 2.  Features In This Demo
- Views
    - Login page
    - List paging
    - Detail page
    - Add / Update information
- Requirements:
    - Typescript
    - React hook form
    - Using React functional component, hooks (custom hook)
    - [`Lazy loading route`](https://github.com/remix-run/react-router/tree/main/examples/lazy-loading): Using React.lazy() and dynamic import
    - [CSS framework - Styled component](https://styled-components.com). [Follow](https://github.com/styled-components/styled-components-website)
    - Use redux to manage state
    - [React router](https://reactrouter.com/en/main) [https://reactjs.org/docs/code-splitting.html#route-based-code-splitting]
      Example here: [https://github.com/remix-run/react-router/tree/dev/examples]
    - Error boundary
    - React query
    - Higher-Order Components
    - Profiler
    - React Portals
    - Use ['React-bootstrap bootstrap@4.6.0'](https://react-bootstrap.github.io/)
    - Use ['styled-icons'](https://github.com/styled-icons/styled-icons)(https://styled-icons.dev)

## 3. Code Explained

  We wrap our content first with `<BrowserRouter>`.

  Then we define our `<Routes>`. An application can have multiple `<Routes>`. Our basic example only uses one.
  `<Route>`s can be nested. The first `<Route>` has a path of / and renders the Layout component.

  The nested `<Route>`s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.

  The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
  Setting the path to * will act as a catch-all for any undefined URLs. This is great for a 404 error page.

  The Layout component has `<Outlet>` and `<Link>` elements.
  The `<Outlet>` renders the current route selected.
  `<Link>` is used to set the URL and keep track of browsing history. Anytime we link to an internal path, we will use `<Link>` instead of `<a href="">`. 
  The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.

  `Suspense` component, which allows us to show some fallback content such as a loading indicator) while we’re waiting for the lazy component to load.


## 4. Important

  - Always import file to to top file like `import axios from 'axios'` to solve the error `Import in body of module; reorder to top`
  - [`React route v6`](https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md#upgrade-to-react-router-v6)
    + Remove <Redirect>s inside <Switch>

  - [`TS Differences Between Type Aliases and Interfaces`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

  - Redux Toolkit: is already written in TypeScript, and its API is designed to provide a good experience for TypeScript usage.

  - [`createStore`](https://redux.js.org/api/createstore): holds the complete state tree of your app

# Tool & Extendstions in IDE Visual Studio Code
1. Syntax highlighting [https://babeljs.io/docs/en/editors/]
2. Code Debug [https://code.visualstudio.com/docs/editor/debugging]
3. Develop Tool: [https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation]
4. Vscode-styled-components
5. [`Typescript React code snippets`](https://marketplace.visualstudio.com/items?itemName=infeng.vscode-react-typescript)
6. Redux DevTools extendstion


## Redux Thunk 
 - https://redux.js.org/usage/writing-logic-thunks: A thunk function accepts 2 arguments: store dispatch + store getState method
  ( "a piece of code that does some delayed work", redux-thunk middleware to be added to the Redux store as part of its configuration)


## Typesafe API calls from a Redux Saga generator function

- We use `Contact` pages to demo Redux Saga
- Remove un-use code and folder with Redux saga
- Install [`Redux Saga`](https://redux-saga.js.org/docs/introduction/GettingStarted)
- https://redux.js.org/usage/usage-with-typescript
- Combine Reducer Rule: https://redux.js.org/api/combinereducers

