import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-wishes',
  templateUrl: './wishes.component.html',
  styleUrls: ['./wishes.component.css']
})
export class WishesComponent implements OnInit {
  wishes: any=[];

  constructor(private service:HomeService) { }

  ngOnInit(): void {
    this.getAgents()
  }
  getAgents() {
    this.service.getWishes().snapshotChanges().pipe(

      map((changes: any) =>

        changes.map((c: any) =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        ))
    ).subscribe((data: any) => {
      this.wishes = data
      // console.log(this.wishes)
 

    });
  }

}
