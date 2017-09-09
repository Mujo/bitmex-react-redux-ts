import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StoreState } from './types/index';
import reducers from './reducers';
//import { Tickers } from './models/ticker';


const store = createStore<StoreState>(reducers);

	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<Provider store={store}>
				<div>
					
				</div>
			</Provider>
			, div);
	});
