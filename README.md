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
- Components and Lifecycle [https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/]
- State and Props 
- State Management: Context, Redux thunk/toolkit & Saga.
- React Hooks
- Forms: React hook Form, Formik.
- React Portals
- Modern CSS (Styled Components)
- [`Learn React Code-spliting`](https://reactjs.org/docs/code-splitting.html)
- [`React Router`](https://github.com/remix-run/react-router)
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

# Tool & Extendstions in IDE Visual Studio Code
1. Syntax highlighting [https://babeljs.io/docs/en/editors/]
2. Code Debug [https://code.visualstudio.com/docs/editor/debugging]
3. Develop Tool: [https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation]
4. Vscode-styled-components

