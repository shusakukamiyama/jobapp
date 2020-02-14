export type UserData = {
    name: string;
    profile: string;
}

export default class User {
    public constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly profile: string,
    ){}
}