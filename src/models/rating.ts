import { Model, DataTypes, UUIDV4 } from 'sequelize';
import  sequelize  from '../postgres/pgConfig';
import Book from './book';
import User from './user';

export interface ratingAttributes {
    id: string;
    userId: string;
    bookId: string;
    rating: number;
  }
  

class Rating extends Model<ratingAttributes> implements ratingAttributes {
  public id!: string;
  public userId!: string;
  public bookId!: string;
  public rating!: number;
}

Rating.init({
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
  rating:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
}, 
{
  sequelize,
  modelName: 'Rating',
});


export default Rating;
