import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text: any;
  @Input() color: any;
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('this is coming from the ngOnInit');

  }

  onClick() {
    console.log('button clicked from button component.');
    console.log('emitting "btnClick" Output.');
    this.btnClick.emit();
  }

}
