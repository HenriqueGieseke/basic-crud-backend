import { userModel } from '../models/userModel.js';

const getAllUsersController = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getAllUsersController };
