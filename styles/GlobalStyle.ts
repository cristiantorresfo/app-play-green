import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html,
body {
width: 375px;
height: 100%;
  background-color: rgb(242, 243, 243);
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`

export default GlobalStyle
