import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../enviroment';
import { UserCurrent } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userActual?: UserCurrent;
  private _supabaseClient:SupabaseClient;

constructor() {
  this._supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey); 
}
async iniciarSesion(){
  await this._supabaseClient.auth.signInWithOAuth({
    provider:'github',
    options:{
      redirectTo:'https://e57c5803.puppy-b67.pages.dev/home'
    }
  });
}
async cerrarSesion(){
  const { error } = await this._supabaseClient.auth.signOut();
  if(error){
    throw error;
  }
}
async obtenerSesion():Promise<UserCurrent>{
  const current=(await this._supabaseClient.auth.getSession()).data.session?.user.id
  const { data, error } = await this._supabaseClient.from('users').select('*').eq('id',current);
  if(error){
    throw error;
  }
  const user=data[0];
  this.userActual = new UserCurrent(user.id,user.name,user.user_name,user.avatar_url,user.created_at);
  return this.userActual;
}

async getUser():Promise<UserCurrent>{
  return this.userActual!;
  }
}
