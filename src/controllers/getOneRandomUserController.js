import { userModel } from '../models/userModel.js';

const getOneRandomUserController = async (req, res) => {
  try {
    const user = await userModel.aggregate([{ $sample: { size: 1 } }]);

    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getOneRandomUserController };
