import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Http, Headers } from '@angular/http';
import { Empleado } from 'src/app/models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  url:any;
  headers = new Headers();
  constructor(private http:Http) {
  	this.url = environment.http;
  	this.headers.append("Content-type","application/json");
    this.headers.append("Authorization","Bearer "+sessionStorage.getItem('token'));
   }

  get_(){
    return this.http.get(this.url+"api/app/empleado",{headers:this.headers});
  }

  create(empleado:Empleado){
   return this.http.post(this.url+"api/app/empleado",empleado,{headers:this.headers});
  }

  
  
  edit(id){
    return this.http.get(this.url+"api/app/empleado/"+id+"/edit",{headers:this.headers});
  }

  update(id,empleado:Empleado){
    return this.http.put(this.url+"api/app/empleado/"+id,empleado, {headers:this.headers});
  }

  delete(id){
    return this.http.delete(this.url+"api/app/empleado/"+id, {headers:this.headers});
  }

}
