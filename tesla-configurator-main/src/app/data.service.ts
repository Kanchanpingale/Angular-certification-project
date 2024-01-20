import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
//import { HttpClient } from '@angular/common/http';
// import {handlers} from './../main';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData = new BehaviorSubject<any>({});
  currentFormData = this.formData.asObservable();

  constructor() {}

  updateFormData(data: any) {
    this.formData.next(data);
    console.log( this.formData.next(data))
  }

    

}
