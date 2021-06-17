import { userModel } from '../models/userModel.js';

const getUserByRegionController = async (req, res) => {
  try {
    const { region } = req.params;

    const filteredRegionUsers = await userModel.find({
      $or: [
        { 'locationForSearch.city': { $regex: region, $options: 'i' } },
        { 'locationForSearch.state': { $regex: region, $options: 'i' } },
        { 'locationForSearch.country': { $regex: region, $options: 'i' } },
      ],
    });

    if (filteredRegionUsers.length === 0) {
      res.end('not found');
    } else res.send(filteredRegionUsers);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getUserByRegionController };
