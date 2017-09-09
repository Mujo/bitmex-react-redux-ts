import * as React from 'react';
import { Tickers, Ticker } from "../models/ticker";
import { StoreState } from '../types/index';
//import { ITickersChange } from "../actions";

interface TickerTableProps {
	tickers: Tickers
}
export default class TickerTable extends React.Component<TickerTableProps, StoreState> {

	render() {
		let tickers: Tickers = this.props.tickers;

		return (
			<table className="ticker">
				<thead>
					<tr className="th">
						<td>Symbol</td>
						<td>Last</td>
						<td>Bid Size</td>
						<td>Bid Price</td>
						<td>Ask Price</td>
						<td>Ask Size</td>
						<td>Low</td>
						<td>High</td>
						<td>Funding</td>
						<td>Pred. Funding</td>
					</tr>
				</thead>
				<tbody className="rows">
					{
						 tickers.map((ticker: Ticker) =>
							<tr className="th">
								<td>{ticker.symbol}</td>
								<td>{ticker.lastPrice}</td>
								<td>{ticker.bidSize}</td>
								<td>{ticker.bidPrice}</td>
								<td>{ticker.askPrice}</td>
								<td>{ticker.askSize}</td>
								<td>{ticker.lowPrice}</td>
								<td>{ticker.highPrice}</td>
								<td>{ticker.fundingRate}</td>
								<td>{ticker.indicativeFundingRate}</td>
							</tr>							
						)
					}
					{
						!tickers.length && <tr><td colSpan={10} className="center">EMPTY</td></tr>
					}
				</tbody>
			</table>
		);
	}
}