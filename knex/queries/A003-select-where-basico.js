const knex = require('../../knex/config/database');

const select = knex('users').select('id', 'first_name')
    .where('id', '=', 1)
    .andWhere('first_name', '=', 'bruno')
    .orWhere('id', '=', 1);


select.then(data => {
    for(const user of data) {
        console.log(user);
    }
}).catch(e => {
    console.log('ERRO:', e.message);
}).finally(() => {
    knex.destroy();
});