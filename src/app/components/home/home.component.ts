import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private formBuilder: FormBuilder, private homeService:HomeService) { }

  feedbackForm: any = FormGroup


  ngOnInit(): void {
  this.feedbackForm = this.formBuilder.group({
  name: ['', Validators.required],
  phone: ['', Validators.required],
  message: ['', Validators.required] 
  })

  }

  addFeedback(){
     
    this.homeService.createFeedback(this.feedbackForm.value).subscribe(
      (res:any)=>{
        console.log(res);
      }
    )
   
    
  
  }
}

