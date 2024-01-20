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

constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute, private  http: HttpClient) {}

ngOnInit() {  
  this.dataService.currentFormData.subscribe((data) => (this.formData = data));
  // this.resolvedData = this.route.snapshot.data; // Access resolved data

  let url = `/options/${this.formData?.selectedCode}`
  this.http.get(url).subscribe((result: any)=>{

    this.formData.codeDetails = result;
    this.configList = result?.configs;
    // this.formData.towHitch = this.formData?.codeDetails?.towHitch;
    // this.formData.yoke = this.formData?.codeDetails?.yoke;

  })
// this.code1=this.formData.selectedOption1
// this.options['S']=this.code1;
// const xConfigurationsDot =this.code1;


// if(this.formData.selectedOption1===this.options.)
// {
// this.code=this.formData.options1.description
// }


  
}


onNext() {
  // Add validation logic if needed

  this.dataService.updateFormData({ ...this.formData, step2: 'Step 2 Data' });
  

  this.router.navigate(['/step3']);
}
onConfigChange(){

}

}
