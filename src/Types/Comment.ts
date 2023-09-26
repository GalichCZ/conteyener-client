import {User} from "@/Types/User.ts";

export interface Comment {
    _id?: string;
    comment_text: string;
    comment_date: string;
    comment_item: string;
    creator: User;
}