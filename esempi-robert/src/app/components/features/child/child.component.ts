import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../../../app.component';

@Component({
  selector: 'app-child',
  imports: [],
  template:`

  <p>child component</p>
  <button (click)="childToParent()">figlio emette al padre</button>

`
})
export class ChildComponent implements OnInit {


  private a=inject(AppComponent)

  b:any;

  @Input() in='';

  @Output() out = new EventEmitter<string>();

  ngOnInit(): void {
    this.a.subject$.subscribe({
      next: (ciao)=>{
        this.b= ciao;
        console.log('sono la BEHAVIOR SUBJECT',ciao);
        
      }
    });
  }

  childToParent(){
    this.out.emit('ciao dal fihlio');
  }



}
