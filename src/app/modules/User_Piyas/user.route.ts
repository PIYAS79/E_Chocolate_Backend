

import express from 'express';
import Zod_Validation_Request from '../../middlewares/Zod_Validation_Request';
import { Zod_Create_User_Type } from './user.zod';
import { User_Controller } from './user.controller';


const router = express.Router();

// create user route 
router.post('/', Zod_Validation_Request(Zod_Create_User_Type), User_Controller.Create_User_Controller);
// update user route 

// delete user route 

// get all user route 

// get one user route 

export const User_Routes = router;

