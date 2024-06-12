import { Model, DataTypes, UUIDV4 } from 'sequelize';
import  sequelize  from '../postgres/pgConfig';
import Book from './book';
import User from './user';

export interface paymentAttributes {
    id: string;
    userId: string;
    bookId: string;
    amount: number;
    status: string;
  }
  

class Payment extends Model<paymentAttributes> implements paymentAttributes {
  public id!: string;
  public userId!: string;
  public bookId!: string;
  public amount!: number;
  public status!: string;
}

Payment.init({
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
  amount: {
    type:DataTypes.DECIMAL,
    allowNull:false
  },

  status: {
    type:DataTypes.STRING,
    allowNull:false
  },
  
}, {
  sequelize,
  modelName: 'Payment',
  timestamps:true
});

// Associations
// Payment.belongsTo(Book);
// Payment.belongsTo(User);
// Book.hasMany(Payment);
// User.hasMany(Payment);

export default Payment;
