import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import * as firebase from "firebase/compat";
@Injectable({
  providedIn: 'root'
})


export class HomeService {

  // baseUrl:string =environment.baseUrl

  userData: any = new Observable<firebase.default.User>();
  constructor(private http: HttpClient,private firestore: AngularFirestore) { }


//   createFeedback(data:any){
//  return this.http.post(`${this.baseUrl}send`,data)
//   }

createFeedback(value: any) {
    return this.firestore.collection("form").add(value);
  }

  getWishes(){
      return this.firestore.collection("form")
  
  }


}
