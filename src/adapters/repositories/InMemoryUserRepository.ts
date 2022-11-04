import { User } from "../../core/entities/User";
import { UserRepository } from "../../core/repositories/UserRepository";

export class InMemoryUserRepository implements UserRepository {
    db: Map<string, User>;

    constructor(db: Map<string, User>) {
        this.db = db;
    }

    save(user: User): void {
        this.db.set(user.props.id, user);
    }

    getById(id: string): User {
        return this.db.get(id);
    }
}