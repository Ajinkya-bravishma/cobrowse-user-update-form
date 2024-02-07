import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from './form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  

  hide=true;
  
  constructor(private route:Router,private formService:FormService){}
  ngOnInit() {
   
   
  
   
  }
 

  changeMobileNumber(){
    this.route.navigate(['mobile']);
    this.hide=false;
    const updatedData =
    this.formService.formData$, title='Mobile number',
    fieldThree='Old Mobile No :',
    fieldFour='New Mobile No.: '
     

    this.formService.updateFormData({title,fieldThree,fieldFour});
  }

  changeAddress(){
    this.route.navigate(['address']);
    this.hide=false;
    const updatedData =
      this.formService.formData$, title='Address',
      fieldThree='Address Line 1 :',
      fieldFour='Address Line 2:'
      
      ;

      this.formService.updateFormData({title,fieldThree,fieldFour});
    
  }
  changeEmail(){
    this.route.navigate(['email']);
    this.hide=false;
    const updatedData =
      this.formService.formData$, title='Email',
      fieldThree='Old Email No :',
      fieldFour='New Email No.: '
   
      ;

      this.formService.updateFormData({title,fieldThree,fieldFour});
  }

}
