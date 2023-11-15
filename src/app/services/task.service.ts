import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paths } from "../constants/paths.constants";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(Paths.API_URL);
  }

  getTaskById(id: number): Observable<any> {
    const url = `${Paths.API_URL}/${id}`;
    return this.http.get<any>(url);
  }

  addTask(task: any): Observable<any> {
    return this.http.post<any>(Paths.API_URL, task);
  }

  updateTask(task: any): Observable<any> {
    const url = `${Paths.API_URL}/${task.id}`;
    return this.http.put<any>(url, task);
  }

  deleteTask(id: number): Observable<any> {
    const url = `${Paths.API_URL}/${id}`;
    return this.http.delete<any>(url);
  }
}