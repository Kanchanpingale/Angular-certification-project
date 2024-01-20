import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { Step1Component } from './components/step1/step1.component';
import { Step2Component } from './components/step2/step2.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe,RouterOutlet,RouterModule],
  templateUrl:'app.component.html',
  styleUrls:['app.component.scss']
})
export class AppComponent {
  name = 'Angular';

}
