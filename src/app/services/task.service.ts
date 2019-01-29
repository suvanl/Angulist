import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Task } from "../models/Task";
import { Observable } from "rxjs";

const httpOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };

@Injectable({ providedIn: "root" })
export class TaskService {
  baseURL: string = "https://jsonplaceholder.typicode.com/todos";
  limit: string = "?_limit=15";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseURL + this.limit);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.baseURL}/${task.id}`;
    return this.http.delete<Task>(url, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.baseURL, task, httpOptions);
  }

  toggleCompleted(task: Task): Observable<any> {
    const url = `${this.baseURL}/${task.id}`;
    return this.http.put(url, task, httpOptions);
  }
}
