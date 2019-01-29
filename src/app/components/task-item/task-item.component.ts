import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Task } from "src/app/models/Task";
import { TaskService } from "../../services/task.service";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.css"]
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  setClasses(): object {
    const classes = { task: true, "is-complete": this.task.completed };
    return classes;
  }

  onToggle(task: Task): void {
    task.completed = !task.completed;
    this.taskService.toggleCompleted(task).subscribe();
  }

  onDelete(task: Task): void {
    this.deleteTask.emit(task);
  }
}
