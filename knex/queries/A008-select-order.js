const knex = require("../../knex/config/database");

const sleect = knex('users').select('id', 'first_name')
    .where('first_name', 'like', '___')
    .orWhere('first_name', 'like', '%na')
    .orderBy('id', 'asc')
    .orderBy('id', 'desc');

console.log(sleect.toString());

sleect.then((data) =>{
    console.log(data)
}).catch(e => {
    console.log(e.message)
}).finally(() => {
    knex.destroy()
})