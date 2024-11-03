import { getCustomRepository, getManager } from "typeorm";
import { Create_User_Type } from "./user.interface";
import { User_Entity } from "../../entities/User_Entity";
import { Encrypt_Password } from "../../utils/bcrypt";
import { User_Roles } from "../../global/constants";
import { Create_JWT_Token } from "../../utils/jwt";
import { User_Static_Methods } from "../../methods/user.methods";
import Final_App_Error from "../../errors/Final_App_Error";
import httpStatus from 'http-status-codes';



// create user service 
const Create_User_Service = async (gettedData: Create_User_Type) => {

    const repository = getCustomRepository(User_Static_Methods);
    const isUserExist = await repository.find_by_email(gettedData.email);
    if (isUserExist) {
        throw new Final_App_Error(httpStatus.CONFLICT, "This email is already registered into the database");
    }

    const entityManager = getManager();
    const hashPassword = await Encrypt_Password(gettedData.password);

    const newUser = await entityManager.insert(User_Entity, {
        full_name: gettedData.full_name,
        email: gettedData.email,
        password: hashPassword,
        profile_picture: gettedData.profile_picture,
        address: gettedData.address,
        role: User_Roles.USER
    })

    const AccessToken = Create_JWT_Token({
        role: User_Roles.USER,
        email: gettedData.email
    }, '1hr')
    const RefreshToken = Create_JWT_Token({
        role: User_Roles.USER,
        email: gettedData.email
    }, '10d')

    return { newUser, AccessToken, RefreshToken };
}



export const User_Services = {
    Create_User_Service,

}