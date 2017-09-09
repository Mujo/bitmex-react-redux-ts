import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import { tickerChange } from './reducers';
import reducers from './reducers';
import './index.css';
import { StoreState } from "./types";
import { Tickers } from "./models/ticker";
import TickerTable from "./containers/tickerTable";

const store = createStore<StoreState>(reducers, {
	tickers: new Tickers()
});

ReactDOM.render(
	<Provider store={store}>
		<TickerTable />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
