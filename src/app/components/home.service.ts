import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.prod';
import * as firebase from "firebase/compat"
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
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection("form").add(value).then((res:any) => {
        // this.toastr.success("", "Agent Added Successfully!")
        console.log(res);
        
      }, (err: any) => {
        reject(err);
        console.log(err);
        
        // this.toastr.success("", "An Error Occurred!")
      })
    });
  }


}
