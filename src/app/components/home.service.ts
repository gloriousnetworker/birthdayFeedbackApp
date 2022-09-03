import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})


export class HomeService {

  baseUrl:string =environment.baseUrl


  constructor(private http: HttpClient) { }


  createFeedback(data:any){
 return this.http.post(`${this.baseUrl}send`,data)
  }



}
