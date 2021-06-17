import { searchFieldCreatorHelper } from "../helpers/searchFieldCreatorHelper.js";
import { userModel } from '../models/userModel.js';

const createUserController = async (req, res) => {
  try {
    const searchFieldObject = searchFieldCreatorHelper(req.body);

    const newUser = { ...req.body, ...searchFieldObject };

    const user = new userModel(newUser);

    await user.save();
    console.log(user);
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { createUserController };
