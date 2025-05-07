import { Component, inject, Injectable, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BehaviorSubject, Subject, take, tap } from 'rxjs';
import { UnicastService } from './shared/services/unicast.service';
import { MulticastService } from './shared/services/multicast.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  private _rt=inject(Router)

moveTo() {
this._rt.navigate(['/main']);
}

  data:any;

  private _useUnicastService= inject(UnicastService)
  private _useMulticastService= inject(MulticastService)



 

  ngOnInit(): void {

    // this.behaviorSubject$.next('sono la BEHAVIOR')

    // console.log(this.behaviorSubject$.value);


    // this.subject$.subscribe(value => {
    //   console.log('Valore della subject:', value);
    // });

    // this.subject$.next('subject')

 
    
  }

  unicastSubscription(){
    this._useUnicastService.getDataFromUrl().pipe(
      take(1),
      tap( (store) => {
        this.data=store
        console.log(store); 
      })
    ).subscribe()
  }


}
