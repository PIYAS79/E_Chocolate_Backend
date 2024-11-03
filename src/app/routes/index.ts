

import express from 'express';
import { User_Routes } from '../modules/User_Piyas/user.route';


const router = express.Router();

const Project_Routes = [
    {
        path: '/user',
        route: User_Routes
    }
]

Project_Routes.forEach(one => router.use(one.path, one.route));

export const Server_Routes = router;



