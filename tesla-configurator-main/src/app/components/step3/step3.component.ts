import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';
//import { handlers } from '../../../main';

@Component({
  selector: 'app-step3',
  standalone: true,
  imports: [],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss'
})
export class Step3Component implements OnInit {
  formData: any = {};
  totalCost = 0;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentFormData.subscribe((data) => {
      this.formData = data; console.log(this.formData);
      console.log(this.formData);
      this.totalCost = this.formData?.selectedConfig?.price + this.formData.selectedColor?.price;
      if(this.formData.selectedTowHitch) this.totalCost + 1000;
    });
  }

  onNext() {
    // Add validation logic if needed

    this.dataService.updateFormData({ ...this.formData, step3: 'Step 3 Data' });
    // this.router.navigate(['/step2']);
  }

}
