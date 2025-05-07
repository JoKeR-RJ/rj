import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MulticastService } from '../../../../shared/services/multicast.service';
import { UnicastService } from '../../../../shared/services/unicast.service';

@Component({
  selector: 'app-child',
  imports: [],
  template:`

  <p>child component</p>
  <button (click)="childToParent()">figlio emette al padre</button>

`
})
export class ChildComponent implements OnInit {

  b:any;

  @Input() in='';
  @Output() out = new EventEmitter<string>();

  private _useUnicastService= inject(UnicastService)
  private _useMulticastService= inject(MulticastService)

  ngOnInit(): void {
    
  }

  childToParent(){
    this.out.emit('ciao dal fihlio');
  }

}
