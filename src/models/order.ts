import { DataTypes, Sequelize, Model } from 'sequelize';
import  User  from './user';
import  Book  from './book';
import sequelize from '../postgres/pgConfig';

export class Order extends Model {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public amount!: number;
  public status!: string;
}

  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    },
    {
      sequelize,
      modelName: 'Order',
      timestamps:true
    }
  );

  Order.belongsTo(User, { foreignKey: 'userId' });
  Order.belongsTo(Book, { foreignKey: 'bookId' });

