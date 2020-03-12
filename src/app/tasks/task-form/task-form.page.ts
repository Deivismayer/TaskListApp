import { TaskService } from './../shared/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.page.html',
  styleUrls: ['./task-form.page.scss'],
})
export class TaskFormPage implements OnInit {
task: Task = new Task ( );

title: string = "Nova Tarefas";

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private TaskService: TaskService


    ) { }


  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id) { 
        this.task = this.TaskService.getById(parseInt(id));
        this.title = 'AlterandoTarefa';


    }

  }
onSubmit(){

  
}
}
