"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongodbConfig = exports.postgresqlConfig = exports.sqltieConfig = void 0;
const employee_entity_1 = require("./src/employees/entities/employee.entity");
exports.sqltieConfig = {
    type: 'sqlite',
    database: 'db',
    entities: ['dist/src/**/entities/*.entity.js'],
    synchronize: true,
    migrations: ['dist/src/db/migrations/*.js'],
    cli: {
        migrationsDir: 'src/db/migrations',
    },
};
exports.postgresqlConfig = {
    type: 'postgres',
    database: 'nest_db',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '202020',
    synchronize: true,
    entities: [employee_entity_1.Employee],
};
exports.mongodbConfig = {
    type: 'mongodb',
    url: `mongodb+srv://emodb:emodb@herokutest.mihf4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    entities: [employee_entity_1.Employee],
};
//# sourceMappingURL=ormconfig.js.map