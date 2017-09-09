import TickerTable from '../components/tickerTable';
//import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
// import { Tickers } from '../models/ticker';

export function mapStateToProps({ tickers }: StoreState) {
	return {
		tickers
	};
}

// export function mapDispatchToProps(dispatch: Dispatch<actions.ITickersChange>) {
// 	return {
// 		tickersChange: (tickers: Tickers) => dispatch(actions.TickersChange(tickers)),
// 	};
// }

export default connect(mapStateToProps)(TickerTable);
// export default connect(mapStateToProps, mapDispatchToProps)(TickerTable);
