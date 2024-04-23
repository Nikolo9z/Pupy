export class UserCurrent{
    id: string;
    name: string;
    user_name: string;
    avatar_url: string;
    created_at: string;
    constructor(id: string, name: string, user_name: string, avatar_url: string, created_at: string){
        this.id = id;
        this.name = name;
        this.user_name = user_name;
        this.avatar_url = avatar_url;
        this.created_at = created_at;
    }
}