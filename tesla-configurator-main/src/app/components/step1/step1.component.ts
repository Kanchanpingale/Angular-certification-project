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
  // options = [
  //   { value: 'option1', label: 'Option 1' },
  //   { value: 'option2', label: 'Option 2' },
  //   { value: 'option3', label: 'Option 3' },
  // ];
  options1 : any;

  // options1= [
  //   { code: "S",
  //     description: "Model S",
  //     colors: [
  //       {code: "white", description: "Pearl White Multi-Coat", price: 0},
  //       {code: "black", description: "Solid Black", price: 0},
  //       {code: "blue", description: "Deep Blue Metallic", price: 0},
  //       {code: "grey", description: "Stealth Grey", price: 0},
  //       {code: "red", description: "Ultra Red", price: 0}
  //     ]
  //   },
  //   { code: "X",
  //     description: "Model X",
  //     colors: [
  //       {code: "white", description: "Pearl White Multi-Coat", price: 0},
  //       {code: "black", description: "Solid Black", price: 0},
  //       {code: "blue", description: "Deep Blue Metallic", price: 0},
  //       {code: "grey", description: "Stealth Grey", price: 0},
  //       {code: "red", description: "Ultra Red", price: 0}
  //     ]
  //   },
  //   { code: "C",
  //     description: "Cybertruck",
  //     colors: [
  //       {code: "grey", description: "Stainless Steel", price: 0},
  //       {code: "black", description: "Satin Black", price: 6500},
  //       {code: "white", description: "Satin White", price: 6500}
  //     ]
  //   },
  //   { code: "3",
  //     description: "Model 3",
  //     colors: [
  //       {code: "white", description: "Pearl White Multi-Coat", price: 1000},
  //       {code: "black", description: "Solid Black", price: 1500},
  //       {code: "blue", description: "Deep Blue Metallic", price: 1000},
  //       {code: "grey", description: "Midnight Silver Metallic", price: 0},
  //       {code: "red", description: "Red Multi-Coat", price: 2000}
  //     ]
  //   },
  //   { code: "Y",
  //     description: "Model Y",
  //     colors: [
  //       {code: "white", description: "Pearl White Multi-Coat", price: 1000},
  //       {code: "black", description: "Solid Black", price: 2000},
  //       {code: "blue", description: "Deep Blue Metallic", price: 1000},
  //       {code: "grey", description: "Midnight Silver Metallic", price: 0},
  //       {code: "red", description: "Red Multi-Coat", price: 2000}
  //     ]
  //   }

  // ];
  colorsList: { code: string; description: string; price: number; }[] | undefined;
  imageUrl: string ="";


  constructor(private router: Router, private dataService: DataService,private  http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:62234/models").subscribe(res=>{
      this.options1 = res;
    })

    this.dataService.currentFormData.subscribe((data) => (this.formData = data));
    // console.log(this.selectedOption1);    
    // let result= this.dataService.getJsonConstant();
    // console.log(result);
    // this.options1 = this.dataService.getJsonConstant();
//     ((data: any)=>
//       {
// this.result=data;
// console.log(this.result)
//       })
  }


  

  onNext() {
  
    // Add validation logic if need
    this.dataService.updateFormData({ ...this.formData, step1: 'Step 1 Data' });

    this.router.navigate(['/step2']);
  }

  getColorsByModelDescription() {
    //formData.selectedOption1
    // console.log(this.formData)
    // const model = this.options1.find((m) => m.description === this.formData.selectedOption1);
    // this.formData.selectedCode = model?.code;
    // this.colorsList = model?.colors;
    // console.log(model ? model.colors : null);   
    // return model ? model.colors : null; 

    // this.formData.selectedOption1.code
    
    const model = this.options1.find((m:any) => m.description === this.formData.selectedOption1);
    this.formData.selectedCode = model?.code;
    this.colorsList = model?.colors;
    // console.log(this.formData);   
    return model ? model.colors : null; 
  }

  getImage(){
    this.imageUrl = `assets/${this.formData?.selectedColor?.code}.jpg`;
    // console.log(this.imageUrl)
  }
  
}
