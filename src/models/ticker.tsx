
import { Extendable } from "./extendable";

export class Tickers extends Array<Ticker> {

}

export class Ticker extends Extendable<Ticker> {
	public key: string;
	public symbol: string;
	public lastPrice: number;
	public bidSize: number;
	public bidPrice: number;
	public askPrice: number;
	public askSize: number;
	public lowPrice: number;
	public highPrice:number;
	public indicativeFundingRate: number;
	public fundingRate: number;
}