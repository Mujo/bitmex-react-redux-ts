// import * as React from 'react';
// import { Store } from "react-redux";

// import TickerTable from './tickerTable';
// import { Tickers } from "../models/ticker";
// import { ITickersChange } from "../actions";
// import { StoreState } from "../types";

// export interface HomeContainerProps {
// 	store: Store<StoreState>
// }

// export interface HomeContainerState { 
// 	tickers: Tickers;
// 	onTickersChange: () => ITickersChange;
// }


// export default class HomeContainer extends React.Component<HomeContainerProps, HomeContainerState> {
// 	render() {
// 		console.log(this.props, this.state);

// 		let tickers: Tickers = this.state.tickers || new Tickers();
// 		return (
// 			<div id="bot" className="container">
// 				<h1>BitMexBot - Home</h1>
// 				<TickerTable tickers={tickers} onTickersChange={this.state.onTickersChange} />
// 			</div>
// 		);
// 	}
// }