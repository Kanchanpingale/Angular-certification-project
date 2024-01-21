import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [RouterModule,RouterOutlet,HttpClientModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent implements OnInit {
  isDisabledStep2: boolean=true
  constructor(private dataService: DataService){}
  ngOnInit(): void {
    this.dataService.data$.subscribe(data => {
      this.isDisabledStep2 = data;
      console.log(this.isDisabledStep2)
    
    });
  }
 

}
