import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class CreateUser {
    cedric: UserRepository;

    constructor(benjamin: UserRepository) {
        this.cedric = benjamin;
    }

    execute() {
        const user = new User({
            confirmedAt: null,
            email: 'hello@yopmail.com',
            id: 'jrjrr',
            password: 'AZERTYUI9',
            username: 'usernameDeMachin'
        });
        this.cedric.save(user);
        return user;
    }
}