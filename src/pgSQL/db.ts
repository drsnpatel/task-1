import {Client} from 'pg';

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "drsnbuha@7",
    database: "school"
});

client.connect();

client.query(
    "CREATE TABLE students (id UUID NOT NULL DEFAULT gen_random_uuid(),enroll_no integer PRIMARY KEY NOT NULL,name varchar(50) NOT NULL,email varchar(50) NOT NULL,status varchar(50) NOT NULL);", (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('created table students');
        client.end();
})


client.query(
    "CREATE TABLE result (id UUID PRIMARY KEY NOT NULL DEFAULT gen_random_uuid(),enroll_no integer ,maths integer NOT NULL,science integer NOT NULL,english integer NOT NULL,marks integer NOT NULL,FOREIGN KEY (enroll_no) REFERENCES students(enroll_no));", (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('created table result');
        client.end();
})
