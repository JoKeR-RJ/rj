import { Component, inject, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonService } from './shared/services/common.service';
import { BehaviorSubject, Subject, take, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  title = 'esempi-robert';

  data:any;
  private _useCommonService= inject(CommonService)

  subject$ = new Subject();
  behaviorSubject$ = new BehaviorSubject<any>('valore originale');

  ngOnInit(): void {
    this.subscription()
    this.behaviorSubject$.next('dgdfgdfgdghrsthshtrsyh')

    this.subject$.next('subject')
  }


  subscription(){
    this._useCommonService.getDataFromUrl().pipe(
      take(1),
      tap( (store) => {
        this.data=store
        console.log(store); 
      })
    ).subscribe()
  }
}
