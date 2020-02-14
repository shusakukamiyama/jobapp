export type PostData = {
    title: string;
    content: string;
    createdAt: number;
};

export default class Post {
    public constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly content: string,
        public readonly createdAt: Date
    ) {}
}
