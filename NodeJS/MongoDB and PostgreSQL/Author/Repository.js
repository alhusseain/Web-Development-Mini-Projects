const Client = require('pg').Pool
const client = new Client({
  user: 'postgres', 
  host: 'localhost',
  database: 'postgres',
  password: 'user', 
  port: 5432, 
})

async function create(){
  await client.query(`create table if not exists author(
    author_id int not null,
    first_name varchar(255),
    last_name varchar(255),
    primary key (author_id)
    );`)
}


async function add(id, firstName, lastName){
  await client.query("insert into author(author_id,first_name,last_name) values($1,$2,$3)",[id,firstName,lastName])
}

async function del(id){
  await client.query('delete from author where author=($1)',id);
}

async function update(id,firstName,lastName){
  await client.query(`update author set first_name = ($2),last_name = ($3) where author_id = ($1)`,([id,firstName,lastName]))
}

async function get(id){
  const res = await client.query(`select * from author where author_id = ($1) `,[id])
  return res.rows
}



module.exports = {
  create,
  get,
  del,
  update,
  add
}


