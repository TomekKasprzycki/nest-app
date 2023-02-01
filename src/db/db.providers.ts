import { Sequelize } from 'sequelize-typescript';
import { dbConfig } from 'src/db/credentials/db.credentials';
const { DB, HOST, PASSWORD, USER, DIALECT, PORT } = dbConfig;
import { User } from 'src/user/user.model';
import { Bookmark } from 'src/bookmark/bookmark.model';
import { db } from 'src/common/translations/translation';
import { dbRelations } from './db.relations';
import { Role } from 'src/role/role.model';
import { UserRole } from 'src/user-role/user-role.model';

export const databaseProviders = [
  {
    provide: db.NAME,
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: DIALECT,
        host: HOST,
        port: PORT,
        username: USER,
        password: PASSWORD,
        database: DB,
      });
      sequelize.addModels([User, Bookmark, Role, UserRole]);
      dbRelations();
      await sequelize.sync();
      return sequelize;
    },
  },
];
