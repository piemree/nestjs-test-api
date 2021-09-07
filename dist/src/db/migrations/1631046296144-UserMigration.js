"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMigration1631046296144 = void 0;
class UserMigration1631046296144 {
    constructor() {
        this.name = 'UserMigration1631046296144';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "email" varchar NOT NULL)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.UserMigration1631046296144 = UserMigration1631046296144;
//# sourceMappingURL=1631046296144-UserMigration.js.map