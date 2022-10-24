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

# Tool & Extendstions in IDE Visual Studio Code
1. Syntax highlighting [https://babeljs.io/docs/en/editors/]
2. Code Debug [https://code.visualstudio.com/docs/editor/debugging]
3. Develop Tool: [https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation]
4. Vscode-styled-components




