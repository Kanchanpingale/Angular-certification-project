import { Routes } from '@angular/router';
import { StepperComponent } from './components/stepper/stepper.component';

export const APP_ROUTE: Routes = [
  
    {
        path: '',
        component: StepperComponent,
        loadChildren: () => import('./components/stepper/stepper.routes')
                                   .then(c => c.STEPPER_ROUTE),


    }
];
