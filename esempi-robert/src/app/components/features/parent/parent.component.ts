import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  imports: [ChildComponent,CommonModule],
  template: `

  <app-child [in]="msg" (out)="receiveChild($event)"></app-child>

  <div *ngIf="container.length> 1" >
   <p>parent component</p>
   <p>{{container}}</p>
  </div>

  `
})
export class ParentComponent {
  msg:string='msg padre';
  text:string='';
  container:string='';

  receiveChild(text:string){
    this.container = text ;
  }

}
