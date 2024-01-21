import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
// import {handlers} from './../main';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  //_isFlagSet: boolean=false;
  private formData = new BehaviorSubject<any>({});
  currentFormData = this.formData.asObservable();


  constructor() {}

  updateFormData(data: any) {
    this.formData.next(data);
    console.log( this.formData.next(data))
  }
  private dataSubject = new Subject<boolean>();

  // Observable to allow subscribing to the Subject
  data$ = this.dataSubject.asObservable();

  // Method to update the Subject with new data
  sendData(data: boolean) {
    this.dataSubject.next(data);
  }
 
}
