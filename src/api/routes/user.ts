import * as express from 'express';
import { Request, Response } from 'express';
import { InMemoryUserRepository } from '../../adapters/repositories/InMemoryUserRepository';
import { CreateUser } from '../../core/usecases/CreateUser';
import { GetUserById } from '../../core/usecases/GetUserById';
const router = express.Router();

const db = new Map();
const userRepository = new InMemoryUserRepository(db);

const createUser = new CreateUser(userRepository);
const getChalomById = new GetUserById(userRepository);

router.post('/', (req: Request, res: Response) => {
    createUser.execute();
    return res.sendStatus(200);
})

router.get('/:id', (req: Request, res: Response) => {
    const user = getChalomById.execute(req.params.id);
    return res.status(200).send(user.props);
})

export { router as UserRouter };