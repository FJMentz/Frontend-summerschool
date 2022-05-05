import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {

  @Input() list = [];

  constructor() {
  }

  ngOnInit() {
  }

  printList(): string {
    let output = '';
    this.list.forEach(x => {
      output = output.concat(`\n${x}`);
    });

    return output;
  }

}
