import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, Observable, Observer, of, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-basic-creation',
  templateUrl: './basic-creation.component.html',
  styleUrls: ['./basic-creation.component.css']
})
export class BasicCreationComponent implements OnInit {

  subscrition: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {
  }

  observableCreate() {
    const hello = Observable.create((observer: Observer<string>) => {
      observer.next('hello');
      observer.next('from');
      observer.next('Observable');
      observer.complete();
    });
    hello.subscribe(val => console.log(val));
  }

  fromClick() {
    from ([1,2,3,4,5,{x:10,y:20}])
    .subscribe((v) => console.log(v));
    const source = from ([1,2,3,4,5,{x:10,y:20}]);
    source.subscribe((v) => console.error(v));
    source.subscribe((v) => console.warn(v));
    
  }

  ofClick() {
    of([1,2,3,4,5,{x:10,y:20}])
    .subscribe((v) => console.log(v));
  }
  intervalClick() {
    const source =  interval(1000);
    const subscrition = source.subscribe((v) => console.log(v));
    this.subscrition.add (subscrition);
  }  

  timerClick() {
    // const source = timer(1000);
    const source = timer(3000, 1000);
    const subscrition = source.subscribe((v) => console.log(v));
    this.subscrition.add (subscrition);
  }


  fromEventClick() {
    const subscrition = fromEvent(document, 'click')
    .subscribe((e) => console.log(e));
    this.subscrition.add (subscrition);
  }

  unsubscribeClick() {
    this.subscrition.unsubscribe();
    this.subscrition = new Subscription();
  }

}


