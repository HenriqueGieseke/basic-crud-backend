import express from 'express';
import { createUserController } from '../controllers/createUserController.js';
import { getAllUsersController } from '../controllers/getAllUsersController.js';
import { getOneRandomUserController } from '../controllers/getOneRandomUserController.js';
import { getUserByNameController } from '../controllers/getUserByNameController.js';
import { getUserByRegionController } from '../controllers/getUserByRegionController.js';
import { updateUserController } from '../controllers/updateUserController.js';
import { addSearchFieldController } from '../controllers/addSearchFieldController.js';
import { deleteUserController } from '../controllers/deleteUserController.js';
import { getHundredUserInfoController } from '../controllers/getHundredUserInfoController.js';
import { databaseStatsController } from '../controllers/databaseStatsController.js';

const router = express.Router();

//CREATE USER
router.post('/createUser', createUserController);

//GET ALL USERS
router.get('/allUsers', getAllUsersController);

//GET ONE RANDOM USER
router.get('/randomUser', getOneRandomUserController);

//GET USER BY NAME
router.get('/user/:name', getUserByNameController);

//GET USER BY REGION
router.get('/region/:region', getUserByRegionController);

//UPDATE USER
router.put('/updateUser/:user', updateUserController);

//GET DATABASE STATS
router.get('/databaseStats', databaseStatsController);

//ADD SEARCH-FIELDS
//router.patch('/addSearchFields', addSearchFieldController);

//DELETE USER
router.delete('/deleteUser/:user', deleteUserController);

//GET 1000 USERS INFO
//router.get('/thousandUsers', getHundredUserInfoController);

export { router as usersRouter };
