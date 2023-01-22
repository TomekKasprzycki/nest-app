import { Table, Column, Model } from 'sequelize-typescript';
import { IBookmark } from 'src/common/interfaces/bookmarkInterface';

@Table
 export class Bookmark extends Model<IBookmark>{

    @Column
    title: string;
    @Column
    description: string;
    @Column
    link: string;
 }
