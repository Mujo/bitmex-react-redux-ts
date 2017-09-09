import { Actions } from '../constants';
import { Tickers } from '../models/ticker';

export interface ITickersChange {
	type: Actions.TickersChange,
	tickers: Tickers
}

export type TickerAction = ITickersChange;
export function TickersChange(tickers: Tickers) {
	return {
		type: Actions.TickersChange,
		tickers
	};
}
