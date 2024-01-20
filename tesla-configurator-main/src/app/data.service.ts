import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
// import {handlers} from './../main';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  isDisabled: boolean=true;
  private formData = new BehaviorSubject<any>({});
  currentFormData = this.formData.asObservable();


  constructor() {}

  updateFormData(data: any) {
    this.formData.next(data);
    console.log( this.formData.next(data))
  }

     // Getter method for the property
  get myProperty(): boolean {
    return this.isDisabled;
  }

  // Setter method for the property
  set myProperty(value: boolean) {
    this.isDisabled = value;
  }

}
