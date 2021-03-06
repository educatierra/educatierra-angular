import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(
    private http: HttpClient
  ) { }

  logar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{
    return this.http.post<UsuarioLogin>('https://educatierra-g4.herokuapp.com/usuarios/login', usuarioLogin)

  }

  cadastrar(usuario: User): Observable<User>{
    return this.http.post<User>('https://educatierra-g4.herokuapp.com/usuarios/cadastro', usuario)
  }

     
  logado(){
    let logado: boolean = false
    if(environment.token != ''){
      logado =true
    }
    return logado
  }

  logadoAdmin(){
    let logado: boolean = false
    if(environment.token != '' && environment.adminUsuario == true){
      logado =true
    }
    return logado
  }
}
