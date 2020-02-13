import Comment, { CommentData } from './Comment';

export default class CommentFactory {
    public static create(id: string, data: CommentData) {
        return new Comment(
            id,
            data.content,
            data.targetId,
        )
    }
}