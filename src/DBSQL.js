import QueryBuilder from "./QueryBuilder";

class DBSQL {
	constructor() {
		const that  = this;
		that._db    = null;
		that._query = new QueryBuilder();
		that._tx    = null;
		that._dbParams = {
			name       : 'web_db',
			version    : '0.0.1',
			nameDisplay: 'Database in browser',
			prevSize    : 200000,
		};
	}

	queryConst() {
		return this._query.constant()
	}

	isOpen() {
		return Boolean(this._db !== null);
	}

	/**
	 *
	 * @param params
	 * @returns {Promise}
	 */
	init(params = {}) {
		const that = this;

		let option = {...that._dbParams, ...params};

		return new Promise((ok, bad) => {
			that._db = openDatabase(
				option.name,
				option.version,
				option.nameDisplay,
				option.prevSizes
			);

			if (!that._db) {
				return bad('Database not create');
			}

			that._db.transaction(tx => {
				that._tx = tx;
				ok(that);
			})

		})
	}

	/**
	 *
	 * @param table {string}
	 * @returns {Promise}
	 */
	dropSafe (table) {
		let that = this;

		return new Promise((ok, bad) => {
			this._tx.executeSql(
				`DROP TABLE IF EXISTS ${table}`,
				[],
				() => ok(),
				(tx, err) => bad(err)
			);
		});
	}

	/**
	 *
	 * @param table string
	 * @param fields {{fieldName : object,..}| null}
	 * @returns {Promise}
	 */
	createTable(table, fields = {}) {
		let that = this;

		return new Promise((ok, bad) => {
			that._tx.executeSql(
				that._query.createTable(table, fields),
				[],
				(tx, res) => ok(res),
				(tx, err) => bad(err)
			);
		});
	}

	/**
	 *
	 * @param table
	 * @param fields
	 * @param where
	 * @param limit
	 * @param offset
	 * @returns {Promise}
	 */
	select (table, fields, where, limit, offset) {
		let that = this;

		return new Promise((ok, bad) => {
			that._tx.executeSql(
				that._query.select(table, fields, where, limit, offset),
				[],
				(tx, res) => ok(res.rows),
				(tx, err) => bad(err)
			);
		});
	}

	/**
	 *
	 * @returns {Promise}
	 */
	isEmpty () {
		let that = this;

		return new Promise((ok, bad) => {
			that.select('sqlite_master', '*', 'type="table" AND name NOT IN ("__WebKitDatabaseInfoTable__", "sqlite_sequence")', 1)
				.then(rows => ok(Boolean(!rows.length)))
				.catch(err => bad(err));
		});

	}

}

window.DbSqlClass = DBSQL;

