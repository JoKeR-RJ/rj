import { Component, inject, OnInit } from '@angular/core';
import { MulticastService } from '../../../shared/services/multicast.service';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-prova',
  imports: [],
  templateUrl: './prova.component.html'
})
export class ProvaComponent implements OnInit{

  scatola:any;

  private _useMulticast=inject(MulticastService);

  ngOnInit(): void {
    this._useMulticast.emitSubject$();
    console.log();
    
    this._useMulticast.emitBehaviorSubject$();
  }

  useMe(){
    this._useMulticast.behaviorSubject$.pipe(
      take(1),
      tap( (value) => {
        this.scatola=value
        console.log('VALORE CORRENTE del BS (da componente prova) \n => [',value,']');
      })
    ).subscribe();
  }
  
}
