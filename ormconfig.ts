import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Employee } from 'src/employees/entities/employee.entity';

export const sqltieConfig: SqliteConnectionOptions = {
  type: 'sqlite',
  database: 'db',
  entities: ['dist/src/**/entities/*.entity.js'],
  synchronize: true,
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir: 'src/db/migrations',
  },
};

export const postgresqlConfig: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'nest_db',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '202020',
  synchronize: true,
  entities: [Employee],
};
