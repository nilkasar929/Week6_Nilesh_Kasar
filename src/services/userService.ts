import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config();

const register = async (userData: any) => {
  userData.password = await bcrypt.hash(userData.password, 10);
  return await User.create(userData);
};


const login = async (username: string, password: string) => {
  const user = await User.findOne({ where: { username } });
  if (!user || !(await bcrypt.compare(password, user.password))) return null;
  

  return jwt.sign({ userId: user.id, isAdmin:user.isAdmin }, process.env.SECRET_KEY as string);
};



const getCurrentUser = async (userId: string) => {
  return await User.findByPk(userId);
};

export default {
  register,
  login,
  getCurrentUser
};
