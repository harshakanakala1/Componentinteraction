import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  second:String='';
  title = 'componentinteraction';
  elementone:string='hello this is custom property binding';
  description:string='this is combined with both custom property binding and event binding';
  disp(event:Event){
this.second=(event.target as HTMLInputElement).value;
  }
}
