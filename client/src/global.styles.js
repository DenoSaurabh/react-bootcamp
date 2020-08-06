import { createGlobalStyle } from 'styled-components';

import TommyBold from './assets/fonts/MADE_TOMMY_Bold_PERSONAL_USE.otf';
import TommyMedium from './assets/fonts/MADE_TOMMY_Medium_PERSONAL_USE.otf';
import TommyThin from './assets/fonts/MADE_TOMMY_Thin_PERSONAL_USE.otf';

export const Fontfaces = createGlobalStyle`
  @font-face {
    font-family: 'Made Tommy Bold';
	src: url(${TommyBold}) format('opentype');

	font-weight: bold;
  }

  @font-face {
    font-family: 'Made Tommy Thin';
	src: url(${TommyThin}) format('opentype');
  }

  @font-face {
    font-family: 'Made Tommy Medium';
	src: url(${TommyMedium}) format('opentype');

	font-weight: normal;
  }

`;

export const GlobalStyle = createGlobalStyle`
  	html {
		font-size: 62.5%;

    
		@media only screen and (max-width: 31.25em) {
			font-size: 20%;
		}
	
		@media only screen and (max-width: 37.5em) {
			font-size: 40%;
		}
	
		@media only screen and (max-width: 75em) { 
			font-size: 56.25%; //1 rem = 9px
		}
	
		@media only screen and (max-width: 56.25em) { 
			font-size: 50%; //1 rem = 8px
		}
		
		@media only screen and (min-width: 112.5em) {
			font-size: 60%; 
		}
	
		@media only screen and (min-width: 156.25em) {
			font-size: 80%; 
		}
	
	
	} 

	body {
		font-family: 'Made Tommy';
		background-color: #F6F6F4;
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}

	
	::-webkit-scrollbar {
		width: 6px;
	}
	
	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}
	
	::-webkit-scrollbar-thumb {
		background: #CEBBAC;
		border-radius: 10px;
	}
	
	::-webkit-scrollbar-thumb:hover {
		background: #CEBBAC;
	}

	::-moz-selection {
		color: #fff;
		background: #F6D3A3;
	}
	
	::selection {
		color: #fff;
		background: #F6D3A3;
	}
`;
