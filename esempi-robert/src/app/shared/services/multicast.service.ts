import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MulticastService {

  constructor() { }

  subject$ = new Subject();
  behaviorSubject$ = new BehaviorSubject<any>('valore originale del bs');

  emitSubject$(){
    of(3,7,9).subscribe(val => console.log(val) )
    
    this.subject$.subscribe(
      (value) => {
        console.log(value)
      });

    this.subject$.next(9);
    this.subject$.next(9);

    
  }

  emitBehaviorSubject$(){
    this.subject$.next('valore 1');
    this.subject$.next('valore 2');
    this.subject$.next('valore 3');
    this.subject$.complete();
    this.subject$.next('valore 4');
  }
  
}
