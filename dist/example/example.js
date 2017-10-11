var isKarma = Boolean(window.__html__ && window.__html__['dist/index']);


function getBySelector(selector) {
	if (isKarma) {
		return $(window.__html__['dist/index']).find(selector);
	}

	return $(selector);

}

$(function () {
	window.db = new DbSqlClass();
	var constant = db.queryConst();

	db.init()
		.then(function (db) {
			getBySelector('.connect_status').html('CONNECT OK');
			return db.isEmpty();

		}).then(function (isEmpty) {
			return db.dropSafe('test1');
		}).then(function () {

			return db.createTable('test1', {
				id : {
					type: constant.TYPE_INT,
					pk : {
						order : constant.ASC
					}
				},
				text : {
					type: constant.TYPE_CHAR + '(20)',
					require : true,
					unique  : true
				}
			});
		}).then(function () {
			return db.isEmpty();
		}).then(function (isEmpty) {
				console.log('isEmpty', isEmpty);
		}).catch(function(err) {
			if(err) throw new Error(err);
		});

	// TODO: clear
	console.log('db.',  db.isOpen());
	var res = isKarma ? window.__html__['dist/index'] : '';

});

