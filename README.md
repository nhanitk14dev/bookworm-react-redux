# React - Redux Saga - TypeScripts

## I. Installation

- Create a new application: [https://create-react-app.dev/docs/getting-started].
- Download this provided template to create pages:[https://bootstrapmade.com/sailor-free-bootstrap-theme]
- [`Rule define Jsx`](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)

In the project directory, you can run available Scripts:

```
Start Project: npm start

Test: npm test

Build: npm run build

Eject: npm run eject

Server Backend: npm run backend

```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Open [http://localhost:8080](http://localhost:3000) to view the endpoints API in the browser which we can access the data json.

Structure Project:

```
--src
----components
-------header
-------footer
------------Footer.style.tsx
------------index.tsx
----pages // web page screen
-------home
-------users
------------index.tsx
------------EditUser.tsx
----features // redux thunk
----models
----routes
----services
----styles
```

## III. Learning Skills

- [`Typescript`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) or [`TypeScript React Starter`](https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter)
- Components and Lifecycle [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]
- State and Props
- State Management:
  Context,
  [`Redux thunk/toolkit`](https://redux.js.org/usage/writing-logic-thunks)
  Saga.
  [`Redux Typescript`](https://redux.js.org/usage/usage-with-typescript)
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
- Webpack: [`npm i webpack webpack-cli --save-dev`](https://webpack.js.org/guides/getting-started). It is a static module bundler for modern JavaScript applications.
- Lodash: [`npm i --save lodash`](https://lodash.com)
  A modern JavaScript utility library delivering modularity, performance & extras.
  Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
- Bootstrap: [`npm install bootstrap`](https://create-react-app.dev/docs/adding-bootstrap/)

## III. Features App

- Views

  - Middleware - Check authentication for protected routes
  - Login/Logout
  - List User with simple pagination (use server-json)
  - Add New User
  - Edit User with Redux thunk / RTK Query

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

## IV. Notes

- [`React route v6`](https://github.com/remix-run/react-router/blob/main/docs/upgrading/v5.md#upgrade-to-react-router-v6)

  - Remove <Redirect>s inside <Switch>

- [`TS Differences Between Type Aliases and Interfaces`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

- Redux Toolkit: is already written in TypeScript, and its API is designed to provide a good experience for TypeScript usage.

We wrap our content first with `<BrowserRouter>`.

Then we define our `<Routes>`. An application can have multiple `<Routes>`. Our basic example only uses one.
`<Route>`s can be nested. The first `<Route>` has a path of / and renders the Layout component.

The nested `<Route>`s inherit and add to the parent route. So the blogs path is combined with the parent and becomes /blogs.

The Home component route does not have a path but has an index attribute. That specifies this route as the default route for the parent route, which is /.
Setting the path to \* will act as a catch-all for any undefined URLs. This is great for a 404 error page.

The Layout component has `<Outlet>` and `<Link>` elements.
The `<Outlet>` renders the current route selected.
`<Link>` is used to set the URL and keep track of browsing history. Anytime we link to an internal path, we will use `<Link>` instead of `<a href="">`.
The "layout route" is a shared component that inserts common content on all pages, such as a navigation menu.

`Suspense` component, which allows us to show some fallback content such as a loading indicator) while we’re waiting for the lazy component to load.

Should use end slash with single tag such as: [`<br/>, <input />, ...`] in React.