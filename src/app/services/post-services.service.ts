import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
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
  async iniciarSesion(){
    await this._supabaseClient.auth.signInWithOAuth({
      provider:'github',
      options:{
        redirectTo:'http://localhost:4200/home'
      }
    });
  }
  async cerrarSesion(){
    const { error } = await this._supabaseClient.auth.signOut();
    if(error){
      throw error;
    }
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
}
