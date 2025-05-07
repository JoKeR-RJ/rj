import { Component, inject, OnInit } from '@angular/core';
import { MulticastService } from '../../../shared/services/multicast.service';

@Component({
  selector: 'app-multicast',
  imports: [],
  template:` 
  <p>multicast works => console</p>
  `
})
export class MulticastComponent implements OnInit{

  private _useMulticastService= inject(MulticastService);

  ngOnInit(): void {
    this._useMulticastService.emitSubject$();
  }


}
