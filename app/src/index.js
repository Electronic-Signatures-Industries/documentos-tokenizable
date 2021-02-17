import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {I18nextProvider} from 'react-i18next';
import i18n from './services/i18n';
import sideReducer from './store/reducers/side'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const composeEnhancers =
  typeof window === 'object' &&
	(window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?  (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose; 

const rootReducer = combineReducers({
	side: sideReducer,
});

const store = createStore(rootReducer, composeEnhancers(
	process.env.NODE_ENV === 'production' 
		? applyMiddleware(thunk) 
		: applyMiddleware(thunk, createLogger())
));

ReactDOM.render(
	<React.StrictMode>
		 <Provider store={store}>
			<I18nextProvider>
				<BrowserRouter i18n={i18n}>
					<App />
				</BrowserRouter>
			</I18nextProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
