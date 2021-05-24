import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Task} from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {


  @Input()
  taskz!: Task;

  @Output()
  onDeleteTask: EventEmitter<Task> = new EventEmitter();

  @Output()
  onToggleReminder: EventEmitter<Task> = new EventEmitter();

  iconFaTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(taskzz: Task):void{
    console.log(taskzz);
    this.onDeleteTask.emit(taskzz);
  }

  onToggle(taskzz: Task):void{
    console.log(taskzz);
    this.onToggleReminder.emit(taskzz);
  }


}
