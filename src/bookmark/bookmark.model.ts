import { Table, Column, Model } from 'sequelize-typescript';
import { IBookmark } from 'src/common/interfaces/bookmark.interface';

@Table
export class Bookmark extends Model<IBookmark> {
  @Column
  title: string;
  @Column
  description: string;
  @Column
  link: string;
}
