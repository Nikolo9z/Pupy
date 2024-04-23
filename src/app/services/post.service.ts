import { Injectable } from '@angular/core';
import { AuthSession, createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../enviroment';
import { PostsModel } from '../model/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _supabaseClient:SupabaseClient;

  constructor() {
    this._supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);
  }
  //ver todos los posts
  async getPosts():Promise<PostsModel[]>{
    const { data, error } = await this._supabaseClient
    .from('posts')
    .select('*, users(*)');
    if(error){
      throw error;
    }
    return data.map(post => new PostsModel(post.id,post.contenido, post.created_at, post.user_id, post.users));
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
