# web-sql-extension
Extension for work this webSql.  

#Script for include ./dist/wed.sql.min.js
Example file in ./dist/index.html  

#Example:
```js
let count = 0;
let setResult = (selector, mess, isOk, noCount) => {

	let $block = $(selector);

	$block
		.text(mess)
		.addClass(isOk ? 'success' : 'error');

	if (!noCount)
		$block.before($('<b/>', {
			text: `TEST #${++count}`,
			class: 'test_number'
		}));
};

$(function () {
	"use strict";

	let db = new WebSqlClass();

	let constant = db.queryConst();

	let fieldsTableTets = {
		id: {
			type: constant.TYPE_INT,
			pk: {
				order: constant.ASC
			}
		},
		text: {
			type: constant.TYPE_CHAR + '(20)',
			require: true,
			unique: true
		}
	};

	const arInsert = [['"text1"'], ['"text2"']];

	let doit = async () => {
		try {
			await db.init();

			setResult('.connect_status', 'CONNECT OK', true);

			// clear data
			await db.dropSafe('test');

			let isEmpty = await db.isEmpty();

			setResult(
				'.db_empty',
				'DATABASE IS EMPTY ' + (isEmpty ? 'YES' : 'NO'),
				isEmpty,
			);

			await db.createTable('test', fieldsTableTets);

			setResult('.create_test_table', 'TABLE `test` IS CREATED', true);

			await db.insert('test', ['text'], arInsert);

			setResult('.inser_to_test_table', 'INSERT INTO `test`', true);

			let rows = await db.select('test', 'id, text');

			console.log('Get rows', rows);

			if (!rows || !rows.length) throw new Error('Empty table after insert');

			let sumIds = rows.reduce((prev, next) => (prev.id || 0) + (next.id || 0));

			setResult('.check_autoincement', 'CHECK AUTOINCREMENT', sumIds === 3);
			setResult('.check_select', 'CHECK SELECT DATA', rows[0].text === 'text1' && rows[1].text === 'text2');

			await db.update('test', {text: '"UPDATE"'}, 'id = 2');

			rows = await db.select('test', 'text', 'id = 2');

			setResult('.check_update', 'CHECK UPDATE', rows[0].text === 'UPDATE');

			await db.remove('test', 'id = 1');

			rows = await db.select('test', 'id');

			setResult('.check_delete_where', 'CHECK DELETE BY CONDITION', rows.length === 1);

			await db.remove('test');

			rows = await db.select('test', 'id');

			setResult('.check_delete_all', 'CHECK DELETE ALL IN TABLE', rows.length === 0);

			await db.dropSafe('test');

			setResult('.drop_exist', 'TABLE `test` IS drop safe (be exist)', true);

			await db.dropSafe('test');

			setResult('.drop_exist_empty', 'TABLE `test` IS drop safe (no exist)', true);

			setResult('.the_end', 'THE END', true, true);

		} catch (e) {
			setResult('.error', e.message);
			throw new Error(e);
		}

	};

	doit();

});

```

### Version
1.0.0   
[Api description](https://github.com/eagle7410/web-sql-extension/blob/master/Api.md)   
---
### People

Author and developer is [Igor Stcherbina](https://github.com/eagle7410)
---
### License
----
MIT

**Free Software**

