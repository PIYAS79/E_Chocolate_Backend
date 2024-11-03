import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";




@Entity()
export class User_Entity {
    @PrimaryGeneratedColumn()
    full_name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    profile_picture!: string;

    @Column()
    address!: string;

    @Column()
    role!: string
}