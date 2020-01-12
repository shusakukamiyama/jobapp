export type PostData = {
    title: string;
    content: string;
}

export default class Post {
    public constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly content: string
    ){}
}