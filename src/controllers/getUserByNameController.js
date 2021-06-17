import { userModel } from '../models/userModel.js';

const getUserByNameController = async (req, res) => {
  try {
    const { name } = req.params;

    const filteredUser = await userModel.find({
      $or: [
        { 'searchName.first': { $regex: name, $options: 'i' } },
        { 'searchName.last': { $regex: name, $options: 'i' } },
      ],
    });

    if (filteredUser.length === 0) {
      res.end("not found");
    } else await res.send(filteredUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getUserByNameController };
