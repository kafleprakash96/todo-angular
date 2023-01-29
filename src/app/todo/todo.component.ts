import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  list:any[] = []

  addTask(data:string){
    this.list.push({id:this.list.length,name:data})
    
  }

  removeTask(id:number){
    this.list = this.list.filter((item) => item.id !== id);
  }

}
