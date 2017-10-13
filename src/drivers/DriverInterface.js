export default class DriverInterface {
	queryConst() {}
	isOpen() {}
	init() {}
	dropSafe (table) {}
	createTable(table, fields = {}) {}
	select (table, fields, where, limit, offset) {}
	insert(table, fields, arInsert) {}
	isEmpty () {}
	update (table, setFields, where) {}
	remove (table, where) {}
}
