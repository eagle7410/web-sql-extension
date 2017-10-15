<a name="WebSQL"></a>

## WebSQL
Class for working with WebSql

**Kind**: global class  

* [WebSQL](#WebSQL)
    * [.queryConst()](#WebSQL+queryConst) ⇒ <code>Object</code>
    * [.isOpen()](#WebSQL+isOpen) ⇒ <code>boolean</code>
    * [.init(params)](#WebSQL+init) ⇒ <code>Promise</code>
    * [.dropSafe(table)](#WebSQL+dropSafe) ⇒ <code>Promise</code>
    * [.createTable(table, fields)](#WebSQL+createTable) ⇒ <code>Promise</code>
    * [.select(table, fields, where, limit, offset)](#WebSQL+select) ⇒ <code>Promise</code>
    * [.insert(table, fields, arInsert)](#WebSQL+insert) ⇒ <code>Promise</code>
    * [.isEmpty()](#WebSQL+isEmpty) ⇒ <code>Promise</code>
    * [.update(table, setFields, where)](#WebSQL+update) ⇒ <code>Promise</code>
    * [.remove(table, where)](#WebSQL+remove) ⇒ <code>Promise</code>

<a name="WebSQL+queryConst"></a>

### webSQL.queryConst() ⇒ <code>Object</code>
Constant for web-sql

**Kind**: instance method of <code>[WebSQL](#WebSQL)</code>  
<a name="WebSQL+isOpen"></a>

### webSQL.isOpen() ⇒ <code>boolean</code>
Check db connect is open

**Kind**: instance method of <code>[WebSQL](#WebSQL)</code>  
<a name="WebSQL+init"></a>

### webSQL.init(params) ⇒ <code>Promise</code>
Init connect.

**Kind**: instance method of <code>[WebSQL](#WebSQL)</code>  

| Param |
| --- |
| params | 

<a name="WebSQL+dropSafe"></a>

### webSQL.dropSafe(table) ⇒ <code>Promise</code>
Delete table if exist

**Kind**: instance method of <code>[WebSQL](#WebSQL)</code>  

| Param | Type |
| --- | --- |
| table | <code>string</code> | 

<a name="WebSQL+createTable"></a>

### webSQL.createTable(table, fields) ⇒ <code>Promise</code>
Create table.

**Kind**: instance method of <code>[WebSQL](#WebSQL)</code>  

| Param | Type | Description |
| --- | --- | --- |
| table |  | string |
| fields | <code>Object</code> &#124; <code>null</code> |  |

<a name="WebSQL+select"></a>

### webSQL.select(table, fields, where, limit, offset) ⇒ <code>Promise</code>
Select from table.

**Kind**: instance method of <code>[WebSQL](#WebSQL)</code>  

| Param |
| --- |
| table | 
| fields | 
| where | 
| limit | 
| offset | 

<a name="WebSQL+insert"></a>

### webSQL.insert(table, fields, arInsert) ⇒ <code>Promise</code>
Insert to table.

**Kind**: instance method of <code>[WebSQL](#WebSQL)</code>  

| Param | Type |
| --- | --- |
| table | <code>string</code> | 
| fields | <code>string</code> | 
| arInsert | <code>array</code> | 

<a name="WebSQL+isEmpty"></a>

### webSQL.isEmpty() ⇒ <code>Promise</code>
Check db is empty.

**Kind**: instance method of <code>[WebSQL](#WebSQL)</code>  
<a name="WebSQL+update"></a>

### webSQL.update(table, setFields, where) ⇒ <code>Promise</code>
Update table

**Kind**: instance method of <code>[WebSQL](#WebSQL)</code>  

| Param | Type |
| --- | --- |
| table | <code>string</code> | 
| setFields | <code>string</code> | 
| where | <code>string</code> &#124; <code>null</code> | 

<a name="WebSQL+remove"></a>

### webSQL.remove(table, where) ⇒ <code>Promise</code>
Remove record from table.

**Kind**: instance method of <code>[WebSQL](#WebSQL)</code>  

| Param | Type |
| --- | --- |
| table | <code>string</code> | 
| where | <code>string</code> | 

