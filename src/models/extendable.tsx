import * as extend from 'extend';

export class Extendable<T = {}> {
	constructor(json?: T) {
		if (json) {
			this.extends(json);
		}
	}

	public extends(json: T) {
		if (typeof (json) === 'string') {
			json = JSON.parse(json);
		}

		extend(true, this, json);
	}

	public clean(properties: Array<string>) {
		var keys = Object.keys(this);
		keys.forEach(key => {
			if (properties.every(p => p !== key)) {
				delete this[key];
			} 
		});
	}

	public haveChanges(changes: T) {
		return Object.keys(changes).some(key => changes[key] !== this[key]);
	}

	public haveData() {
		return Object.keys(this).length > 0;
	}

	public stringify() {
		let json: string = JSON.stringify(this);
		return json;
	}
}