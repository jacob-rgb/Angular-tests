import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DragService {

  private boundsContainer: BehaviorSubject<any> = new BehaviorSubject<any>(null)
  public boundsContainer$: Observable<any> = this.boundsContainer.asObservable();

  constructor() { }


  setBoundsContainer(value: any) {
    this.boundsContainer.next(value)
  }
}
