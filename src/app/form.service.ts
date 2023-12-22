import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

 private formDataSubject= new BehaviorSubject<any>({
  title: '',
fieldThree:'',
fieldFour:''
 });

 formData$ =
 this.formDataSubject.asObservable();

 updateFormData(updatedData :any){
  this.formDataSubject.next(updatedData);
 }

 
}
