import { Client } from 'pg';
 


export const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "drsnbuha@7"
});

client.query(
    "CREATE DATABASE school", (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('database created successfully');
        client.end();
})

client.connect();
