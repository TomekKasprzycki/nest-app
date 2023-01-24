import { Sequelize } from 'sequelize-typescript';
import { dbConfig } from '../../credentials/db.credentials';
const { DB, HOST, PASSWORD, USER, DIALECT, PORT } = dbConfig;
import { User } from 'user/user.model';
import { Bookmark } from 'bookmark/bookmark.model';
import { db } from 'common/translations/translation';

const dbRelations = () => {
  User.hasMany(Bookmark);
  Bookmark.belongsTo(User);
};

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
      sequelize.addModels([User, Bookmark]);
      dbRelations();
      await sequelize.sync();
      return sequelize;
    },
  },
];
