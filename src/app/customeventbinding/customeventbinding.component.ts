import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-customeventbinding',
  templateUrl: './customeventbinding.component.html',
  styleUrls: ['./customeventbinding.component.css']
})
export class CustomeventbindingComponent {

  @Input() event='';

  @Output() public secondevent=new EventEmitter();

  seconddescription(){
   this.secondevent.emit("Hello this is event binding");
  }

}
