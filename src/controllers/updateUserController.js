import { userModel } from '../models/userModel.js';

const updateUserController = async (req, res) => {
  try {
    const { user } = req.params;

    // const filteredUser = await userModel.findOne({
    //   $or: [
    //     { 'searchName.first': { $regex: user, $options: 'i' } },
    //     { 'searchName.last': { $regex: user, $options: 'i' } },
    //   ],
    // });

    const updatedUser = await userModel.findByIdAndUpdate(
      { _id: user },
      req.body,
      {
        new: true,
      }
    );

    res.send(updatedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { updateUserController };
