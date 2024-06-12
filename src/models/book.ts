import { Model, DataTypes, UUIDV4 } from 'sequelize';
import  sequelize  from '../postgres/pgConfig';
import Author from './author';

export interface bookAttributes {
    id: string;
    bookCode: string;
    title: string;
    description: string;
    publishedYear: number;
    price: number;
    externalId: string;
  }

class Book extends Model<bookAttributes> implements bookAttributes{
  public id!: string;
  public bookCode!: string;
  public title!: string;
  public description!: string;
  public publishedYear!: number;
  public price!: number;
  public externalId!: string;
}

Book.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  bookCode: {
    type:DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type:DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type:DataTypes.TEXT,
    allowNull: false,
  },
  publishedYear: {
    type:DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type:DataTypes.DECIMAL,
    allowNull: false,
  },
  externalId: {
    type:DataTypes.STRING
  },
}, {
  sequelize,
  modelName: 'Book',
});

// Associations
Book.belongsToMany(Author, { through: 'BookAuthors' });

export default Book;
