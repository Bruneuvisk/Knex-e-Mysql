const knex = require("../../knex/config/database");

const selectBetween = knex('users').select('id', 'first_name')
    .whereIn('id', [10, 15, 20, 25]);

console.log(selectBetween.toString());

selectBetween.then((data) =>{
    console.log(data)
}).catch(e => {
    console.log(e.message)
}).finally(() => {
    knex.destroy()
})