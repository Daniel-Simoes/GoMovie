import { createGlobalStyle } from 'styled-components';

import image from '../assets/image.svg';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing: border-box;
}

body {
  background: #F0F0F9 url(${image}) no-repeat 90% top;
}

#root {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 20px;
}

body, input, button {
  font: 16px sans-serif;
}

button {
  cursor: pointer;
}

`;

