import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { DataService } from '../../data.service';
// import { handlers } from '../../../main';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormData } from './../../formdata.model'
import {CarColors} from './../../formdata.model'
// import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-step1',
  standalone: true,
  imports: [CommonModule,
    FormsModule,HttpClientModule],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss'
})
export class Step1Component implements OnInit{
 // sharedData:boolean=false
  //isSelectedOptionsEmpty:boolean=false;
  formData: FormData={
    selectedOption1: {
      code: '',
      description: '',
      colors:<CarColors>{}
    },
    selectedColor: <CarColors>{},
    selectedConfig: {
      id: '',
      description: '',
      range: 0,
      speed: 0,
      price: 0,
      towHitch: false,
      yoke: false
    },
    selectedCode: '',
    codeDetails: {}  };
  result:any;
  selectedValue: any;
  selectedOption1: any; // ngModel variable for the first dropdown
  selectedColor: any; // ngModel variable for the second dropdown
  code:any;
  options1 : any;


  colorsList: { code: string; description: string; price: number; }[] | undefined;
  imageUrl: string ="";


  constructor(private router: Router, private dataService: DataService,private  http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:62234/models").subscribe(res=>{
      this.options1 = res;
    })

    this.dataService.currentFormData.subscribe((data) => (this.formData = data));
  }


  

  onNext() {
  
    // Add validation logic if need
    this.dataService.updateFormData({ ...this.formData, step1: 'Step 1 Data' });

    this.router.navigate(['/step2']);
  }

  getColorsByModelDescription() {
   
    const model = this.options1.find((m:any) => m.description === this.formData.selectedOption1);
    this.formData.selectedCode = model?.code;
    this.colorsList = model?.colors;
    //this.isSelectedOptionsEmpty=this.isObjectEmpty(this.formData?.selectedColor)
    //return this.dataService.sharedData;
    // console.log(this.formData);   
    return model ? model.colors : null;
    
  }

  // isObjectEmpty(obj: any): boolean {
  //   return Object.keys(obj).length === 0;
  // }

  getImage(){
    this.imageUrl = `assets/${this.formData?.selectedColor?.code}.jpg`;
    // console.log(this.imageUrl)
  }
  
}
