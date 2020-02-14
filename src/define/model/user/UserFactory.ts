import User, { UserData } from './User';

export default class UserFactory {
    public static create(id: string, data: UserData) {
        return new User(
            id,
            data.name,
            data.profile,
        )
    }
}