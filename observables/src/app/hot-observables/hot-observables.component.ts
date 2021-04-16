import { Observable, Observer, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-observables',
  templateUrl: './hot-observables.component.html',
  styleUrls: ['./hot-observables.component.css']
})
export class HotObservablesComponent implements OnInit {

  n: number = 0;
  n1: number = 0;
  n2: number = 0;
  s1: string = '';
  s2: string = '';

  myObservable: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.myObservable = new Observable((observer: Observer<number>) => {
      let i: number = 0;
      setInterval(() => {
      i++;
      (i == 100) ? observer.complete() : observer.next(i);
    }, 1000);
    });
  }

  usingSubjects(): void{
    const subject = new Subject<number>();
    // subject.co
  }

}
