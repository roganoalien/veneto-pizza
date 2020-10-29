import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import ScrollTop from './ScrollTop';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tailwind.output.css';

WebFont.load({
	google: {
		families: ['Montserrat:300,400,700,900', 'sans-serif']
	}
});

ReactDOM.render(
	<React.StrictMode>
		<ScrollTop>
			<App />
		</ScrollTop>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
