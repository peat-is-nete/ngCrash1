import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Task Tracker';

  constructor() { }

  ngOnInit(): void {}

  toggleAddTask() {
    console.log('Firing because of "btnClick" event.')
    console.log('toggleAddTask method here');
  }

}
