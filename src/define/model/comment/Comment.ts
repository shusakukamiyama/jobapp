export type CommentData = {
    content: string;
    targetId: string;
}

export default class Comment {
    public constructor(
        public readonly id: string,
        public readonly content: string,
        public readonly targetId: string,
    ){}
}