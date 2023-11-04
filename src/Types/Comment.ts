export interface Comment {
    _id?: string;
    comment_text: string;
    comment_date: string;
    comment_item: string;
    comment_creator: { first_name: string, last_name: string };
}

export type NewComment = Omit<Comment, "_id" | "comment_creator">