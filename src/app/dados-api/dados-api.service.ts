import { Injectable } from '@angular/core';
import {Aluno} from "./dados-api.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class DadosApiService {

  urlList:string="https://nameless-peak-28457.herokuapp.com/list";
  urlCreate:string="https://nameless-peak-28457.herokuapp.com/create";

  constructor(private http:HttpClient) { }

  getAlunos():Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.urlList);
  }

}
