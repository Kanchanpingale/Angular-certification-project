import { Routes } from '@angular/router';
import { Step2Component } from '../step2/step2.component';
import { Step3Component } from '../step3/step3.component';
import { Step1Component } from '../step1/step1.component';
import { Step1ResolverServiceTsService } from '../step2/step1-resolver.service.ts.service';

export const STEPPER_ROUTE: Routes = [
  
    {path: 'step1', component: Step1Component, }, 
    {path: 'step2', component: Step2Component
    // ,     resolve: {
    //     resolvedData: Step1ResolverServiceTsService,
    //   }
    },
    {path: 'step3', component: Step3Component},
    
    { path: '', redirectTo: 'step1', pathMatch: 'full' }
   
];
