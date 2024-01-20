import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Step1ResolverServiceTsService {

  constructor(private  http: HttpClient) { }
  resolve(): Observable<any> {
    
    // Fetch data for Step 1 from your API or service
    return of(/* fetched data for Step 1 */);
  }
}
