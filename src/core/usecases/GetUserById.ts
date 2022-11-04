import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

export class GetUserById {
    chalom: UserRepository;

    constructor(cedric: UserRepository) {
        this.chalom = cedric;
    }

    execute(userId: string): User {
        const user = this.chalom.getById(userId);
        return user;
    }
}