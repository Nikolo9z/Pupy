import { Injectable } from '@angular/core';
import { AuthSession, createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../enviroment';
import { PostsModel } from '../model/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _supabaseClient:SupabaseClient;
  private publicaciones: PostsModel[] = [];

  constructor() {
    this._supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);
  }
  //ver todos los posts
  async ObtenerPosts():Promise<void>{
    const { data, error } = await this._supabaseClient
    .from('posts')
    .select('*, users(*)');
    if(error){
      throw error;
    }
    this.publicaciones = data.map((post:any) => new PostsModel(post.id, post.contenido, post.created_at, post.user_id, post.users));
  }
  async mostrarPosts():Promise<PostsModel[]>{
    await this.ObtenerPosts();
    return this.publicaciones;
  }
  //crear un post
  async createPost(contenido:string, user_id:string){
    const { data, error } = await this._supabaseClient
    .from('posts')
    .insert({contenido, user_id});
    if(error){
      throw error;
    }
    return data;
  }
  
}
