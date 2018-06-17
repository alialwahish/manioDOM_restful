import { Component, OnInit } from '@angular/core';
import {HttpService } from "./http.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks ;
  constructor(private  _HttpService: HttpService){
    
  }

  ngOnInit(){
    this.getTasksFrmSrvc();
  }
  getTasksFrmSrvc(){
    let obsDat= this._HttpService.getTasks()
    obsDat.subscribe(data => {
      console.log("Got Dat Frm Server",data)
      this.tasks= data;
    })
  }
}
