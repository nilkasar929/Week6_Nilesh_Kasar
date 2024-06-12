import { Model, DataTypes, UUIDV4 } from 'sequelize';
import  sequelize  from '../postgres/pgConfig';
import Book from './book';
import User from './user';

export interface reviewAttributes {
    id: string;
    userId: string;
    bookId: string;
    content: string;
  }
  


class Review extends Model<reviewAttributes> implements reviewAttributes {
  public id!: string;
  public userId!: string;
  public bookId!: string;
  public content!: string;
}

Review.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull:false,
    references: {
      model: User,
      key: 'id',
    },
  },
  bookId: {
    type: DataTypes.UUID,
    allowNull:false,
    references: {
      model: Book,
      key: 'id',
    },
  },
  content:{
    type: DataTypes.TEXT,
    allowNull:false
  },
}, 
{
  sequelize,
  modelName: 'Review',
});

// Associations
Book.hasMany(Review);
User.hasMany(Review);
Review.belongsTo(User, { foreignKey: 'userId' });
Review.belongsTo(Book, { foreignKey: 'bookId' });

export default Review;
