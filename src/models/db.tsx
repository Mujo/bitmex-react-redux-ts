import { LocalStorage } from 'node-localstorage';
import * as extend from 'extend';
let localStorage: LocalStorage = new LocalStorage('./db');

export class DB {

	public tables: Array<string>;
	//public config: any;


	constructor(
		private dbKey: string
	) {

	}
	public init(defaultDb: any, memoryDb?: any) {
		let _db: any = {};
		_db = defaultDb || {};
		// _db.config = extend(true, {}, {
		// 	version: 1,
		// 	debug: false
		// }, _db.config);
		this.tables = Object.keys(_db);
		extend(true, this, _db, memoryDb);
	}

	public load(memoryDb?: any) {
		let localDb = localStorage.getItem(this.dbKey);
		if (localDb) {
			localDb = JSON.parse(localDb);
			extend(true, this, localDb);
			this.tables = Object.keys(localDb);
			// this.config = extend(true, {}, {
			// 	version: 1,
			// 	debug: false
			// }, this.config);
			if (memoryDb)
				extend(true, this, memoryDb);
			console.log("database '" + this.dbKey + "' loaded.");
			return true;
		} else {
			//console.log("database '" + this.dbKey + "' not found! saving default database...");
			console.log("database '" + this.dbKey + "' not found!");
			//this.save();
			return false;
		}
	}

	public save() {
		let temp_db: any = {};
		this.tables.forEach((e: string) => {
			temp_db[e] = this[e];
		});
		localStorage.setItem(this.dbKey, JSON.stringify(temp_db));
		console.log("database '" + this.dbKey + "' saved.");
		return true;
	}
}