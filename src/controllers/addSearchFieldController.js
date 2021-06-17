import { userModel } from '../models/userModel.js';
import { searchFieldCreatorHelper } from '../helpers/searchFieldCreatorHelper.js';

const addSearchFieldController = async (req, res) => {
  try {
    const users = await userModel.find({});

    for (let i = 0; i < users.length; i++) {

      const searchFieldsObject = searchFieldCreatorHelper(users[i]);

      await userModel.updateOne(
        { _id: users[i]._id },
        {
          $set: {
            searchName: {
              first: searchFieldsObject.searchName.first,
              last: searchFieldsObject.searchName.last,
            },
            locationForSearch: {
              city: searchFieldsObject.locationForSearch.city,
              state: searchFieldsObject.locationForSearch.state,
              country: searchFieldsObject.locationForSearch.country,
            }
          },
        },
        { multi: true }
      );
    }

    //await userModel.deleteMany({});

    res.send('Users updated.');
  } catch (error) {
    res.status(500).send(error);
  }
};

export { addSearchFieldController };
