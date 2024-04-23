export class PostsModel{
    id: string;
    created_at: string;
    contenido: string;
    user_id: string;
    users: UsersPost;
    constructor(id: string, contenido: string, created_at: string, user_id: string, users: UsersPost){
        this.id = id;
        this.contenido = contenido;
        this.created_at = created_at;
        this.user_id = user_id;
        this.users = {...users,user_name:`@${users.user_name}`};
    }
}

export interface UsersPost {
  id: string;
  name: string;
  user_name: string;
  avatar_url: string;
  created_at: string;
}