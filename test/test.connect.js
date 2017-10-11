var db = new DbSqlClass();

describe("Db connect",  () => {
	it("Is ok", () => {

		db.init()
			.then(function () {
				expect(true).toBe(true);
			}).catch(function(err) {
				if(err) throw new Error(err);
				console.log('err', err);
				expect(true).toBe(false);
			});

	});

	it("Is not open", () => {
		// db.init().then(function () {
		// 	expect(true).toBe(db.isOpen());
		// })
	});



});
