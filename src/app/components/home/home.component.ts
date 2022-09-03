import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private formBuilder: FormBuilder,private toastr: ToastrService, private homeService:HomeService) { }

  feedbackForm: any = FormGroup


  ngOnInit(): void {
  this.feedbackForm = this.formBuilder.group({
  name: ['', Validators.required],
  phone: ['', Validators.required],
  message: ['', Validators.required],
  date: [''] 
  })

  }

  // addFeedback(){
     
  //   this.homeService.createFeedback(this.feedbackForm.value).subscribe(
  //     (res:any)=>{
  //       console.log(res);
  //     }
  //   )
   
    
  
  // }

  addFeedback() {
    

    // this.refID = Math.floor(Math.random() * 90000) + 10000
    // this.form.get('RefID').setValue(this.refID)
    this.feedbackForm.get('date').setValue(new Date())
    console.log(this.feedbackForm.value);
    
    this.homeService.createFeedback(this.feedbackForm.value).then((res:any)=>{
      console.log(res);
      this.toastr.success("", 'Birthdays are one day event. Your wish mean so much to me. THANK YOU!');
     this.feedbackForm.reset()
    })
    
   


  }
}


