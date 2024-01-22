import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
import { CarColors, CodeDetails, ConfigDetails, FormData} from '../../formdata.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
//import { handlers } from '../../../main';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [CommonModule],
  providers: [CurrencyPipe],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component implements OnInit {
  formData: FormData={
    selectedConfig: <ConfigDetails>{},
    codeDetails: <CodeDetails>{},
    selectedOption1: {
      code: '',
      description: '',
      colors: <CarColors>{}
    },
    selectedColor: <CarColors>{},
    selectedCode: '',
    selectedYoke: false,
    selectedTowHitch: false
  };
  totalCost = 0;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentFormData.subscribe((data) => {
      this.formData = data; console.log(this.formData);
      console.log(this.formData);
      this.totalCost = this.formData?.selectedConfig?.price + this.formData.selectedColor?.price;
      if(this.formData.selectedTowHitch && this.formData.selectedYoke) 
      {
       this.totalCost= this.totalCost + 2000;
       
      }
      else if(this.formData.selectedTowHitch ||  this.formData.selectedYoke)
      {
        this.totalCost= this.totalCost + 1000;
      }
      
      else{
        this.totalCost= this.totalCost;
      }
    });
  }

  onNext() {
    // Add validation logic if needed

    this.dataService.updateFormData({ ...this.formData, step3: 'Step 3 Data' });
    // this.router.navigate(['/step2']);
  }

}
