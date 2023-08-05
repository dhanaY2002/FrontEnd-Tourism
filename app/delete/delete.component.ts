import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  allTourism:any

  constructor(private http:HttpClient){}

  ngOnInit(){
    let res = this.http.get("http://localhost:1236/tourism/all");
    res.subscribe(
      data=>this.allTourism=data
    );

  }

  delteUser(id:string){
console.log(id);
let res = this.http.get("http://localhost:1236/tourism/delete?id="+id);
    res.subscribe(
      data=>this.allTourism=data
    );
  }

}