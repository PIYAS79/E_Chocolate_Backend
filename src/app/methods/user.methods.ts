import { AbstractRepository, EntityRepository } from "typeorm";
import { User_Entity } from "../entities/User_Entity";
import { User_Type } from "../modules/User_Piyas/user.interface";




@EntityRepository(User_Entity)
export class User_Static_Methods extends AbstractRepository<User_Type> {
    find_by_email(email: string) {
        return this.repository.findOne({
            where: { email: email }
        })
    }
}