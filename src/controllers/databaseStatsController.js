import { userModel } from '../models/userModel.js';

const databaseStatsController = async (req, res) => {
  const collectionSize = await userModel.countDocuments();
  const males = await userModel.countDocuments({ gender: 'male' });
  const females = await userModel.countDocuments({ gender: 'female' });

  const usersPerCity = await userModel.aggregate([
    { $match: {} },
    { $group: { _id: '$location.city', total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 5 },
  ]);

  const cityTopOneName = usersPerCity[0]._id;
  const cityTopOneTotal = usersPerCity[0].total;

  const cityTopTwoName = usersPerCity[1]._id;
  const cityTopTwoTotal = usersPerCity[1].total;

  const cityTopThreeName = usersPerCity[2]._id;
  const cityTopThreeTotal = usersPerCity[2].total;

  const cityTopFourName = usersPerCity[3]._id;
  const cityTopFourTotal = usersPerCity[3].total;

  const cityTopFiveName = usersPerCity[4]._id;
  const cityTopFiveTotal = usersPerCity[4].total;

  const usersPerState = await userModel.aggregate([
    { $match: {} },
    { $group: { _id: '$location.state', total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 5 },
  ]);

  const stateTopOneName = usersPerState[0]._id;
  const stateTopOneTotal = usersPerState[0].total;

  const stateTopTwoName = usersPerState[1]._id;
  const stateTopTwoTotal = usersPerState[1].total;

  const stateTopThreeName = usersPerState[2]._id;
  const stateTopThreeTotal = usersPerState[2].total;

  const stateTopFourName = usersPerState[3]._id;
  const stateTopFourTotal = usersPerState[3].total;

  const stateTopFiveName = usersPerState[4]._id;
  const stateTopFiveTotal = usersPerState[4].total;

  const usersPerCountry = await userModel.aggregate([
    { $match: {} },
    { $group: { _id: '$location.country', total: { $sum: 1 } } },
    { $sort: { total: -1 } },
    { $limit: 5 },
  ]);

  const countryTopOneName = usersPerCountry[0]._id;
  const countryTopOneTotal = usersPerCountry[0].total;

  const countryTopTwoName = usersPerCountry[1]._id;
  const countryTopTwoTotal = usersPerCountry[1].total;

  const countryTopThreeName = usersPerCountry[2]._id;
  const countryTopThreeTotal = usersPerCountry[2].total;

  const countryTopFourName = usersPerCountry[3]._id;
  const countryTopFourTotal = usersPerCountry[3].total;

  const countryTopFiveName = usersPerCountry[4]._id;
  const countryTopFiveTotal = usersPerCountry[4].total;

  const averageAge = await userModel.aggregate([
    { $match: {} },
    {
      $group: {
        _id: null,
        ageAvg: { $avg: '$dob.age' },
      },
    },
  ]);

  const roundAvgAge = Number(averageAge[0].ageAvg.toFixed(0));

  const statsObject = {
    collectionSize,
    males,
    females,
    roundAvgAge,
    cityTopOneName,
    cityTopOneTotal,
    cityTopTwoName,
    cityTopTwoTotal,
    cityTopThreeName,
    cityTopThreeTotal,
    cityTopFourName,
    cityTopFourTotal,
    cityTopFiveName,
    cityTopFiveTotal,
    stateTopOneName,
    stateTopOneTotal,
    stateTopTwoName,
    stateTopTwoTotal,
    stateTopThreeName,
    stateTopThreeTotal,
    stateTopFourName,
    stateTopFourTotal,
    stateTopFiveName,
    stateTopFiveTotal,
    countryTopOneName,
    countryTopOneTotal,
    countryTopTwoName,
    countryTopTwoTotal,
    countryTopThreeName,
    countryTopThreeTotal,
    countryTopFourName,
    countryTopFourTotal,
    countryTopFiveName,
    countryTopFiveTotal,
  };

  res.send(statsObject);
};

export { databaseStatsController };
