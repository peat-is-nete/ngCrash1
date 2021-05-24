import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!: string;
  reminder: boolean = false;

  constructor() {
    this.text = '';

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(!this.text) {
      alert('Please add a test!');
      console.log("ok");
      return;
    }

    // creating a new task object to send
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    // clearing form after submission
    this.text = '';
    this.day = '';
    this.reminder = false;

  }

}
