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
    "INSERT INTO students (enroll_no, name, email, status)VALUES (101,'Devraj',raj@gmail.com','pass'),(102,'Anjali','aa@gmail.com','pass'),(103,'jay','jay01@gmail.com','pass');", (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(' students Data inserted ');
        client.end();
})

client.query(
    "INSERT INTO result (enroll_no, maths, science, english, marks) VALUES (101,95,90,78,263), (102,85,90,95,270), (103,80,82,87,249);", (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('result data inserted ');
        client.end();
})


