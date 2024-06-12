import { Order } from '../models/order';
import  {createPayment}  from '../utils/paymentGateway';

const createOrder = async (userId: string, bookId: string, amount: number) => {
  const paymentResult = await createPayment(userId, bookId, amount);
  if (!paymentResult.success) {
    throw new Error('Payment failed');
  }

  return await Order.create({
    userId,
    bookId,
    amount,
    status: 'Paid',
    createdAt: new Date(),
  });
};

const getOrderById = async (id: string) => {
  return await Order.findByPk(id);
};

export default {
  createOrder,
  getOrderById,
};
