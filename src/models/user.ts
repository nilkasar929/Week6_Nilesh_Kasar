import { Model, DataTypes, UUIDV4 } from 'sequelize';
import  sequelize  from '../postgres/pgConfig';
import Review from './review';
import Rating from './rating';
import Payment from './payment';

export interface userAttributes {
    id: string;
    username: string;
    password: string;
    email: string;
    isAdmin: boolean;
  }
  

class User extends Model<userAttributes> implements userAttributes {
  public id!: string;
  public username!: string;
  public password!: string;
  public email!: string;
  public isAdmin!: boolean;

  
}

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },

  username: {
    type:DataTypes.STRING,
    allowNull:false
  },

  password: {
    type: DataTypes.STRING,
    allowNull:false
  },
  email: {
    type:DataTypes.STRING,
    allowNull:false
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, 
{
  sequelize,
  modelName: 'User',
  tableName:'user'
});


// User.hasMany(Review, { foreignKey: 'userId', as: 'reviews' });
// User.hasMany(Rating,{ foreignKey: 'ratingId', as: 'ratings' });
// User.hasMany(Payment,{ foreignKey: 'paymentId',as:'payment'  });

export default User;
