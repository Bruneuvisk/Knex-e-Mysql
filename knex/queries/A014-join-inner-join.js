const knex = require("../../knex/config/database");
const select = knex('users as u')
    .select('u.id as uid', 'p.id as pid', 'p.bio', 'u.first_name')
    .innerJoin('profiles as p', 'u.id', 'p.user_id')
    .where('u.first_name', 'like', '%a')
    .where('u.id', '>', '12')
    .where('u.id', '>', '40')
    .orderBy('u.id', 'esc')
    .limit(5);

console.log(select.toString());
