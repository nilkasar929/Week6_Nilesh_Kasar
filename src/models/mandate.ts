import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import User from './user';

class Mandate extends Model {
  public id!: string;
  public userId!: string;
  public gocardlessMandateId!: string;
  public status!: string;
}

Mandate.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id',
      },
      allowNull: false,
    },
    gocardlessMandateId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Mandate',
  }
);

export default Mandate;
