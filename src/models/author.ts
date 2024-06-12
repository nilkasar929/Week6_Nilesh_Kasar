import { Model, DataTypes } from 'sequelize';
import  sequelize  from '../postgres/pgConfig';
import Book from './book';
import { PassThrough } from 'stream';

interface AuthorAttributes {
    id?: string;
    name: string;
    bio: string;
    birthdate: Date;
    isSystemUser: boolean;
  }
  

class Author extends Model<AuthorAttributes> implements AuthorAttributes {
  public id?: string;
  public name!: string;
  public bio!: string;
  public birthdate!: Date;
  public isSystemUser!: boolean;
}

Author.init(
    {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  name:{
    type: DataTypes.STRING,
    allowNull:false
  } ,

  bio: {
   type: DataTypes.STRING,
   allowNull:false
  },
  birthdate:{
    type: DataTypes.DATE,
    allowNull:false
  },
  isSystemUser:{
    type: DataTypes.BOOLEAN,
    allowNull:false
  },
},
 {
  sequelize,
  modelName: 'Author',
  tableName:'Author'
    
});

// Associations
// Author.belongsTo(Book, { foreignKey: 'authorId', as: 'books' });

export default Author;
