import { userModel } from '../models/userModel.js';

const deleteUserController = async (req, res) => {
  try {
    const { user } = req.params;

    // const filteredUser = await userModel.findOne({
    //   $or: [
    //     { 'searchName.first': { $regex: user, $options: 'i' } },
    //     { 'searchName.last': { $regex: user, $options: 'i' } },
    //   ],
    // });

    await userModel.findByIdAndDelete({
      _id: user,
    });

    res.send('Usuário deletado');
  } catch (error) {
    res.status(500).send(error);
  }
};

export { deleteUserController };
