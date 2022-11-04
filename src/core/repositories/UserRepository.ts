import { User } from "../entities/User";

export interface UserRepository {
    save(user: User): void;
    getById(id: string): User;
}