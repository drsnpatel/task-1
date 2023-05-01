"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_1 = require("pg");
exports.client = new pg_1.Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "drsnbuha@7"
});
exports.client.query("CREATE DATABASE school", (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('database created successfully');
    exports.client.end();
});
exports.client.connect();
//# sourceMappingURL=conn.js.map