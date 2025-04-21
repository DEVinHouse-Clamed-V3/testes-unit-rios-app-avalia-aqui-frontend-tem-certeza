"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const path_1 = __importDefault(require("path"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: (_a = process.env.DB_HOST) !== null && _a !== void 0 ? _a : 'localhost',
    port: parseInt((_b = process.env.DB_PORT) !== null && _b !== void 0 ? _b : '5432', 10),
    username: (_c = process.env.DB_USERNAME) !== null && _c !== void 0 ? _c : 'postgres',
    password: (_d = process.env.DB_PASSWORD) !== null && _d !== void 0 ? _d : 'postgres',
    database: (_e = process.env.DB_DATABASE) !== null && _e !== void 0 ? _e : 'avaliaaqui',
    synchronize: process.env.NODE_ENV !== 'production',
    logging: process.env.NODE_ENV !== 'production',
    entities: [path_1.default.join(__dirname, '../entities/*.{ts,js}')],
    migrations: [path_1.default.join(__dirname, './migrations/*.{ts,js}')],
});
