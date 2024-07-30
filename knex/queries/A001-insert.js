const knex = require('../../knex/config/database');

const data = {
    first_name: 'Helena',
    last_name: 'A.',
    email: '1@email.com',
    password_hash: '3_hash',
};

const insert = knex('users').insert(data);

insert.then(data => {
    console.log(data);
}).catch(e => {
    console.log('ERRO:', e.message);
}).finally(() => {
    knex.destroy();
});