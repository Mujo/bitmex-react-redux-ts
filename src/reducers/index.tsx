import { TickerAction } from '../actions';
import { StoreState } from '../types';
import { Actions } from '../constants';
import { combineReducers } from 'redux';
import { Tickers } from '../models/ticker';
import * as extend from 'extend';

export function tickerChange(
	state: StoreState = {
		tickers: new Tickers()
	},
	action: TickerAction): StoreState {

	switch (action.type) {
		case Actions.TickersChange:
			return { ...state, tickers: extend(true, state.tickers, action.tickers) };
		default:
			return state;
	}
	
}

export default combineReducers<StoreState>({ tickers: tickerChange }); 
