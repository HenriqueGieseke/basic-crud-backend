import axios from 'axios';
import { searchFieldCreatorHelper } from '../helpers/searchFieldCreatorHelper.js';

const getHundredUserInfoController = async (req, res) => {
  try {
    let users = [];
    const getUsers = async () => {
      const { data } = await axios(
        'https://randomuser.me/api/?results=1000'
      );
      users = data.results.map((user) => {
        const searchFieldsObject = searchFieldCreatorHelper(user);

        return {
          name: {
            first: user.name.first,
            last: user.name.last,
          },
          gender: user.gender,
          location: {
            street: {
              name: user.location.street.name,
              number: user.location.street.number,
            },
            city: user.location.city,
            state: user.location.state,
            country: user.location.country,
            postcode: user.location.postcode,
          },
          email: user.email,
          login: {
            username: user.login.username,
            password: user.login.password,
          },
          dob: {
            date: user.dob.date,
            age: user.dob.age,
          },
          registered: {
            date: user.registered.date,
            age: user.registered.age,
          },
          phone: user.phone,
          cell: user.cell,
          picture: user.picture.large,
          nationality: user.nat,
          searchName: {
            first: searchFieldsObject.searchName.first,
            last: searchFieldsObject.searchName.last,
          },
          locationForSearch: {
            city: searchFieldsObject.locationForSearch.city,
            state: searchFieldsObject.locationForSearch.state,
            country: searchFieldsObject.locationForSearch.country,
          },
        };
      });
    };
    await getUsers();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { getHundredUserInfoController };
