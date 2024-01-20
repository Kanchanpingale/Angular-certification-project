import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-step2',
  standalone: true,
  imports: [CommonModule,
    FormsModule],
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss'
})
export class Step2Component implements OnInit {
  formData: any = {};
  configList: any;
  // code: any;
  // code1:any;
  // resolvedData: any;
  // options = {
  //   "S": {
  //     configs: [
  //       {id: 1, description: "Dual Motor All-Wheel Drive", range: 405, speed: 149, price: 74990},
  //       {id: 2, description: "Plaid - Tri Motor All-Wheel Drive", range: 396, speed: 200, price: 89990},
  //     ],
  //     towHitch: false,
  //     yoke: true
  //   },
  //   "X": {
  //     configs: [
  //       {id: 1, description: "Dual Motor All-Wheel Drive", range: 348, speed: 149, price: 79990},
  //       {id: 2, description: "Plaid - Tri Motor All-Wheel Drive", range: 333, speed: 149, price: 94990},
  //     ],
  //     towHitch: true, // costs $1,000
  //     yoke: true, // costs $1,000
  //   },
  //   "C" : {
  //     configs: [
  //       {id: 1, description: "Rear Wheel Drive", range: 250, speed: 110, price: 60990},
  //       {id: 2, description: "Dual Motor All-Wheel Drive", range: 340, speed: 112, price: 79990},
  //       {id: 3, description: "Cyberbeast - Tri Motor All-Wheel Drive", range: 320, speed: 130, price: 99990},
  //     ],
  //     towHitch: true, // costs $1,000
  //     yoke: true, // costs $1,000
  //   },
  //   "3": {
  //     configs: [
  //       {id: 1, description: "Rear-Wheel Drive", range: 272, speed: 140, price: 38990},
  //       {id: 2, description: "Long Range - Dual Motor All-Wheel Drive", range: 333, speed: 145, price: 45990},
  //       {id: 3, description: "Performance - Dual Motor All-Wheel Drive", range: 315, speed: 162, price: 50990},
  //     ],
  //     towHitch: false,
  //     yoke: false,
  //   },
  //   "Y": {
  //     configs: [
  //       {id: 1, description: "Rear-Wheel Drive", range: 260, speed: 135, price: 43990},
  //       {id: 2, description: "Long Range - Dual Motor All-Wheel Drive", range: 330, speed: 135, price: 48990},
  //       {id: 3, description: "Performance - Dual Motor All-Wheel Drive", range: 303, speed: 155, price: 52490},
  //     ],
  //     towHitch: true,
  //     yoke: false,
  //   }
  // };

constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute, private  http: HttpClient) {}

ngOnInit() {  
  this.dataService.currentFormData.subscribe((data) => (this.formData = data));
  // this.resolvedData = this.route.snapshot.data; // Access resolved data
  // console.log(this.formData)
  let url = `/options/${this.formData?.selectedCode}`
  this.http.get(url).subscribe((result: any)=>{
    // console.log(result?.configs);
    this.formData.codeDetails = result;
    this.configList = result?.configs;
    // this.formData.towHitch = this.formData?.codeDetails?.towHitch;
    // this.formData.yoke = this.formData?.codeDetails?.yoke;

  })
// this.code1=this.formData.selectedOption1
// this.options['S']=this.code1;
// const xConfigurationsDot =this.code1;
// console.log(xConfigurationsDot)

// if(this.formData.selectedOption1===this.options.)
// {
// this.code=this.formData.options1.description
// }


  
}


onNext() {
  // Add validation logic if needed

  this.dataService.updateFormData({ ...this.formData, step2: 'Step 2 Data' });
  
  // console.log(this.formData)
  this.router.navigate(['/step3']);
}
onConfigChange(){
  // console.log(this.formData.selectedConfig);
}

}
