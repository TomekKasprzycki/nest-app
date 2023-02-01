import { Bookmark } from 'src/bookmark/bookmark.model';
import { User } from 'src/user/user.model';
import { Role } from 'src/role/role.model';
import { UserRole } from 'src/user-role/user-role.model';

export const dbRelations = () => {
  User.hasMany(Bookmark);
  Bookmark.belongsTo(User);
  Role.belongsToMany(User, { through: UserRole });
  User.belongsToMany(Role, { through: UserRole });
};
