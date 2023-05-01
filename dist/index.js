"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
require("./pgSQL/db");
require("./pgSQL/values");
require("./conn");
const app = (0, express_1.default)();
const pool = new pg_1.Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "drsnbuha@7",
    database: "school"
});
pool.connect();
app.get('/students', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        const result = yield client.query('SELECT * FROM students');
        res.json({ "message": "Students Table", data: [result.rows] });
    }
    finally {
        client.release();
    }
}));
app.get('/result', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield pool.connect();
    try {
        const result = yield client.query('SELECT * FROM result');
        res.json({ "message": "Result Table", data: [result.rows] });
    }
    finally {
        client.release();
    }
}));
app.listen(8000, () => {
    console.log("server run on 8000");
});
//# sourceMappingURL=index.js.map