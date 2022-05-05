import {Component} from '@angular/core';
import {AsyncSubject, BehaviorSubject, ReplaySubject, Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {

  listA: string[] = [];
  listB: string[] = [];
  listC: string[] = [];

  input = '';

  private subA: Subscription;
  private subB: Subscription;
  private subC: Subscription;

  private subject: Subject<any>;

  constructor() {
    this.subject = new Subject();
    // this.subject = new AsyncSubject();
    // this.subject = new BehaviorSubject('Hello!');
    // this.subject = new ReplaySubject(3);
  }

  // --------------- BROADCASTER -----------------

  send() {
    this.subject.next(this.input);
  }

  complete() {
    this.subject.complete();
  }

  // --------------- SUBSCRIBERS -----------------
  subscribeA() {
    this.listA.push('I subscribed!');
    this.subA = this.subject.subscribe(x => {
      this.listA.push(x);
    });
  }

  subscribeB() {
    this.listB.push('I subscribed!');
    this.subB = this.subject.subscribe(x => {
      this.listB.push(x);
    });
  }

  subscribeC() {
    this.listC.push('I subscribed!');
    this.subC = this.subject.subscribe(x => {
      this.listC.push(x);
    });
  }

}
