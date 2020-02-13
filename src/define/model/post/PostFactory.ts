import Post, { PostData } from './Post';

export default class PostFactory {
    public static create(id: string, data: PostData) {
        return new Post(
            id,
            data.title,
            data.content,
            new Date(data.createdAt * 1000),
        )
    }
}