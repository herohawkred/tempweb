import { createGlobalStyle } from "styled-components";
import NotoSansKR from './fonts/noto-sans-kr-v13-latin-regular.woff'

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'NoTosansKR';
  src: local('NoTosansKR'),
  url(${NotoSansKR}) format('woff');
  
`;
export default FontStyles;